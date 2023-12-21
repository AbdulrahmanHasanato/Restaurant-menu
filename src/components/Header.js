import React from "react"
import { Col, Row } from "react-bootstrap"

function Header() {
    return (
        <Row>
            <Col sm="12" className="justify-content-center text-center">
                <div className="title">Food menu</div>
                <div className="justify-content-center d-flex">
                    <p className="underline" />
                </div>
            </Col>
        </Row>
    )
}

export default Header