import React from 'react'
import Banner from '@/components/Banner'
import ProductList from '@/components/ProductList'
const Home = () => {
  return (
    <div className='bg-white h-screen w-full'>
      <Banner />
      <ProductList />
    </div>
  )
}

export default Home