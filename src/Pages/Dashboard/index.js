import React from 'react'
import { Link } from 'react-router-dom'
// import { Col, Container, Row } from 'react-bootstrap'
import styled from 'styled-components'

const index = () => {
  return (
    <>
      <Demmo></Demmo>
      {/* <button>click me</button> */}
      {/* <Link to={'/DatametricReport'}>click me</Link> */}
    </>
  )
}

export default index

const Demmo = styled.div`
  height: 100px;
  border: 1px solid red;
`