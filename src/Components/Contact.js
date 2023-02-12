import React, { Component } from 'react';
import Axios from 'axios';
import Button from 'react-bootstrap/Button';

class Contact extends Component {
   constructor(props) {
      super(props);
      this.state = {
          name: '',
          email: 'yli7591@mtroyal.ca',
          message: '',
          disabled: false,
          emailSent: null,
      }
  }


  handleChange = (event) => {
        const target = event.target;
        const value =  target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })
    }

   handleSubmit = (event) => {
      event.preventDefault();

      console.log(event.target);

      this.setState({
          disabled: true
      });

      Axios.post('https://yichen-li-portfolio.herokuapp.com/api/email', this.state)
          .then(res => {
              if(res.data.success) {
                  this.setState({
                      disabled: false,
                      emailSent: true
                  });
              } else {
                  this.setState({
                      disabled: false,
                      emailSent: false
                  });
              }
          })
          .catch(err => {
              console.log(err);

              this.setState({
                  disabled: false,
                  emailSent: false
              });
          })

  }

  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      //var email = this.props.data.email;
      var message = this.props.data.contactmessage;
    }

    return (
      <section id="contact">

         <div className="row section-head">

            <div className="two columns header-col">

               <h1><span>Get In Touch.</span></h1>

            </div>

            <div className="ten columns">

                  <p className="lead">{message}</p>

            </div>

         </div>

         <div className="row">
            <div className="eight columns">

               <form action="" method="post" id="contactForm" name="contactForm" onSubmit={this.handleSubmit}>
					<fieldset>

                  <div>
						   <label htmlFor="contactName">Name <span className="required">*</span></label>
						   <input type="text" value={this.state.name} size="35" id="contactName" name="name" onChange={this.handleChange}/>
                  </div>

                  <div>
						   <label htmlFor="contactEmail">Email <span className="required">*</span></label>
						   <input type="text" value={this.state.email} size="35" id="contactEmail" name="email" onChange={this.handleChange}/>
                  </div>

                  <div>
						   <label htmlFor="contactSubject">Subject</label>
						   <input type="text" value="Yichen Li - Portfolio Web Contact" size="35" id="contactSubject" name="contactSubject" onChange={this.handleChange}/>
                  </div>

                  <div>
                     <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                     <textarea cols="50" value={this.state.message} rows="15" id="contactMessage" name="message"
                        placeholder = "Please DO NOT forget to leave your email here for me to reply!" onChange={this.handleChange}></textarea>
                  </div>

                  <div>
                     {/* <button className="submit" type="submit" disabled={this.state.disabled}>Submit</button> */}
                     <Button variant="primary" type="submit" disabled={this.state.disabled}>
                            Send
                        </Button>
                        {this.state.emailSent === true && <p className="d-inline success-msg">Email Sent</p>}
                        {this.state.emailSent === false && <p className="d-inline err-msg">Email Not Sent</p>}
                     <span id="image-loader">
                        <img alt="" src="images/loader.gif" />
                     </span>
                  </div>
					</fieldset>
				   </form>

           <div id="message-warning"> Error boy</div>
				   <div id="message-success">
                  <i className="fa fa-check"></i>Your message was sent, thank you!<br />
				   </div>
           </div>


            <aside className="four columns footer-widgets">
               <div className="widget widget_contact">

					   <h4>Address and Phone</h4>
					   <p className="address">
						   {name}<br />
						   {street} <br />
						   {city}, {state} {zip}<br />
						   <span>{phone}</span>
					   </p>
				   </div>

               {/* <div className="widget widget_tweets">
                  <h4 className="widget-title">Latest Tweets</h4>
                  <ul id="twitter">
                     <li>
                        <span>
                        This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.
                        Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum
                        <a href="#">http://t.co/CGIrdxIlI3</a>
                        </span>
                        <b><a href="#">2 Days Ago</a></b>
                     </li>
                     <li>
                        <span>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                        eaque ipsa quae ab illo inventore veritatis et quasi
                        <a href="#">http://t.co/CGIrdxIlI3</a>
                        </span>
                        <b><a href="#">3 Days Ago</a></b>
                     </li>
                  </ul>
		         </div> */}
            </aside>
      </div>
   </section>
    );
  }
}

export default Contact;
