import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Trigger from '../Trigger';
import Icon from '../Icon';
import { Menu as MenuIcon, Search as SearchIcon } from 'react-feather';
import { Meh  } from 'react-feather';


  const Bcat = () =>
  {
    
    const [random, setRandom] = useState(Math.random());
    const reRender = () => setRandom(Math.random());
    
    useEffect(() => {
      
      // Update the document title using the browser API
      
    });
  
  const antonio="antonio";
     return(
       <div>
         
         
         <Trigger action={reRender}>
     
     <Icon src={Meh} />
</Trigger>
     </div>
     );
       }
 
  
 export default Bcat;