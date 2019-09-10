import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { number, shape, string } from 'prop-types';
import {  useQuery } from '@magento/peregrine';
import {Newqquery} from '../../queries/Nuovo.graphql';
import Content from './Content';
 

const Productnew = props => {
    const [queryResult, queryApi] = useQuery(Newqquery);
    const { data, error, loading } = queryResult;
    const { runQuery, setLoading } = queryApi;
    const items = data ? data.products.items : null;
return(
    <React.Fragment>
<Content>{data.products.total_count} </Content>
<div>
   <h1></h1> 
</div>
</React.Fragment>
);
}
export default Productnew;