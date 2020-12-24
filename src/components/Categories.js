import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Categories extends Component {
    state = {
        categories: []
    }
    getProductsOfCategory = () => {
        const productsOfCat = this.state.categories[0].products
        console.log(productsOfCat)
    }
    componentDidMount() {
        axios.get('https://advertizeragency.com/betamaxfiles/betadata.json').then(res => {
            this.setState({
                categories: res.data.categories
            })
        })
    }
    
    render() {
        const {categories} = this.state;
        const categoryList = categories.map((category) => {
            return(
                <div className="col-md-4" key={category.id}>
                    <div className="category">
                        <div className="image">
                            <img className="img-fluid" src={category.image} />
                        </div>
                        <h2 className="cat-title">
                            <Link to={`/products/${category.id}`}>{category.title}</Link>
                        </h2>
                    </div>
                </div>
            )
        })

        return(
            <section className="category-section">
                <div className="container">
                    <div className="row">
                        {categoryList}
                    </div>
                    <div className=""></div>
                    <div className=""></div>
                </div>
            </section>
        )
    } 
}

export default Categories;