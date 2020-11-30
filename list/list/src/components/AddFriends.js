import React from 'react';

function AddFriends(){
    const friends=[{name: 'Aswathi'},{name:'Ramya'},{name:'Nethravathi'},{name:'Stafny'}]
    //const names=['a','b','c']
    const ADD=(friends)=>{

     console.log(friends.name)
    }
  
  
   const friendlList=friends.map(friend=>
    

    <h2 className="add">
        {friend.name}
        <button onClick={ADD}>Add</button>
        
        
    </h2>)
    
    
    
    return(
        <div className="add-friend">
        
           {friendlList}
        </div>
    )
    }
export default AddFriends;





  