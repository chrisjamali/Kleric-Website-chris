import React from 'react'

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div>
      <div className='footer'>
      © Kleric {year} | MIT License | All Rights Reserved
      </div>
    </div>
  );
}

export default Footer
