import Image from 'next/image'
import React from 'react'
import MenuItem from '../MenuItem/index'
const index = () => {
  return (
    <nav>
      <ul>
        <MenuItem name='Home' />
        <MenuItem name='Search' />
        <MenuItem name='Your library' />
      </ul>
    </nav>
  )
}

export default index
