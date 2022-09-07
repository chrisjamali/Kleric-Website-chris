import React from 'react'
import { SocialIcon } from 'react-social-icons';

const CreatorCard = (props) => {
  return (
    <div className='creator-cards'>
      <h3> {props.name}</h3>
   <div className="pictures" src={props.image} ></div>
      <img src={props.image} alt={props.name} />
      <p> {props.bio}</p>
      <p> Connect with {props.name.split(" ")[0]} ! </p>

      <div
        className='centered'
        style={{ justifyContent: 'space-between !important' }}
      >
        <SocialIcon url={props.linkedin} />
        <SocialIcon url={props.github} />
      </div>
    </div>
  );
}


export default CreatorCard