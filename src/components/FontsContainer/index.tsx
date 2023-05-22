import React from 'react'
import FontsContainerHeader from './components/FontsContainerHeader'
import FontCard from './components/FontCard'

const FontsContainer = () => {
  return (
    <div className='max-w-screen-2xl mx-auto px-2 md:px-4 lg:px-10'>
        <FontsContainerHeader/>
        <div className='mt-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            <FontCard/>
            <FontCard/>
            <FontCard/>
            <FontCard/>
            <FontCard/>
        </div>
    </div>
  )
}

export default FontsContainer