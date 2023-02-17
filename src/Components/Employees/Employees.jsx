import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import AppService from '../Appservices/Appservice'

export const Employees = () => {
    const [data, setData] = useState()
    useEffect(() => {
        AppService.GetList("staff").then((response) => {
            setData(response.data.items)
        })
    },[])
  return (
    <EmployeeCards>
        {data?.map((item, idx) => {
            return (
            <div key={idx} className="card">
                <div>
                    <h3>{`${item.firstname} ${item.lastname}`}</h3>
                    <p>{`Partner, ${item.position}`}</p>
                    <p>{`Email: ${item.email}`}</p>
                    <p>{`Mobil: ${item.phone}`}</p>
                </div>
                <img src={item.image} alt="" />
            </div>
            )
        })}
    </EmployeeCards>
  )
}

const EmployeeCards = styled.div`
margin-top: 5vw;
display: flex;
justify-content: space-around;
.card {
    border: 1px solid #b1b1b1;
    display: inline-block;
    img {
        width: 16vw;
        height: 22vw;
    }
    div {
        border-top: 1px solid #b1b1b1;
        position: absolute;
        background-color: #ffffff76;
        margin-top: 19vw;
        width: 16vw;
        height: 3vw;
        overflow: hidden;
        transition: 200ms;
        color: black;
        font-family: sans-serif;
        h3 {
            font-size: 1vw;
            margin: 0.2vw;
        }
        p {
            margin: 0.2vw;
            font-size: 1vw;
        }
        
    }
    &:hover {
        div {
            border-top: 1px solid #3d3d3dd3;
            transition: 200ms;
            margin-top: 16vw;
            height: 6vw;
            background-color: #1c1c1cd2;
            color: #ececec;
        }
    }
}
`