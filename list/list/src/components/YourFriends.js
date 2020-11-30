import React from 'react';

function YourFriends(){
    const yourfriends=[{name: 'Deeksha'},{name:'Hitha'},{name:'Nishmitha'},{name:'Prajwal'}]
    const presentList=yourfriends.map(present=>
        <h2 className="c1">
        {present.name}
       
    </h2>)
    
    return(
        <div className="your-friend">
                {presentList}
        
          
           
        </div>
    )
}
export default YourFriends;