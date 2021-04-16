import { useSelector, useDispatch } from 'react-redux';



function ShelfItem ( {item} ){
    
    let dispatch = useDispatch();

    const user = useSelector( ( store )=>{
        return store.user
    })
    
    //function to handle click
    //dispatch DELETE call to saga

    let deleteItem =()=>{
        console.log( 'in deleteItem' )
        dispatch( { type: 'DELETE_ITEM', payload: item } );
        dispatch( { type: 'FETCH_SHELF' } );
    }
    

    if( user.username === 'pat' || user.username === 'sarah' || user.username === 'kitty' ){ // checking if the user has an id
        return (
            <div>
                <p>{ item.description }</p>, 
                <img src={ item.image_url } /> 
                <button onClick={()=>deleteItem()}>Delete</button>
            </div>
        );
      } // logged in
    else{
        return (
            <div>
                <p>{ item.description }</p>, 
                <img src={ item.image_url } /> 
            </div>
    );
      } // not logged in

//     return (
//         <div>
//             {JSON.stringify( user )}
//             <p>{ item.description }</p>, 
//             <img src={ item.image_url } /> 
//         </div>
// );
}


export default ShelfItem;