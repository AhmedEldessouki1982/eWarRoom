import React from 'react';
import { BsCalendarPlus } from "react-icons/bs";

//this component need the size prope as tailswind format

function Calenderbutton({size}) {
  return (
    <div>
        <BsCalendarPlus className={`${size} text-red cursor-pointer`}/>
    </div>
  )
}

export default Calenderbutton