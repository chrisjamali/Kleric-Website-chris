import React from 'react';
import k8s from '../assets/KUBER-PNG.png';
import grafana from '../assets/grafana-trans.png';
import prom from '../assets/Prometheus_software_logo.svg.png';
import kleric from '../assets/kleric+-logo.png';
const About = () => {
  return (
    <div id='about'>
      {/* About */}
      <div className='centered'>
        <h2>Why use Kleric?</h2>
      </div>
      <div className='page'>
        <div className='grid'>
          <div className='about-glance'>
            <h2>
              {' '}
              <em> Kleric+</em> performs a check-up on your K8s cluster in a
              moments notice{' '}
            </h2>
            <p className='description'>
              Kleric is an open-source monitoring tool for your Kubernetes
              cluster. A dashboard to monitor your cluster’s health while
              providing developers actionable alerts
            </p>
          </div>
          <div className='images'>
            {/* <div className='clm'> */}
            <img src={kleric} alt='' className='kleric' />
            <img className='k8s' src={k8s} alt='' />
            {/* </div> */}
            {/* <div className='clm'> */}
            <img src={prom} alt='prometheus' className='prom' />
            <img src={grafana} alt='' className='grafana' />
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
