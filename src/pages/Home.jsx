import React from 'react'
import { useNavigate, useLocation, Link, useParams } from 'react-router-dom'

function Home() {

  const { userId } = useParams();

  return (
    <div>Home<br />
    <Link to='/contact'>contact 페이지로 이동</Link>
    </div>
  )
}

export default Home