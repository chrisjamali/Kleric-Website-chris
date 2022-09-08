import React from 'react'
import k8s from "../assets/Kubernetes-Logo.wine.png"
import grafana from "../assets/Grafana_logo.svg.png"
import prom from "../assets/Prometheus_software_logo.svg.png"

const About = () => {
  return (
    <div id='about'>
      {/* About */}
      <div className='grid'>
        <div className='about-glance'>
          <h2>
            {' '}
            Kleric+ performs a check-up on your K8s cluster in a moments notice{' '}
          </h2>
          <p className='description'>
            Kleric is an open-source monitoring tool for your Kubernetes
            cluster. A dashboard to monitor your cluster’s health while
            providing developers actionable alerts
          </p>
        </div>
        <div className='images'>
          <img className='k8s' src={k8s} alt='' />
          <img src={prom} alt='' className='prom' />
          <img src={grafana} alt='' className='grafana' />
        </div>
      </div>
    </div>
  );
}

export default About