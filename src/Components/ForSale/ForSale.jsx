import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Card } from '../Card/Card'
import AppService from '../Appservices/Appservice'
import Box from '@mui/material/Box'
import Slider from '@mui/material/Slider'
function valuetext(value) {
  return `${value} DKK`
}

export const ForSale = () => {
  const [value, setValue] = useState([0, 0])
  const [data, setData] = useState([])
  const [type, setType] = useState([])
  const [selected, setSelected] = useState("")
    useEffect(() => {
        AppService.GetList("homes").then((response) => {
            const sortedItems = response.data.items.sort((a, b) => {
              return a.price - b.price
            })
            setData(sortedItems)
            const types = Array.from(new Set(response.data.items.map((item) => item.type)))
            setType(types)
          })
        },[])
        useEffect(() => {
          if (!isNaN(data[data?.length - 1]?.price)) {
            const float = parseFloat(data[data?.length - 1]?.price)
            setValue([0, float])
          }
        },[data])
        const handleChange = (event, newValue) => {
          setValue(newValue)
        }
      return (
    <StyledSale>
      <div className="filtering">
      {data[data?.length - 1]?.price && <Box sx={{ width: 300 }}>
      <Slider
        getAriaLabel={() => 'Price range'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        max={parseFloat(data[data?.length - 1]?.price)}
      />
    </Box>}
      <select value={selected} onChange={(e) => setSelected(e.target.value)} name="options">
        <option defaultValue value="">Sorter efter type</option>
        {type?.map((item, idx) => {
          return (
            <option key={idx} value={item}>{item}</option>
          )
        })}
      </select>
      </div>
      <div className="home-cards">
      {data && data.map((item, idx) => {
        if (item.type == selected) {
          if (item.price <= value[1] && item.price >= value[0]) {
            return (
              <Card key={idx} item={item} />
            )
          } else if (value[0] <= 0 && value[1] == data[data.length - 1]?.price) {
            return (
              <Card key={idx} item={item} />
            )
          }
        } else if (selected == "") {
          if (item.price <= value[1] && item.price >= value[0]) {
            return (
              <Card key={idx} item={item} />
            )
          } else if (value[0] <= 0 && value[1] == data[data.length - 1]?.price) {
            return (
              <Card key={idx} item={item} />
            )
          }
        }
        })}
        </div>
    </StyledSale>
  )
}
const StyledSale = styled.div`
min-height: 60vh;
.filtering {
  width: 40vw;
  margin: 0 auto 1vw;
  display: flex;
  justify-content: space-around;
  gap: 4rem;
}
.home-cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  width: 80vw;
  margin: 0 10vw;
}
`