import React, {Component} from 'react';
import axios from 'axios';

class Products extends Component {
    state = {
        categories: []
    }
    /* getProductsOfCategory = () => {
        const productsOfCat = this.state.categories[0].products
        console.log(productsOfCat)
    } */
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
                        <img className="img-fluid" src={category.image} />
                            <h2 className="cat-title">{category.title}</h2>
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

export default Products;