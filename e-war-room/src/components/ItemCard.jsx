import React from 'react'
import useMediaQuery from '../hooks/useMediaQuery';

function ItemCard() {
  let isSmallScreen = useMediaQuery ("(max-width: 1060px)");

  return (
    <div>
      <article className = {`${isSmallScreen&&"w-full"} m-5 p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700`}>
          <div className = "flex justify-between items-center mb-5 text-gray-500">
            <span className = "text-sm bg-dark-blue w-full rounded-sm text-white">14 days ago</span>
          </div>

          <h2 className = "mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">How to quickly deploy a static website</h2>
          <p className = "mb-5 font-light text-gray-500 dark:text-gray-400">Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools.</p>

        <div className = "flex justify-between items-center">
          <div className = "flex items-center space-x-4">
            <img className = "w-7 h-7 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="avatar" />
              <span className = "font-medium dark:text-white">
                Jese Leos
              </span>
          </div>
        </div>
      </article> 
    </div>
  )
}

export default ItemCard