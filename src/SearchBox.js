import React from 'react';
import './Searchbox.css'

const SearchBox = ({searchfield,searchchange}) => {
  return (
    <div className='pa2'>
    <input className ='Searchbox'
    type = "search" 
    placeholder ="Search Robots"
    
    onChange = {searchchange}
    />
 </div>
  );
}
export default SearchBox;