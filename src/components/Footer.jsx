import React from 'react'

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div>
      <div className='footer'>
      © Kompass {year} | MIT License | All Rights Reserved
      </div>
    </div>
  );
}

export default Footer
