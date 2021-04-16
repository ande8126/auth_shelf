import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';


function addItem(){


    
    //make a local state object to send to our saga/server/db
    const [ item, setItem ] = useState({});
    const dispatch = useDispatch();

    //bring down user.id from store
    const user = useSelector( ( store )=>{
        return store.user
    })

    useEffect(()=>{
        setItem({...item, user_id: user.id} );
    }, [] );

    //handle inputs with different functions
    let handleDescription = ( event )=>{
        console.log( 'in handleDescription', event.target.value );
        setItem( {...item, description: event.target.value})
        
    }

    let handleImageUrl = ( event )=>{
        console.log( 'in handleImageUrl', event.target.value );
        setItem({...item, image_url: event.target.value })
    }

    //click handler to send
    const addItem = ( item ) =>{
        console.log( 'in addItem ', user.id );
        //send as part of the payload
        dispatch({ type: 'SEND_ITEM', payload: item })
    //     const newItem = {
    //         description: description,
    //         image_url: image_url
    //     }//end newItem
    //     console.log( 'adding an item', newItem );
    //     setItem([...item, newItem ])

    }

    return(
        <div>
            <input type="text" onChange={handleDescription} placeholder=
            "description here..." />
            <input type="text" onChange={handleImageUrl} placeholder=
            "image url here..." />
            <button onClick={()=>addItem( item )}>Add</button> 
        </div>
    )
}

export default addItem 