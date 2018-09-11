


  <form className='add-collection-form' onSubmit={addCollection}>
    <input id='collection-form-name' placeholder='name your collection'/>
    <label htmlFor='collection-form-category'>Select a Category</label>
    <select id='collection-form-category' required={true}>
      <option value=''>choose a category</option>
      <option value='coins'>Coins</option>
      <option value='comics'>Comics</option>
      <option value='cards'>Cards</option>
      <option value='vinyl'>Vinyl</option>
      <option value='other'>Other</option>
    </select>
  </form>