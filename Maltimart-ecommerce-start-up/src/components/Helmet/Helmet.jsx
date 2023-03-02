import React from 'react'

const Helmet = (props) => {
    document.title = 'Limupa Phụ kiện điện thoại' ;
    
    
  return (
    <div>
      {props.children}
    </div>
  )
}

export default Helmet
