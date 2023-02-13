import React, { useEffect, useState, useRef } from 'react'
import styled from 'styled-components'
import AppService from '../Appservices/Appservice'
import Arrow from '../../Assets/Images/chevron.png'

export const ImageSlider = () => {
    const [slide, setSlide] = useState(1)
    const [slideCount, setSlideCount] = useState(1)
    const divRef = useRef(null)
    const [data, setData] = useState([])

    useEffect(() => {
        AppService.GetList("images").then((response) => {
            setData(response.data.items)
        }).catch((error) => console.error(error))
    },[])
    
    useEffect(() => {
        const slideLoop = setInterval(() => {
            if (slideCount < 9) {
                setSlideCount(state => state + 1)
                setSlide(state => state + 1)
            }
            else if (slideCount >= 9 && slide > 2){
                setSlideCount(state => state + 1)
                setSlide(state => state - 1)
            }
            else {
                setSlideCount(1)
                setSlide(1)
            }
            clearInterval(slideLoop)
        }, 7000);
    },[slide])

    return (
    <StyledSlider>
        <StyledImageBox slide={`${slide}00`}>
            {data.map((item, idx) => {
            return (
                <div key={idx}>
                <img key={`img${idx}`} src={item?.image[1]} alt="Image" />
                </div>
            )
            })}
        </StyledImageBox>
    </StyledSlider>
  )
}
const StyledImageBox = styled.div.attrs(props => ({
    style: {
        marginLeft: `-${props.slide}vw`,
    }
}))`
width: 10000vw;
display: flex;
transition: 800ms ease-in-out;
z-index: 0;
div {
    width: 100vw;
    display: inline-block;
    img {
        width: 100%;
    }
}
`

const StyledSlider = styled.div`
    margin-top: -10vw;
    overflow: hidden;
    width: 100vw;
    height: 45vw;
    h2 {
        position: absolute;
        z-index: 10;
        left: 30vw;
        top: 15vw;
        font-size: 5vw;
        font-family: Lobster;
        color: white;
        text-shadow: rgba(0, 0, 0, 0.733) 0px 5px 25px;
    }
`