import React from 'react'
import { Route } from 'react-router-dom'

const PublicTouter = ({component: Component, layout: Layout}) => {
  return (
    <Route 
      render ={props => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  )
}

export default PublicTouter