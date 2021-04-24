import React, { Component } from 'react';

class Portfolio extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //         name: '',
  //         email: 'yli7591@mtroyal.ca',
  //         message: '',
  //         disabled: false,
  //         emailSent: null,
  //     }
  // }
  render() {

    // if (this.props.data) {
    //   var projects = this.props.data.projects.map(function (projects) {
    //     var projectImage = 'images/portfolio/' + projects.image;
    //     return <div key={projects.title} className="columns portfolio-item">
    //       <div className="item-wrap">
    //         <a href={projects.url} target="_blank" rel="noopener noreferrer" title={projects.title}>
    //           <img alt={projects.title} src={projectImage} />
    //           <div className="overlay">
    //             <div className="portfolio-item-meta">
    //               <h5>{projects.title}</h5>
    //               <p>{projects.category}</p>
    //             </div>
    //           </div>
    //           <div className="link-icon"><i className="fa fa-link"></i></div>
    //         </a>
    //       </div>
    //     </div>

    //   })

    //   var workProjects = this.props.data.workProjects.map(function (projects) {
    //     var projectImage = 'images/portfolio/' + projects.image;
    //     return <div key={projects.title} className="columns portfolio-item">
    //       <div className="item-wrap">
    //         <a href={projects.url} target="_blank" rel="noopener noreferrer" title={projects.title}>
    //           <img alt={projects.title} src={projectImage} />
    //           <div className="overlay">
    //             <div className="portfolio-item-meta">
    //               <h5>{projects.title}</h5>
    //               <p>{projects.category}</p>
    //             </div>
    //           </div>
    //           <div className="link-icon"><i className="fa fa-link"></i></div>
    //         </a>
    //       </div>
    //     </div>

    //   })

    //   var workProjects2 = this.props.data.workProjects2.map(function (projects) {
    //     var projectImage = 'images/portfolio/' + projects.image;
    //     return <div key={projects.title} className="columns portfolio-item">
    //       <div className="item-wrap">
    //         <div title={projects.title}>
    //           <img alt={projects.title} src={projectImage} />
    //           <div className="overlay">
    //             <div className="portfolio-item-meta">
    //               <h5>{projects.title}</h5>
    //               <p>{projects.category}</p>
    //             </div>
    //           </div>
    //           <div className="link-icon"><i className="fa fa-link"></i></div>
    //         </div>
    //       </div>
    //     </div>

    //   })
    // }

    return (
      <section id="portfolio">

        <div className="row">

          <div className="twelve columns collapsed">

            <h1>Work Related Projects</h1>

            {/* <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              {workProjects}
            </div>

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              {workProjects2}
            </div> */}

            <h1>Personal Projects</h1>
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              {this.props.data && this.props.data.projects.map(projects => {
                return <div key={projects.title} className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href={projects.url} target="_blank" rel="noopener noreferrer" title={projects.title}>
                      <img alt={projects.title} src={'images/portfolio/' + projects.image} />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>{projects.title}</h5>
                          <p>{projects.category}</p>
                        </div>
                      </div>
                      <div className="link-icon"><i className="fa fa-link"></i></div>
                    </a>
                  </div>
                </div>

              })}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
