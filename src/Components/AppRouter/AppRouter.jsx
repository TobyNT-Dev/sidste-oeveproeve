import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ForSale } from '../ForSale/ForSale'
import { Home } from '../Home/Home'
import { HomeDetail } from '../HomeDetail/HomeDetail'

export const AppRouter = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/homes-for-sale" element={<ForSale />} />
        <Route path="/:id" element={<HomeDetail />} />
    </Routes>
  )
}
