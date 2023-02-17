import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Login } from '../Login/Login.jsx'

export const NavBar = () => {
  return (
    <StyledNav>
        <div className="content">
        <Link to="/"><h2>HomeLands</h2></Link>
        <Link to="/">Forside</Link>
        <Link to="/homes-for-sale">Boliger til salg</Link>
        <Login />
        <input type="text" placeholder='Indtast søgeord' />
        </div>
        <div className="triangle1"></div><div className="triangle2"></div>
    </StyledNav>
  )
}

const StyledNav = styled.nav`
width: 100vw;
.content {
    position: relative;
    z-index: 10;
    background-color: black;
    height: 3vw;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    h2 {
        margin: 5vw 35vw 0vw 0;
        letter-spacing: 0.1vw;
        font-size: 3.5vw;
        font-family: "Odibee sans", sans-serif;
        color: white;
        font-weight: 100;
        background-color: #AF7627;
        border: black solid 2px;
        padding: 0.5vw 1vw 0vw 1vw;
    }
    input {
        border: none;
        border-radius: 2px 0px 0px 2px;
        font-size: 1.3vw;
        margin-right: 4vw;
    }
    .nav-button {
        margin: 0 1vw 0 0;
        letter-spacing: 0.1vw;
        font-size: 1.5vw;
        font-family: "Odibee sans", sans-serif;
        background-color: transparent;
        border: none;
        cursor: pointer;
        color: white;
        &:hover {
            color: #AF7627;
        }
}
a {
    margin: 0 1vw 0 0;
    letter-spacing: 0.1vw;
    font-size: 1.5vw;
    font-family: "Odibee sans", sans-serif;
    color: white;
    text-decoration: none;
    &:hover {
        color: #AF7627;
    }
}
}
.triangle1 {
    position: relative;
    display: inline-block;
    z-index: 1;
    width: 0px;
    height: 0px;
    border-style: solid;
    border-width: 4vw 35vw 0 0;
    border-color: #000 transparent transparent transparent;
}
.triangle2 {
    position: absolute;
    z-index: 1;
    display: inline-block;
    width: 0px;
    height: 0px;
    border-style: solid;
    border-width: 4vw 0 0 65vw;
    border-color: #000 transparent transparent transparent;
}
`