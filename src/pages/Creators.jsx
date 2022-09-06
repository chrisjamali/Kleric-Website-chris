import React from 'react'
import CreatorCard from '../components/CreatorCard'
import crystalpic from "../assets/crystal-linked-in.jpeg"
import blankpic from "../assets/blankPIC.jpeg"
const names = ["An Le", "Chris Jamali", "Crystal Agoncillo", "Rosendo De Luna"]
const images = [blankpic, blankpic, crystalpic, blankpic];
const bio = ["Software Engineer","Software Engineer","Software Engineer","Software Engineer"]
const linkedin = []
const github = [];
const Creators = () => {
  const cards = names.map((nam, i) => <CreatorCard name ={nam} image ={images[i]} bio = {bio[i]} />)

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