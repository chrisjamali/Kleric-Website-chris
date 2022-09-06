import React from 'react'
import { SocialIcon } from 'react-social-icons';

const CreatorCard = (props) => {
  return (
    <div className='creator-cards'>
      <h3> {props.name}</h3>
      <img src={props.image} alt={props.name} />
      <p> {props.bio}</p>
      <SocialIcon url={props.linkedin} />
      <SocialIcon url={props.github} />
    </div>
  );
}


export default CreatorCard