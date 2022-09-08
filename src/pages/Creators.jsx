import React from 'react'
import CreatorCard from '../components/CreatorCard'
import crystalpic from "../assets/crystal-linked-in.jpeg"
// import blankpic from "../assets/blankPIC.jpeg"
import an from "../assets/an-le.png"
import rosendo from '../assets/rosendo.png';
import chris from "../assets/chris.png"
const names = ["An Le", "Chris Jamali", "Crystal Agoncillo", "Rosendo De Luna"]
const images = [an, chris, crystalpic, rosendo];
const bio = ["Software Engineer","Software Engineer","Software Engineer","Software Engineer"]
const linkedin = [
  'https://www.linkedin.com/in/an-le-aa4b00244/',
  'https://www.linkedin.com/in/chris-jamali-b740521b7/',
  'https://www.linkedin.com/in/agoncillo/',
  'https://www.linkedin.com/in/rosendo-isra-deluna/'
];
const github = [
  'https://github.com/AnLelol',
  'https://github.com/chrisjamali',
  'https://github.com/cagoncil',
  'https://github.com/Rosend0',
];

const Creators = () => {
  const cards = names.map((name, i) => <CreatorCard name ={name} image ={images[i]} bio = {bio[i]} github ={github[i]} linkedin ={linkedin[i]} key={name}/>)

  return (
    <div>
      <div className="team" id='creators'>
        <h1>Meet Our Team</h1>
        <div className="cards-outline" >{cards}</div>
      </div >
    </div>
  );
}

export default Creators