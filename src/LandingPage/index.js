import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css'

const LandingPage = () => {
  return (
    <div class="wrapper">
      <section className="section parallax bg1">
        <h1 className='project-name'>Collecshare</h1>
      </section>
      <section className="section static s1">
        <h1>Collect.</h1>
      </section>
      <section className="section parallax bg2"></section>
      <section className="section static s2">
        <h1>Share.</h1>
      </section>
      <section className="section parallax bg3"></section>
      <section className="section static s3">
        <h1>Connect.</h1>
      </section>
      <section className="section parallax bg4"></section>
      <section className="section static s4">
        <h1>Explore.</h1>
      </section>
      <section className="section parallax bg5"></section>
    </div>
  )
}

export default LandingPage;