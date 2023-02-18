import Image from 'next/image'
import React from 'react'

const index = (props) => {
  return (
    <>
    <Image />
    <li>{props.name}</li>
    </>
  )
}

export default index
