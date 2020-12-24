import React, {Component} from 'react';
import Hero from './Hero';
import Categories from './Categories';
import Calltoaction from './Calltoaction';
import Whyus from './Whyus';

class Home extends Component {
    render() {
        return(
            <div className="home-page">
                <Hero />
                <Categories />
                <Calltoaction />
                <Whyus />
            </div>
        )
    } 
}

export default Home;