import React from 'react'
import cloudTech from "../assets/30495.jpg"
const Install = () => {
  return (
    <div id="install" >
      <div className="features">
        <h1>Features</h1>
        <div className="gifs">
          <div className="row">
            <div className="box">
              Interactive dashboard to visualize k8s cluster composition and health metrics.
            </div>
            <img src="https://i.gyazo.com/7519f916762e2985e761029c4e5eb1dd.gif"/>
          </div>
          <div className="row">
            <div className="box">
              Modular graphs and charts to monitor for network latency, request rates, etc.
            </div>
            <img src="https://i.gyazo.com/d98e8712394ed6652812c152e89fe352.gif"/>
          </div>
          <div className="row">
            <div className="box">
             A highly customizable alerting system for receiving hassle-free notifications.
            </div>
            <img src="https://i.gyazo.com/6b90b9ab298ba1670bd980a30b807a36.gif"/>
          </div>
        </div>
      </div >
    
    </div>
  )
}

export default Install