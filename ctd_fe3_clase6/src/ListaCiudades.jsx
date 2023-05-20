import React from 'react';
import cities from './assets/db';
/*
return <li key={cities.id}>
        {cities.city}
    </li>
*/
    
function ListaCiudades() {
  
  return (
    <div>
       { cities.map( 
        (city) => 
        
        
        {
          return(
            <li key={city.id}>
            {city.city}
        </li>

          ) 
          
      
      }

  )
}
      </div>
     
  )
}



export default ListaCiudades;