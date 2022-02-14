import React from 'react';

const Header = ({title}) => {
  return (<div>
   <h1 className='header' style={{textAlign:'center'}}>{title}</h1>
  </div>);
};

export default Header;
