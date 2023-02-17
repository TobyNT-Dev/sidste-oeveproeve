import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import AppService from '../Appservices/Appservice'
import { Login } from '../Login/Login'

export const Reviews = () => {
    const [data, setData] = useState()
    const [onOff, setOnOff] = useState(false)
    const [open, setOpen] = useState("100")
    const [opacity, setOpacity] = useState("-1")
    const [formData, setFormData] = useState({title: "", content: ""})
    let key
    useEffect(() => {
        AppService.GetList("reviews").then((response) => {
            setData(response.data.items)
        })
    },[])
    if (data?.length) {
        key = Math.floor(Math.random() * data.length)
    }
    const handleSubmit = () => {
        AppService.Create("reviews", formData).then((response) => {
        })
    }
    const handleOpenClose = () => {
        if (onOff == false) {
            setOpen("0")
            setOpacity("1")
            setOnOff(true)
        } else {
            setOpacity("-1")
            setOpen("100")
            setOnOff(false)
        }
    }
  return (
    <StyledReviews>
        <h3>Det siger kunderne:</h3>
            {data?.map((item, idx) => {
                if (idx == key) {
                    return (
                        <div className="review-box" key={idx}>
                            <h4>{item.title}</h4>
                            <p>{item.content}</p>
                            <p>{`${item.user.firstname}, ${item.created_friendly}`}</p>
                        </div>
                    )
                }
            })}
        <OuterBox open={open} opacity={opacity}>
            <p onClick={() => handleOpenClose()}>✖</p>
            <form onSubmit={(e) => {
                e.preventDefault()
                if (sessionStorage.getItem("user") !== null) {
                    handleSubmit()
                }
            }}>
                <div>
                    <label htmlFor="title">Titel: <input value={formData.title} onChange={(e) => setFormData((state) => ({...state, title: e.target.value}))} required name="title" type="text" /></label>
                    <label htmlFor="content">Andmeldelse: <textarea value={formData.content}  onChange={(e) => setFormData((state) => ({...state, content: e.target.value}))} required name="content" type="text" /></label>
                </div>
                <button onClick={() => handleOpenClose()}>Send</button>
            </form>
        </OuterBox>
        {sessionStorage.getItem("user") == null ? <></> : <p className="write" onClick={() => handleOpenClose()}>Skriv en anmeldelse</p>}
    </StyledReviews>
  )
}
const StyledReviews = styled.div`
h3 {
    text-align: center;
}
font-family: sans-serif;
.review-box {
    height: 10vw;
    padding: 0.2vw;
    text-align: center;
    background-color: #FED9C9;
}
.write {
    text-align: center;
    color: #2626cb;
    cursor: pointer;
    font-weight: 600;
}
`
const OuterBox = styled.div.attrs(props => ({
    style: {
        marginLeft: `${props.open}vw`,
        opacity: `${props.opacity}`,
    }
}))`
    transition: 400ms ease-in-out;
    margin-top: -10vw;
    margin-left: 100vw;
    width: 100vw;
    background-color: #333333;
    position: absolute;
    display: flex;
    justify-content: center;
    form {
        height: 10vw;
        text-align: center;
        display: flex;
        align-items: center;
        div {
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            label {
                color: white;
                textarea {
                    font-family: sans-serif;
                    resize: none;
                    width: 18vw;
                    height: 6vw;
                    border: none;
                    border-radius: 3px;
                }
                margin-bottom: 0.5vw;
                input {
                    font-family: sans-serif;
                    width: 18vw;
                    border: none;
                    border-radius: 3px;
                }
            }
        }
        button {
            width: 5vw;
            font-size: 1.2vw;
            height: 2vw;
            border: none;
            border-radius: 3px;
            align-self: flex-end;
            margin-bottom: 1.5vw;
            margin-left: 1vw;
        }
    }
    p {
        font-family: sans-serif;
        position: absolute;
        margin-left: -95vw;
        font-size: 1.3vw;
        font-weight: 800;
        cursor: pointer;
    }
`