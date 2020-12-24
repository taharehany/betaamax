import React, {Component} from 'react';

class Contact extends Component {
    state = {
        title: "contact",
        subtitle: "betamax",
        name: '',
        email: '',
        phone: '',
        message: '',
        emailStatus: ''
    }

    //handle change
    handleChange = input => e => {
        this.setState({
            [input]: e.target.value
        })
    }
    
    // when submit btn is clicked
    submitForm = (e) => {
        const {name, phone, email, message} = this.state;


        // create a new XMLHttpRequest
        var xhr = new XMLHttpRequest();
    
        // get a callback when the server responds
        xhr.addEventListener('load', () => {
            // update the response state and the step
            
            this.setState ({
                emailStatus: xhr.responseText
            });
        });
        // open the request with the verb and the url
        xhr.open('GET', 'http://api.ruvictor.com/sendemail/index.php?sendto=' + email + 
                                '&name=' + name + 
                                '&message=' + message +
                                '&phone=' + phone);
        // send the request
        xhr.send();

        // reset the fields
        this.setState({
            name: '',
            email: '',
            phone: '',
            message: ''
        });
        e.preventDefault();
    }
    render() {
        const {name, email, phone, message} = this.state
        return(
            <div>
                <div className="toppart">
                    <div className="container">
                        <h2 className="title">{this.state.title}</h2>
                        <h3 className="sub-title">{this.state.subtitle}</h3>
                    </div>
                </div>
                <section className="contact" id="contact">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-lg-7">
                                <div className="contact-form">
                                    <div className="border-form">
                                        <h3>contact by mail</h3>
                                        <form onSubmit={this.submitForm}>
                                            <div className="row align-items-center">
                                                <div className="col-sm-12 col-md-12 col-lg-6">
                                                    <div className="form-group">
                                                        <input value={name} onChange={this.handleChange('name')} type="text" className="form-control"  placeholder="name" />
                                                    </div>
                                                </div>
                                                <div className="col-sm-12 col-md-12 col-lg-6">
                                                    <div className="form-group">
                                                        <input value={phone} onChange={this.handleChange('phone')} type="number" className="form-control"  placeholder="phone number" />
                                                    </div>
                                                </div>
                                                <div className="col-sm-12 col-md-12 col-xs-12">
                                                    <div className="form-group">
                                                        <input value={email} onChange={this.handleChange('email')} type="email" className="form-control"  placeholder="email" />
                                                    </div>
                                                </div>
                                                <div className="col-sm-12 col-xs-12">
                                                    <div className="form-group">
                                                        <textarea value={message} onChange={this.handleChange('message')}  className="form-control" rows="6" placeholder="message"></textarea>
                                                    </div>
                                                </div>
                                                <div className="col-sm-12 col-xs-12">
                                                    <div className="form-group">
                                                        <input type="submit" value="send now" className="btn btn-warning" />
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12 col-lg-5">
                                <div className="info">
                                    <div className="info-content">
                                        <h2>contact info</h2>
                                        <div className="box">
                                            <p><i className="fas fa-phone-alt"></i> <a href="tel:01069378239">01069378239</a></p>
                                        </div>
                                        <div className="box">
                                            <p><i class="fab fa-whatsapp"></i> <a href="https://api.whatsapp.com/send?phone=201020074442" target="_blank">01020074442</a></p>
                                        </div>
                                        <div className="box">
                                            <p><i className="fas fa-envelope-open-text"></i>
                                                <a href="mailto:betaam.a.e.f@gmail.com">betaam.a.e.f@gmail.com</a>
                                            </p>
                                        </div>
                                        <div className="box">
                                            <p><i className="fas fa-map-marker-alt"></i> Cairo, Egypt</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54837.433960195296!2d30.96433690375729!3d30.793108825485454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f7c95daafcf035%3A0x7421820c5e8cae42!2sTanta%2C%20Tanta%20Qism%202%2C%20Tanta%2C%20Gharbia%20Governorate!5e0!3m2!1sen!2seg!4v1608564986268!5m2!1sen!2seg" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                </div>
            </div>
        )
    } 
}

export default Contact;