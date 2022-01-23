import React, { useState, useEffect } from "react";
import styled from "styled-components";
import img1 from "../assets/images/logo.svg";
import img2 from "../assets/images/home-icon.svg";
import img3 from "../assets/images/search-icon.svg";
import img4 from "../assets/images/watchlist-icon.svg";
import img5 from "../assets/images/movie-icon.svg";
import img6 from "../assets/images/series-icon.svg";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { auth, provider } from "../firebase";
import {
  selectUserName,
  selectUserPhoto,
  setUserLogin,
  setSignOut,
} from "../features/user/userSlice";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const Header = (props) => {
  const [logout, setLogout] = useState(false);
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);
const history=useHistory()
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({ prompt: "select_account" });
  const signIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;

        dispatch(
          setUserLogin({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
          })
        );
        history.push('/')
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };

  return (
    <Nav>
      <Logo src={img1} />

      {!userName ? (
        <LoginContainer>
          <Login onClick={signIn}>Login</Login>
        </LoginContainer>
      ) : (
        <>
          <NavMenu>
            <Link to="/">
              <img src={img2} />
              <span>HOME</span>
            </Link>

            <a href="https://www.disney.com/">
              <img src={img4} />
              <span>WATCHLIST</span>
            </a>
            <a href="https://movies.disney.com/all-movies">
              <img src={img5} />
              <span>MOVIES</span>
            </a>
            <a href="https://shows.disney.com/">
              <img src={img6} />
              <span>SERIES</span>
            </a>
            <a href="https://search.disney.com/">
              <img src={img3} />
              <span>SEARCH</span>
            </a>
          </NavMenu>

          <LoginContainer>
            {logout && <Login onClick={()=>dispatch(setSignOut())}>Sign Out</Login>}
            <UserImg onClick={()=>setLogout(!logout)} src={userPhoto.toString()} />
          </LoginContainer>
        </>
      )}
    </Nav>
  );
};

export default Header;

const Nav = styled.nav`
  height: 70px;
  background: #090b13;
  display: flex;
  align-items: center;
  padding: 0 36px;
  overflow-x: hidden;
`;

const Logo = styled.img`
  width: 80px;
`;

const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 25px;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }

  a {
    color: white;
    text-decoration: none;
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;

    img {
      height: 20px;
    }

    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      position: relative;

      &::after {
        content: "";
        height: 2px;
        background: white;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform-origin: left center;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        transform: scaleX(0);
      }
    }
    &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
`;

const UserImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
`;

const Login = styled.div`
margin-right: 15px;
  border: 1px solid #f9f9f9;
  padding: 8px 16px;
  border-radius: 4px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  background-color: rgba(0, 0, 0, 0.6);
  transition: all 0.2s ease 0s;
  cursor: pointer;

  &&:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
  }
`;

const LoginContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;
