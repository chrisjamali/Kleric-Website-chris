import React from 'react'
import CreatorCard from '../components/CreatorCard'
import crystalpic from "../assets/crystal-linked-in.jpeg"
import blankpic from "../assets/blankPIC.jpeg"
const names = ["An Le", "Chris Jamali", "Crystal Agoncillo", "Rosendo De Luna"]
const images = [blankpic, blankpic, crystalpic, blankpic];
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
  const cards = names.map((nam, i) => <CreatorCard name ={nam} image ={images[i]} bio = {bio[i]} github ={github[i]} linkedin ={linkedin[i]}/>)

  return (
    <div id='creators'>
      <div class="centered">
        <h1>Meet our Team!</h1>
      </div >
      <div className = "cards-outline" >{cards}</div>
    </div>
  );
}

export default Creators