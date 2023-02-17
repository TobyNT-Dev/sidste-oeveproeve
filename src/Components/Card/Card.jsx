import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { FavButton } from '../FavButton/FavButton'
export const Card = (props) => {
  return (
    <>
    <StyledCard>
        <div className="fav">
        {sessionStorage.getItem("user") == null ? <></> : <FavButton data={props} /> }
        </div>
        <Link className="link" to={`/${props.item.id}`}>
        <div className="img-box"><img src={props.item.images[0].filename.medium} alt="Image of the house" /></div>
        <h2>{props.item.address}</h2>
        <p className="location">{`${props.item.zipcode} ${props.item.city}`}</p>
        <p className="type">{props.item.type}</p>
        <p className="energy-label">{props.item.energy_label_name}</p>
        <p className="size">{`${props.item.num_rooms} Værelse(r), ${props.item.floor_space}m²`}</p>
        <p className="price">{`${props.item.price} DKK`}</p>
        </Link>
    </StyledCard>
    </>
  )
}
const StyledCard = styled.div`
background-color: #ffffffd9;
width: 25vw;
transition: 300ms ease-in-out;
font-family: sans-serif;
display: inline-block;
border: 1px solid grey;
border-radius: 3px;
margin-bottom: 1vw;
box-shadow: #00000021 2px 2px 10px;
position: relative;
&:hover {
    box-shadow: #0000003a -5px -5px 8px;
    transform: scale(1.05);
    background-color: #ffffff79;
    transition: 300ms ease-in-out;
}
.fav {
    position: absolute;
    top: 16vw;
    left: 20vw;
}
.link {
    cursor: pointer;
    text-decoration: none;
    color: black;
h2 {
    font-size: 18px;
    margin: -1vw 1.5vw 1vw 1.5vw;
}
.location {
    margin: 0 1.5vw;
    font-size: 15px;
    font-weight: 600;
}
.type {
    margin: 0 1.5vw;
    font-size: 15px;
    font-weight: 200;
}
.energy-label {
    margin: 1vw 1vw 1vw 1.5vw;
    vertical-align: center;
    background-color: #14C451;
    display: inline-block;
    height: 25px;
    width: 25px;
    text-align: center;
    font-size: 20px;
    font-weight: 700;
    color: white;
}
.size {
    margin: 0vw;
    font-size: 15px;
    font-weight: 600;
    display: inline-block;
}
.price {
    margin: 0vw 1.5vw;
    font-size: 15px;
    font-weight: 600;
    display: inline-block;
    display: flex-end;
}
.img-box {
    width: 22vw;
    height: 12vw;
    margin: 1.5vw;
    overflow: hidden;
    img {
        width: 100%;
    }
}
}
`