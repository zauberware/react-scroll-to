import React from 'react'
import PropTypes from 'prop-types'
import { withScrollTo } from './ScrollToContext'

class ScrollToTarget extends React.Component {
  render() {
    const { props } = this
    const { ref, children, Parent, ...rest } = props
    return (
      <Parent ref {...rest} >
        {children}
      </Parent>
    )
  }
}

export default withScrollTo(ScrollToElement)