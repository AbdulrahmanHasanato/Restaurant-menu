import React, { useState } from "react"
import { Button, Nav, Navbar, Row, Container, Form } from "react-bootstrap"

function NavBar({ filterBySearch }) {

    const [searchValue, setSearchValue] = useState("")
    const onSearch = () => {
        filterBySearch(searchValue)
        setSearchValue("")
    }
    return (
        <Row>
            <Navbar expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#">
                        <div className="brand-color">
                            Restaurant
                        </div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                                type="text"
                                placeholder="Start typing to search"
                                className="me-2"
                                onChange={(e) => setSearchValue(e.target.value)}
                                value={searchValue}
                            />
                            <Button onClick={() => onSearch()} className="btn btn-secondary text-white mx-2">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Row>
    )
}

export default NavBar