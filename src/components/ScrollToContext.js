import React from 'react'

export const ScrollToContext = React.createContext({
  addScrollRef: () => {},
  scrollTo: () => {},
  closestElement: ''
})

export const withScrollTo = (Component) =>
  class WithScrollTo extends React.Component {
    static contextType = ScrollToContext
    render() {
      return (
        <ScrollToContext.Consumer>
          {(value) => <Component {...this.props} active={(value.closestElement == this.props.target) ? 'active' : undefined} />}
        </ScrollToContext.Consumer>
      );
    } 
  }