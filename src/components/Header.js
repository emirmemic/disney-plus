import React from "react";
import styled from "styled-components";
import img1 from "../assets/images/logo.svg";
import img2 from "../assets/images/home-icon.svg";
import img3 from "../assets/images/search-icon.svg";
import img4 from "../assets/images/watchlist-icon.svg";
import img5 from "../assets/images/movie-icon.svg";
import img6 from "../assets/images/series-icon.svg";

function Header() {
  return (
    <Nav>
      <Logo src={img1} />
      <NavMenu>
        <a>
          <img src={img2} />
          <span>HOME</span>
        </a>
        <a>
          <img src={img3} />
          <span>SEARCH</span>
        </a>
        <a>
          <img src={img4} />
          <span>WATCHLIST</span>
        </a>
        <a>
          <img src={img5} />
          <span>MOVIES</span>
        </a>
        <a>
          <img src={img6} />
          <span>SERIES</span>
        </a>
      </NavMenu>
      <UserImg src="https://swisscognitive.ch/wp-content/uploads/2017/07/Walt-Disney-Studios.jpg" />
    </Nav>
  );
}

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

  a {
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
