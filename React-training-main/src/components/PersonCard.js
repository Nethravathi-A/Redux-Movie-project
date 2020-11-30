import React from 'react';
import './PersonCard.css';

const PersonCard = ({personName,description}) => {

    return(
        <div className="card-container">
            <h1>
                name : {personName}
             </h1>
            <p>
              {
                description
              }
            </p>
            <div>
             D.o.b : 1-2-2000
            </div>
        </div>
    )
}
export default PersonCard