import React from "react"
import { Card, Col, Row } from "react-bootstrap"

function ItemsList({ itemsData }) {
    return (
        <Row>
            {
                itemsData.length >= 1 ? (
                    itemsData.map((item) => {
                        return (
                            <Col sm="12" className="mb-3" key={item.id}>
                                <Card className="d-flex flex-row" style={{ backgroundColor: "#f8f8f8" }}>
                                    <Card.Img variant="top" src={item.imgUrl} className="img-item" />
                                    <Card.Body>
                                        <Card.Title className="d-flex justify-content-between">
                                            <div className="item-title">{item.title}</div>
                                            <div className="item-price">{item.price}</div>
                                        </Card.Title>
                                        <Card.Text className="py-2">
                                            <div className="item-description">
                                                {item.description}
                                            </div>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    })
                ) : <h3 className="text-center">No items in the menu yet</h3>
            }
        </Row >
    )
}

export default ItemsList