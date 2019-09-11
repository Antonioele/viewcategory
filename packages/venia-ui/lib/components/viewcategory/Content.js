import React, { Fragment ,useEffect,useState } from 'react';
import ReactDOM from 'react-dom';
import { shape, string } from 'prop-types';
import Gallery from '../Gallery';



const Content = props =>
{
    const {data}=props;
    const pageSize=1;
    const [items, setRandom] = useState(data)
    console.log(data);
    const  mapGalleryItem=(item)=> {
        const { small_image } = item;
        return {
            ...item,
            small_image:
                typeof small_image === 'object' ? small_image.url : small_image
        };
    }
    const imageWidth = '200';
const imageHeight = '275';

    const divStyle = {
        width: '300px',
        margin: '10px',
        float: 'left'
       
      };
    const titleContent = "New Products";
    const item23=[{"name": "Lando Gym Jacket",
    "sku": "MJ08",
    "small_image": {
      "url": "http://magento.local/media/catalog/product/cache/ef8a812956da7706579c87a235d3d6f3/m/j/mj08-gray_main_1.jpg",
      "__typename": "ProductImage"
    },
    "price": {
      "regularPrice": {
        "amount": {
          "value": 99,
          "currency": "USD"
        }
      }
    }}];
const items1=items ? items :item23;
useEffect(() => {
    // Update the document title using the browser API
    setRandom(data);
  });
    
    const listitem = items1.map((item)=>
    
    <div style={divStyle}>
        <h1>Name</h1>
    {item.name}
    <h1>Sku</h1>
    {item.sku}
    <h1></h1>
    <div >
    <a href={item.small_image.url} >     <img src={item.small_image.url} width={imageWidth}
                height={imageHeight}/>
    </a>
    </div>
    <h1>Prezzo</h1>
    <h1>{item.price.regularPrice.amount.value}--{item.price.regularPrice.amount.currency}</h1>
    </div>
    

    );
return(
  <div>  {listitem} </div>
);
}
export default Content;