import React from 'react';
import { CiCirclePlus } from "react-icons/ci";

//this component need the size prope as tailswind format

function Addbutton({size}) {
  return (
    <div>
        <CiCirclePlus className={`${size} text-red cursor-pointer`}/>
    </div>
  )
}

export default Addbutton