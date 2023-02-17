import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import AppService from '../Appservices/Appservice'
import { Card } from '../Card/Card'

export const ThreeOffers = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        AppService.GetList("homes").then((response) => {
            setData(response.data.items)
        })
    },[])
    return (
    <StyledOffers>
        {data && data.map((item, idx) => {
            if (idx < 9 && idx > 5) {
                return (
                    <Card key={idx} item={item} />
                )
            }
        })}
    </StyledOffers>
  )
}
const StyledOffers = styled.div`
margin-top: -4vw;
display: flex;
flex-wrap: wrap;
justify-content: space-around;
margin-bottom: 4vw;
`