import React, { useEffect, useState } from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import styled from 'styled-components'
import AppService from '../Appservices/Appservice'

export const FavButton = (props) => {
  const [liked, setLiked] = useState()
  const [runEffect, setRunEffect] = useState(false)
  useEffect(() => {
    AppService.GetList("favorites").then((response) => {
      const favorite = response.data.items?.find((item) => item.home_id == props.data.item.id)
      setLiked(favorite)
    })
  },[runEffect])
  const handleAddFav = (home_id) => {
    const payload = { home_id: home_id }
    AppService.Create("favorites", payload).then((response) => {
      // console.log(home_id + " Added to favs!")
      setRunEffect(state => !state)
    })
  }
  const handleDelFav = (home_id) => {
    AppService.Delete("favorites", home_id).then((response) => {
      // console.log(home_id + " Removed!")
      setRunEffect(state => !state)
    })
  }
  return (
    <StyledFav>
      {liked ? <FaHeart className="off" onClick={() => handleDelFav(props.data.item.id)}/> : <FaRegHeart className="on" onClick={() => handleAddFav(props.data.item.id)}/>}
    </StyledFav>
  )
}
const StyledFav = styled.div`
margin-left: 1.5vw;
.on {
  cursor: pointer;
  height: 2vw;
  width: 2vw;
  &:hover {
    fill: red;
  }
}
.off {
  cursor: pointer;
  height: 2vw;
  width: 2vw;
  fill: red;
  &:hover {
    fill: #ff6464;
  }
}
`