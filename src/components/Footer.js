import React, {Component} from 'react';
import theLogo from '../assets/images/mainlogo.png'

class Footer extends Component {
    render() {
        return(
            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="box">
                                <div className="image">
                                  <img src={theLogo} />
                                </div>
                                
                                <p>BetaAmax have professional testing labs could apply hardness test, insulation test,pulling test, toqur, life time test and anti rust test. TOLSEN QC team also strict apply sample quality checking, in process quality checking and final shipment for each item.</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="box">
                                <h2>links</h2>
                                <ul className="links">
                                    <li><i class="fas fa-chevron-right"></i> home</li>
                                    <li><i class="fas fa-chevron-right"></i> about</li>
                                    <li><i class="fas fa-chevron-right"></i> products</li>
                                    <li><i class="fas fa-chevron-right"></i> contact</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="box">
                                <h2>contact info</h2>
                                <ul className="links">
                                    <li><i className="fas fa-phone-alt"></i> 01069378239</li>
                                    <li><i className="fas fa-envelope-open-text"></i> betaam.a.e.f@gmail.com</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    } 
}

export default Footer;