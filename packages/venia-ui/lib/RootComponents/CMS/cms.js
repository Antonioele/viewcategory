import React, { Component } from 'react';
import CategoryList from '../../components/CategoryList';
import Bcat from '../../components/viewcategory';

export default class CMS extends Component {
    render() {
        return(<div> <CategoryList title="Shop by category" id={2} />
        <Bcat />
        </div>
        );

    }
}
