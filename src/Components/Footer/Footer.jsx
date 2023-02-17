import React from 'react'
import styled from 'styled-components'
import { FaTwitterSquare } from 'react-icons/fa';
import { FaFacebookSquare } from 'react-icons/fa';

export const Footer = () => {
  return (
    <StyledFooter>
        <h2>HomeLands</h2>
        <div> 
            <p>Øster Uttrupvej 5</p>
            <p>9000 Aalborg</p>
        </div>
        <div> 
            <p>Email: info@homelands.dk</p>
            <p>Telefon: +45 11 22 33 44</p>
        </div>
        <FaTwitterSquare className="twitter"/>
        <FaFacebookSquare />
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
margin-top: 5vw;
background-color: black;
color: white;
h2 {
    display: inline-block;
    font-family: "Odibee sans", sans-serif;
    font-size: 3vw;
    font-weight: 200;
    margin-left: 4.5vw;
}
div {
    margin-left: 15vw;
    display: inline-block;
    p {
        font-family: sans-serif;
        font-size: 1vw;
        height: 0.4vw;
    }
}
svg {
    height: 2vw;
    width: 2vw;
}
.twitter {
    margin-left: 27vw;
}
`