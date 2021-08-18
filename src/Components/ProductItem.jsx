import React from "react";
import { useDispatch } from "react-redux";
import { Row, Col, Card, Button } from "react-bootstrap";
import "./ProductItem.css";

export const ProductItem = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <Card className="productitem">
        <Row>
          <Col>
            <Button
              onClick={() =>
                dispatch({
                  type: "ADD_PRODUCT",
                  data: ["pen", "Laptop", "Mobile"],
                })
              }
            >
              +
            </Button>
          </Col>
          <Col>
            <Button>-</Button>
          </Col>
        </Row>
      </Card>
    </div>
  );
};
