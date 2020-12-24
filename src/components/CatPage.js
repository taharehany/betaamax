import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class CatPage extends Component {
    state = {
        title: "categories",
        subtitle: "betamax",
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
            if(`${category.id=='cat1'}`) {
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
            }else {
                return false
            }
        })

        return(
            <div>
                <div className="toppart">
                    <div className="container">
                        <h2 className="title">{this.state.title}</h2>
                        <h3 className="sub-title">{this.state.subtitle}</h3>
                    </div>
                </div>
                <section className="category-section">
                    <div className="container">
                        <div className="row">
                            {categoryList}
                        </div>
                        <div className=""></div>
                        <div className=""></div>
                    </div>
                </section>
            </div>
        )
    } 
}

export default CatPage;