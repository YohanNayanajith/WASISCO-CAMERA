import React from 'react'
import './RecentWorksService.css'
import ServiceHeaderRight from '../serviceHeaderRight/ServiceHeaderRight'
import RecentWorks from '../recentWorks/RecentWorks'
import ServiceHeaderLeft from '../serviceHeaderLeft/ServiceHeaderLeft'

const RecentWorksService = () => {
  return (
    <div className='background-main-color' style={{ paddingBottom:"50px"}}>
      <div
        style={{
          position: "relative",
          height: "30vh",
          width: "100vw",
          // backgroundColor: "red",
        }}
        touch-action="none"
        // className="background-main-color-with-height"
      >
        <ServiceHeaderRight header={"RECENT WORKS"} headerNumber={"02"} />
        {/* <ServiceHeaderLeft header={"SERVICES"} headerNumber={"01"} /> */}
      </div>
      <RecentWorks />
    </div>
  )
}

export default RecentWorksService