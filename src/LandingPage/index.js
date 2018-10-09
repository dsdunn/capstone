import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import './styles.css';

const LandingPage = () => {
  return (
    <div className="wrapper">
      <section className="section parallax bg1">
        <Link style={{ color: 'white' }} to={'/home'}><h1 className='project-name'>Collecshare</h1></Link>
      </section>
      <section className="section static s1">
        <Link to={'/home'}><h1>Collect.</h1></Link>
      </section>
      <section className="section parallax bg2"></section>
      <section className="section static s2">
        <Link to={'/home'}><h1>Share.</h1></Link>
      </section>
      <section className="section parallax bg3"></section>
      <section className="section static s3">
        <Link to={'/home'}><h1>Connect.</h1></Link>
      </section>
      <section className="section parallax bg4"></section>
      <section className="section static s4">
        <Link to={'/home'}><h1>Explore.</h1></Link>
      </section>
    </div>
  )
}

export default withRouter(LandingPage);
