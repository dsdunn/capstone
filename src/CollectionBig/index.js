import React from 'react';

export const CollectionBig = (props) => {
  return (
    <div className='collection-big'>
      <header className='collection-header-big'>
        <img className='collection-img-big'/>
        <h4 className='collection-title-big'>this.props.displayedUser.username</h4>
        <p className='collection-location-big'>this.props.displayedUser.location</p>
      </header>
      <main className='collection-body-big'>
        <section className='collection-description-big>'>
          <ul>
            <li>item 1</li>
            <li>item 2</li>
            <li>item 3</li>
            <li>item 4</li>
            <li>item 5</li>
          </ul>
        </section>
      </main>
    </div>
  )
}