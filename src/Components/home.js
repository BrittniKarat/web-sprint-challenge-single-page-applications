import React from 'react'
import { useHistory } from 'react-router-dom'

export default function Home() {
  
  const history = useHistory();

  const routeToPizza = () => {
    history.push('/pizza')
  }

  return (
    <div className='home'>
      <img
        className='home-image'
        src='https://source.unsplash.com/exSEmuA7R7k'
        alt=''
      />
      <button
        onClick={routeToPizza}
      >
        Pizza Plant
      </button>
    </div>
  )
}
