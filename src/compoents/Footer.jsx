import React from 'react'

const Footer = () => {
    const d = new Date();
    let year = d.getFullYear();
  return (
    <div className='headerdiv'>
    <h1 className='fh1'>Copyright @{year}</h1>
    </div>
  )
}

export default Footer