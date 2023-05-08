import React from 'react';
import useMediaQuery from '../hooks/useMediaQuery';

function Layout({ children }) {
  let isSmallScreen = useMediaQuery ("(max-width: 1060px)");

  return (
    <div className={`${isSmallScreen && "w-full"} w-4/5 m-auto overflow-hidden relative`}> {children} </div>
  )
}

export default Layout