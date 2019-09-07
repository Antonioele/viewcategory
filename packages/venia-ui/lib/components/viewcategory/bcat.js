import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Trigger from '../Trigger';
import Icon from '../Icon';
import { Menu as MenuIcon, Search as SearchIcon } from 'react-feather';
import { Meh  } from 'react-feather';
import { AlignCenter } from 'react-feather';


  const Bcat = () =>
  {
    const divStyle = {
      width: '50px',
      margin: '100px'
     
    };

    const pStyle = {
      
      
      
      position: 'absolute',
      left: '50%',
      top: '50%',
        AlignCenter: 'center',
      margin : 'auto'
    };
    
    const [random, setRandom] = useState(Math.random());
    const reRender = () => setRandom(Math.random());
    
    useEffect(() => {
      
      // Update the document title using the browser API
      
    });
  
  const antonio="antonio";
     return(
       <div style={divStyle} >
         
         
         <Trigger action={reRender}>
     
     <Icon style={{justiftyContent:"center", alignItems:"center"}} src={Meh} />
</Trigger>
     </div>
     );
       }
 
  
 export default Bcat;