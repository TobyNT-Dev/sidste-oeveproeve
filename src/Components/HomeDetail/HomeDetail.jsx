import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import AppService from '../Appservices/Appservice'

export const HomeDetail = () => {
    const [data, setData] = useState()
  const { id } = useParams()
    useEffect(() => {
    AppService.GetDetail("homes", id).then((response) => {
        setData(response.data.item)
    })
  },[])
  return (
    <div>
        {/* <h2>{data.address}</h2> */}
        {/* <img src={data.images[0]?.filename.large} alt="image of the home" /> */}
    </div>
  )
}
