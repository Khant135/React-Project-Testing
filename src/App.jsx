import { useState } from 'react'
import Accordian from './components/accordian/Accordian'
import RandomColor from './components/randomcolorgenerator/RandomColor'
import StarRating from './components/starrating/StarRating'
import ImageSlider from './components/imageslider/ImageSlider'
import SubmitForm from './components/submit-form/SubmitForm'
import Joke from './components/joke-generator/Joke'
import PasswordValidator from './components/password-validator/PasswordValidator'

function App() {

  return (
    <>
      {/* <Accordian /> */}
      {/* <RandomColor /> */}
      {/* <StarRating noOfStars={10} /> */}
      {/* <ImageSlider /> */}
      {/* <SubmitForm /> */}
      {/* <Joke /> */}
      <PasswordValidator />
    </>
  )
}

export default App
