import React from "react"
import { Col, Row } from "react-bootstrap"

function Category({ filterCategory, allCategories }) {

    //To filter by category
    const onFilter = (cat) => {
        filterCategory(cat)
    }
    return (
        <Row className="my-2 mb-5">
            <Col sm="12" className="d-flex justify-content-center">
                {
                    allCategories.length >= 1 ? (
                        allCategories.map((cat) => {
                            return (
                                <div>
                                    <button onClick={() => onFilter(cat)} style={{ border: "1px solid #b45b35" }} className="btn mx-2">{cat.charAt(0).toUpperCase() + cat.slice(1)}</button>
                                </div>
                            )
                        })
                    ) : <h4>No Categories</h4>
                }
            </Col>
        </Row>
    )
}

export default Category