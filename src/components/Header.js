import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <Nav>
      <Logo src="/images/logo.svg" />
      <NavMenu>
        <a>
          <img src="/images/home-icon.svg" />
          <span>HOME</span>
        </a>
        <a>
          <img src="/images/search-icon.svg" />
          <span>SEARCH</span>
        </a>
        <a>
          <img src="/images/watchlist-icon.svg" />
          <span>WATCHLIST</span>
        </a>
        <a>
          <img src="/images/movie-icon.svg" />
          <span>MOVIES</span>
        </a>
        <a>
          <img src="/images/series-icon.svg" />
          <span>SERIES</span>
        </a>
      </NavMenu>
      <UserImg src="data:image/jpeg;base64,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" />
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
