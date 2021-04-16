import React, { useEffect } from 'react';
import ShelfItem from '../ShelfItem/ShelfItem';
import { useDispatch, useSelector } from 'react-redux';


function ShelfPage() {
  
  let dispatch = useDispatch();
  
  const shelf = useSelector( ( store )=>{
    return store.shelfReducer //need to write reducer
  })

  useEffect(()=>{
    dispatch({ type: 'FETCH_SHELF' }) // need to add to rootsaga & write saga
  }, [] );


  


  return (
    <div className="container">
      <h2>Shelf</h2>
      {shelf.map( (item, index )=><ShelfItem item={item} key={index}/>)}

      <p>All of the available items can be seen here.</p>
    </div>
  );
}

export default ShelfPage;
