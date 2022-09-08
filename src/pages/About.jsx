import React from 'react';
import k8s from '../assets/KUBER-PNG.png';
import grafana from '../assets/grafana-trans.png';
import prom from '../assets/Prometheus_software_logo.svg.png';
import kleric from '../assets/kleric+-logo.png';
const About = () => {
  return (
    <div id='about'>
      <div className='page'>
      <h1>Why use Kleric?</h1><br/>
        <div className='grid'>
          <div className='about-glance'>
            <h2>Kleric performs a check-up on your k8s cluster in a moment's notice.</h2><br/>
            <p className='description'>
              Kleric is an open-source monitoring tool for your Kubernetes
              cluster. A dashboard to monitor your cluster's health while
              providing your team with customized, actionable alerts.
            </p>
            <div className='images'>
            <img className='k8s' src={k8s} alt='' />
            <img src={prom} alt='prometheus' className='prom' />
            <img src={grafana} alt='' className='grafana' />
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
