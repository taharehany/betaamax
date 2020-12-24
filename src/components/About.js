import React, {Component} from 'react';
import aboutimage from '../assets/images/about.jpg';

class About extends Component {
    state = {
        title: "about",
        subtitle: "betamax"
    }
    render() {
        return(
            <div>
                <div className="toppart">
                    <div className="container">
                        <h2 className="title">{this.state.title}</h2>
                        <h3 className="sub-title">{this.state.subtitle}</h3>
                    </div>
                </div>
                <section className="about">
                    <div className="container">
                        <div className="content-about">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="image-about img-fluid">
                                        <img src={aboutimage} />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="text-about">
                                        <h2 className="about-title">about us</h2>
                                        <h3 className="beta">betamax</h3>
                                        <p>BeTaAmax® tools focus on making professional quality hand tools ,Power tools and related hardware products.</p>
                                        <p>BeTaAmax®, we don’t seek out innovation; we let it drive us. Let’s see .
                                        where it takes BeTaAmax® products are all strictly controlled at every step during designing, producing, packing and quality controlling process. </p>
                                        <p>BeTaAmax® tools believe that the quality tools refer to the usability, efficiency and performance.</p>
                                        <p>Affordable prices, Reliable quality, Stock available, Rapid delivery, without restrictive MOQ.</p>
                                        <p>Now we are searching for the partners in other provinces to build up long term cooperation and create common benefits. If you are interested in being our distributors for the whole line hand tools and the relative hardware products, we are sure that you will be very successful when you enter into your market to fight against your competitors.</p>
                                        <p>Contact us today! We are ready for the market service now</p>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    } 
}

export default About;