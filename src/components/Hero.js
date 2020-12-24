import React, {Component} from 'react';
import video from '../assets/hero.m4v'

class Hero extends Component {
    render() {
        return(
            <section className="hero-section">
                <div className="banner-area">
                    <div className="overlay"></div>
                    <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
                        <source src={video} type="video/mp4" />
                    </video>
                </div>
            </section>
        )
    } 
}

export default Hero;