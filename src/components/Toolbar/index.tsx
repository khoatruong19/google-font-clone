import React from 'react'
import SearchFont from './components/SearchFont'
import PreviewText from './components/PreviewText'
import FontSize from './components/FontSize'

const Toolbar = () => {
  return (
    <div className='w-[100%] my-4 flex'>
        <SearchFont/>
        <div className='flex flex-1'>
            <PreviewText/>
            <FontSize/>
        </div>
    </div>
  )
}

export default Toolbar