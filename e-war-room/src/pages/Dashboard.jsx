import React from 'react';
import Cards from '../components/cards/Cards';

function Dashboard() {
  return (
    <div className='-z-10 flex gap-5 md:mt-24 mt-5 flex-wrap justify-center'>
      <Cards targetDate = {"04/10/2023"} activityName = {"63 BackFeed"} theme = {"green"}/>
      <Cards targetDate = {"04/10/2023"} activityName = {"63GasCharge"} theme = {"blue"}/>
      <Cards targetDate = {"04/10/2023"} activityName = {"I Kill List"} theme = {"yellow"}/>
      <Cards targetDate = {"04/10/2023"} activityName = {"Total LOPs"} theme = {"#ff7e82"}/>
    </div>
  )
}

export default Dashboard