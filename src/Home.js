import adopt from "./adopt.png";
import meta from "./matamask.png";
import React from 'react'
import { Navbar, NavbarBrand,Nav,NavItem,Collapse,NavLink,NavbarToggler, Container,Row,Col,Card,Button, Modal, ModalFooter,ModalHeader, ModalBody } from 'reactstrap';
const Home = () => {
    const [modal, setModal] = React.useState(false);
    const toggle = () => setModal(!modal);
    return(
        <Container style={{position:"absolute",top:"200px",transform:"scale(1.4)",left:"150px"}}>
            <center>
                <Row>
                <Col>
                    <img src={adopt} style={{position:"relative",left:"50px"}} fluid></img>
                </Col>
                <Col>
                    <Card style={{width:"22rem",boxShadow:"0 2px 2px 0 rgba(0, 0, 0, 0), 0 2px 5px 0 rgba(0, 0, 0, 0.1)",top:"50px",right:"100px",padding:"50px",borderRadius:"2%",fontWeight:"bolder"}} className="bel">
                    "Until one has loved an animal, a part of one's soul remains unawakened."
                    </Card>
                    <Col>
                    <Card style={{top:"100px",right:"200px",width:"5rem",paddingBottom:"10px"}}>
                        <img className="hov" onClick={toggle} src={meta} style={{width:"80px",height:"80px"}}/>
                        <Modal isOpen={modal} toggle={toggle} modalTransition={{ timeout: 1000 }}><ModalHeader
                    toggle={toggle}>Login Form</ModalHeader><ModalBody>

                    </ModalBody>
                     <ModalFooter>
                    <Button color="primary" onClick={toggle}>Submit</Button>
                </ModalFooter>
                    </Modal>
                    </Card>
                    </Col>
                    <Col style={{position:"relative",top:"30px",right:"50px"}}>
                     Share, Love and donate
                    </Col>
                </Col>
                </Row>
            </center>
        </Container>
    );
  };
  
  export default Home;