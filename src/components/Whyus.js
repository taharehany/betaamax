import React, {Component} from 'react';
import ico1 from '../assets/images/icons/ico1.png'
import ico2 from '../assets/images/icons/ico2.png'
import ico3 from '../assets/images/icons/ico3.png'

class Whyus extends Component {
    render() {
        return(
            <div>
                <section className="why">
                    <div className="container">
                        <div className="title">
                            <h2>why choose betaamax?</h2>
                            <p>betaamax tools focus on professional quality tools and hardware products.</p>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="box">
                                    <img src={ico1} />
                                    <h2>support</h2>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="box">
                                    <img src={ico2} />
                                    <h2>quality</h2>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="box">
                                    <img src={ico3} />
                                    <h2>speed</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    } 
}

export default Whyus;