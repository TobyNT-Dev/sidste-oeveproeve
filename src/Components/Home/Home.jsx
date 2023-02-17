import React from 'react'
import { Employees } from '../Employees/Employees'
import { ImageSlider } from '../ImageSlider/ImageSlider'
import { Reviews } from '../Reviews/Reviews'
import { ThreeOffers } from '../ThreeOffers/ThreeOffers'

export const Home = () => {
  return (
    <div>
      <ImageSlider />
      <ThreeOffers />
      <Reviews />
      <Employees />
    </div>
  )
}
