import { Component, Children } from 'react'
import PropTypes from 'prop-types'

class ScrollToProvider extends Component {

  static childContextTypes = {
    addScrollRef: PropTypes.func.isRequired,
    scrollTo: PropTypes.func.isRequired,
  }

  getChildContext() {
    const { addScrollRef, scrollTo } = this
    return { addScrollRef, scrollTo }
  }

  addScrollRef = (id, ref) => {
    if (!this.refRepo) this.refRepo = {}
    this.refRepo[id] = ref
  }

  scrollTo = (id) => {
    const section = this.refRepo[id]
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }

  render() {
    const { children } = this.props
    return Children.only(children)
  }
}
export default ScrollToProvider
