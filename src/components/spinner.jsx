import React from 'react'
// import loading from './infinite.gif';
// import loading from './Infinity-1.gif';
import loading from './Infinity-2.gif';


export default function Spinner() {
  return (<>
    <div className="text-center" >
      <img src={loading} style={{ width: "20rem" }} alt="..." />
    </div>
  </>
  )
}
