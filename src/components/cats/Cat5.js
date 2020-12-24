import React, {Component} from 'react';
import axios from 'axios';

class Cat5 extends Component {
    state = {
        categories: []
    }
    getProductsOfCategory = () => {
        const productsOfCat = this.state.categories[0].products
        console.log(productsOfCat)
    }
    componentDidMount() {
        axios.get('http://advertizeragency.com/betamaxfiles/betadata.json').then(res => {
            this.setState({
                categories: res.data.categories[4].products
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
                        <h2 className="cat-title">{category.titleArabic} | {category.titleEnglish}</h2>
                        <p className="description">{category.descriptionProduct}</p>
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

export default Cat5;