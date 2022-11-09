import React, { useEffect, useState }  from 'react';
 import Modal from 'react-bootstrap/Modal';
 import './Modal.css'

 export const StatsModal = (props) =>{
    const [show, setShow] = useState(false);
    debugger;
    const { nameJ1, nameJ2, acesJ1, acesJ2, doblesJ1, doblesJ2, puntosJ1, puntosJ2} = props;
     const tile = `Estadísticas ${nameJ1} vs ${nameJ2}`;
     const acesJ1porcentaje = ((acesJ1+acesJ2)/acesJ1)*100;
     const acesJ2porcentaje = ((acesJ1+acesJ2)/acesJ2)*100;
     const doblesJ1porcentaje = ((doblesJ1+doblesJ2)/doblesJ1)*100;
     const doblesJ2porcentaje = ((doblesJ1+doblesJ2)/doblesJ2)*100;
     const puntosJ1porcentaje = ((puntosJ1+puntosJ2)/puntosJ1)*100;
     const puntosJ2porcentaje = ((puntosJ1+puntosJ2)/puntosJ2)*100;

     return (<>
    
        {show && (
            <Modal
            {...props}
            size="lg"
            aria-labelledby={tile}
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id={tile}>
              {tile}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h4>Aces</h4>
              <div className="nombres">
                  <div>{nameJ1}</div>
                  <div>{nameJ2}</div>
              </div>
              <div className="aces">
                  <div className="nombres">
                      <div>{acesJ1}</div>
                      <div>{acesJ2}</div>
                  </div>
                  <div class="container">
                      <div className="first-progrss" style={{width: `${acesJ1porcentaje}%`}} />
                      <div className="second-progrss" style={{width: `${acesJ2porcentaje}%`}} />
                  </div>
              </div>
              <div className="dobles">
                  <div className="nombres">
                      <div>{acesJ1}</div>
                      <div>{acesJ2}</div>
                  </div>
                  <div class="container">
                      <div className="first-progrss" style={{width: `${doblesJ1porcentaje}%`}} />
                      <div className="second-progrss" style={{width: `${doblesJ2porcentaje}%`}} />
                  </div>
              </div>
              <div className="puntos">
                  <div className="nombres">
                      <div>{puntosJ1porcentaje}</div>
                      <div>{puntosJ2porcentaje}</div>
                  </div>
                  <div class="container">
                      <div className="first-progrss" style={{width: `${puntosJ1porcentaje}%`}} />
                      <div className="second-progrss" style={{width: `${puntosJ2porcentaje}%`}} />
                  </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <div onClick={props.onHide}>Close</div>
            </Modal.Footer>
          </Modal>
        )}
       </>  
       );
 }

//  function App() {
//    const [modalShow, setModalShow] = React.useState(false);

//    return (
//      <>
//        <Button variant="primary" onClick={() => setModalShow(true)}>
//          Launch vertically centered modal
//        </Button>

//        <MyVerticallyCenteredModal
//          show={modalShow}
//          onHide={() => setModalShow(false)}
//        />
//      </>
//    );
//  }

 export default StatsModal;