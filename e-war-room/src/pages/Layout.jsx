import React from 'react';

function Layout({ children }) {
  return (
    <div
      className='w-4/5 m-auto overflow-hidden relative'
    > {children} </div>
  )
}

export default Layout