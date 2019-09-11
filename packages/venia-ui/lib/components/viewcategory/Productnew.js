import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { number, shape, string } from 'prop-types';
import {  useQuery } from '@magento/peregrine';
import Product from '../../queries/getprodotto.graphql';
import Content from './Content';
 

const Productnew = props => {
   
    const [queryResult, queryApi] = useQuery(Product);
    const { data, error, loading } = queryResult;
    const { runQuery, setLoading } = queryApi;
    const dt = '2017';

console.log(data);
const items = data ? data.products.items : null;
    useEffect(() => {
        setLoading(true);
        runQuery({
            variables: {
                data: String(dt)
                
            }
        });
        window.scrollTo({
            left: 0,
            top: 0,
            behavior: 'smooth'
        });
    }, [dt, runQuery]);



    
   
    
return(
    <React.Fragment>
<Content data ={items}> </Content>

   

</React.Fragment>
);
}
export default Productnew;