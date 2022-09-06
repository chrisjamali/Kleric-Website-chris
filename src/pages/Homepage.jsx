import React from 'react';
// import NavBar from "../components/
// NavBar"

// import Homepage from './Homepage.jsx';
import About from './About';
import Creators from './Creators';
import Install from './Install';
import Footer from '../components/Footer';
import DownloadButton from '../components/DownloadButton';
import wave from '../assets/red-wave.jpg';
const Homepage = () => {
  return (
    <div>
      <div
        className='homepage'
        style={{
           position: "relative",
          '&:before': {
            content: "",
            backgroundImage: ` url(${wave})`,
            backgroundSize: '100% 90vh',
            backdropFilter: 'opacity(.50%)  ',
              position: 'absolute',
      opacity:' 0.25'
          },
        }}
      >
        {/* <div className=' centered cross-place'>
          <div id='cross'></div>
          <div id='cross'></div>
        </div> */}
        <div className='tag-line'>
          <h1>
            Give your K8 cluster a <em className='title'>Kleric</em>
          </h1>
          <h5>an open-source Kubernetes monitoring tool</h5>
          <DownloadButton />
        </div>
      </div>
      <About id='about' />
      <Install id='install' />
      <Creators id='creators' />
      <Footer />
    </div>
  );
};

export default Homepage;


// style={{
//           backgroundImage: ` url(${wave})`,
//           backgroundSize: '100% 90vh',
//           backdropFilter:'opacity(.50%)  ',
//         }}