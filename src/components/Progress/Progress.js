import React from 'react'
import "./Progress.css"

function Progress({percent = '0'}) {
  return (
    <div className='outer-container'>
     <div className='inner-container' style={{'--width': percent}}>
       {percent}
     </div>
    </div>
  )
}

export default Progress