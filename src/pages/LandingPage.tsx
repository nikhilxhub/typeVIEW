import React from 'react'
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {

    const navigate = useNavigate();
  return (
    <div className='bg-teal-100'>LandingPage
    <button onClick={() => navigate("/typing")}> go to main</button>
    </div>
  )
}

export default LandingPage