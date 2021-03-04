import React from 'react'
import './index.css'
 function Card(props)
 {
     return(
         <div className="card">
           <div className="card-img">
          <img src={props.image} height="100px" width="120px"   alt="/"/>
          </div>
          <div className="discrip">
          <div className="title">
          <p>{props.title}</p>
          </div>
          <div className="prise" style={{display:"flex"}}>
          <p><strong>prise: </strong></p><p style={{color:"blue"}}>{props.prise}</p>
          </div>
          </div>
         </div>
     )
 }
 export default Card