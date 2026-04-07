import React, { useEffect, useState } from 'react'

const DateTime = () => {

    const [dateTime, setdateTime] = useState("")
    //date and time

  // setInterval(() => {
  //   const time = new Date();
  // const loccaltime = time.toLocaleTimeString();
  // const nowDate = time.toLocaleDateString();
  //    setdateTime(`${loccaltime} - ${nowDate}`)
  // }, 1000);
  
  // or
  useEffect(() => {
    const interval = setInterval(() => {
    const time = new Date();
  const loccaltime = time.toLocaleTimeString();
  const nowDate = time.toLocaleDateString();
     setdateTime(`${loccaltime} - ${nowDate}`)
  }, 1000);

  return ()=> clearInterval(interval)
  }, [])
  return (
    <div className="title">
        {dateTime}
      </div>
  )
}

export default DateTime
