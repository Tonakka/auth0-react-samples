import React, { Component } from "react";

import { Row, Col } from "reactstrap";

import contentData from "../utils/contentData";

class Content extends Component {
  render() {
    return (
      <div className="next-steps my-5">
        <h2 className="my-5 text-center">Explore our cruises</h2>
        <Row className="d-flex justify-content-between">
          {contentData.map((col, i) => (
            <Col key={i} md={5} className="mb-4">
              <div className="images"><img className="mb-3" src={col.image} alt={col.title}/></div>
              <h6 className="mb-3">
                <a href={col.link}>
                  {col.title}
                </a>
              </h6>
              <p>{col.description}</p>
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}

export default Content;
