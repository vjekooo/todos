import React from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router'

export const PropsRoute = ({ component: Component, ...props }) => (
  <Route
    { ...props }
    render={ renderProps => (<Component { ...renderProps } { ...props } />) }
  />
)

PropsRoute.propTypes = {
  component: PropTypes.func
}

export default PropsRoute
