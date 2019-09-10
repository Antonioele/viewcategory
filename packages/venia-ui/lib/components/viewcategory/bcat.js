import React, { useEffect, useState,fragment } from 'react';
import ReactDOM from 'react-dom';
import Trigger from '../Trigger';
import Icon from '../Icon';
import { Menu as MenuIcon, Search as SearchIcon, Grid } from 'react-feather';
import { Edit,ArrowLeft,Meh  } from 'react-feather';
import { AlignCenter } from 'react-feather';
import defaultClasses from './bcat.css';

import Productnew from './Productnew';
  const Bcat = () =>
  {
    const divStyle = {
      width: '50px',
      margin: '100px'
     
    };

    const pStyle = {
      
      
      
    };
    
    const [random, setRandom] = useState(0);
    const reRender = () => setRandom(1);
    const reRender1 =() => setRandom(0);
    const rootClassName = random ? defaultClasses.root_open : defaultClasses.root;
    
  
     return(
      <React.Fragment> 
       
                <div className= {defaultClasses.rootr} >
         <div className={defaultClasses.header}>
         
         <div className={defaultClasses.pddiv}>
         <Trigger action={reRender}>
     
     <Icon src={Edit} />
</Trigger>
</div>
<h1 className={defaultClasses.padh1}> Product New</h1>
<div className={defaultClasses.pddiv}>
<Trigger action={reRender1}>

<Icon  src={ArrowLeft} />
</Trigger>
</div>
   </div>  
     
     <div
      className={rootClassName}>  
<Productnew></Productnew>
     
     </div>
</div>
     </React.Fragment>
     );
       }
 
  
 export default Bcat;