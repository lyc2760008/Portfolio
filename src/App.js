import React, { Component } from 'react';
import ReactGA from 'react-ga';
//import $ from 'jquery';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import Testimonials from './Components/Testimonials';
import Portfolio from './Components/Portfolio';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      foo: 'bar',
      resumeData: {}
    };

    ReactGA.initialize('UA-110570651-1');
    ReactGA.pageview(window.location.pathname);

  }


  async componentDidMount() {
    //Fetch data from json file
    try {
      const url = "./resumeData.json";
      const response = await fetch(url);
      const jsonData = await response.json();
      this.setState({resumeData: jsonData});
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    return (
      <div className="App" id='wraper'>
        <Header data={this.state.resumeData.main}/>
        <About data={this.state.resumeData.main}/>
        <Resume data={this.state.resumeData.resume}/>
        <Portfolio 
          data={this.state.resumeData.portfolio}
          data2={this.state.resumeData.portfolio2}
          data3={this.state.resumeData.portfolio3}
        
        />
        <Testimonials data={this.state.resumeData.testimonials}/>
        <Contact data={this.state.resumeData.main}/>
        <Footer data={this.state.resumeData.main}/>
      </div>
    );
  }
}

export default App;
