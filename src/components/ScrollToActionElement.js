import React from 'react'
import { ScrollToContext, withScrollTo } from './ScrollToContext'

class ScrollToActionElement extends React.Component {
  
  handleClick = (target) => {
    const { scrollTo } = this.context
    if (scrollTo) scrollTo(target)
  }

  render() {
    const { props } = this
    const { target, children, Parent, ...rest } = props
    return (
      <Parent {...rest} onClick={() => this.handleClick(target)} >
        {children}
      </Parent>
    )
  }
}

export default withScrollTo(ScrollToActionElement)

ScrollToActionElement.contextType = ScrollToContext