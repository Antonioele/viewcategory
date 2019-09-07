import React, { useEffect, useState,fragment } from 'react';
import ReactDOM from 'react-dom';
import Trigger from '../Trigger';
import Icon from '../Icon';
import { Menu as MenuIcon, Search as SearchIcon } from 'react-feather';
import { Meh  } from 'react-feather';
import { AlignCenter } from 'react-feather';
import defaultClasses from './bcat.css';

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
    
    const [random, setRandom] = useState(0);
    const reRender = () => setRandom(1);
    const rootClassName = random ? defaultClasses.root_open : defaultClasses.root;
    useEffect(() => {
      
      // Update the document title using the browser API
      
    });
  
  
     return(
      <React.Fragment> 
       <div style={divStyle} >
         
         <h1>{random}</h1>
         <Trigger action={reRender}>
     
     <Icon style={{justiftyContent:"center", alignItems:"center"}} src={Meh} />
</Trigger>
     </div>
     <div>
     <aside className={rootClassName}>  plutoo</aside>

     </div>
     </React.Fragment>
     );
       }
 
  
 export default Bcat;