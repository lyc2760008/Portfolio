import React, { useState } from 'react';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '55%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
     transform: 'translate(-50%, -50%)',
   // backgroundColor: 'black' 
  },
  overlay: {
    backgroundColor: 'white',
    opacity: 1
  },
}

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root')


export default function Portfolio(props) {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalImgOpen, setModalImgOpen] = useState('');

  function openModal(img) {
    setIsOpen(true);
    setModalImgOpen(img)
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <section id="portfolio">

      <div className="row">

        <div className="twelve columns collapsed">

          <h1>Work Related Projects</h1>

          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
            {props.data && props.data.workProjects && props.data.workProjects.map(projects => {
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

          {/* <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
            {props.data && props.data.workProjects2 && props.data.workProjects2.map(projects => {
              return <div key={projects.title} className="columns portfolio-item">
                <div className="item-wrap">
                  <div onClick={()=>openModal(projects.image)} title={projects.title}>
                    <img alt={projects.title} src={'images/portfolio/' + projects.image} />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>{projects.title}</h5>
                        <p>{projects.category}</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="fa fa-link"></i></div>
                  </div>
                </div>
                  <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                  >
                    <button style={{position:"absolute", top: "30px", right:0, textAlign:"center"}} onClick={closeModal}><i className="fa fa-times"></i></button>
                    <img alt={projects.title} src={'images/portfolio/' + modalImgOpen} />
                  </Modal>
              </div>

            })}
          </div>

          <h1>Personal Projects</h1>
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
            {props.data && props.data.projects && props.data.projects.map(projects => {
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
          </div> */}
        </div>
      </div>
    </section>
  );

}
