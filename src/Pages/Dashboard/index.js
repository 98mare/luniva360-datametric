import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import styled from 'styled-components'

const index = () => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <Demmo>
          </Demmo>
        </Col>
        <Col>
          <Demmo>
          </Demmo>
        </Col>
        <Col>
          <Demmo>
          </Demmo>
        </Col>
        <Col>
          <Demmo>
          </Demmo>
        </Col>
      </Row>


    </Container>
  )
}

export default index

const Demmo = styled.div`
  height: 100px;
  border: 1px solid red;
`