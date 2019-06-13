import React, { Component, Children } from 'react'
import PropTypes from 'prop-types'
import { ScrollToContext } from './ScrollToContext'

class ScrollToProvider extends Component { 
  constructor(){
    super()
    this.state = {
      addScrollRef: this.addScrollRef,
      scrollTo: this.scrollTo,
      closestElement: ''
    }
  }
  
  componentDidMount() {
    if(typeof window !== 'undefined'){
      window.addEventListener('scroll', this.handleScroll)
    }
  }

  componentWillUnmount() {
    (typeof window !== 'undefined' &&
    window.removeEventListener('scroll', this.handleScroll))
  }

  toggleClosestElement = (element) => {
    const { closestElement } = this.state
    if (closestElement != element ) this.setState((state) => {
      return { ...this.state, closestElement: element }
    })

  }
  
  handleScroll = () => {
    if (this.refRepo !== 'undefined') {
      let workingArray = []
      let activeElement = ''
      let closestToMid = ''

      this.refRepo.map( obj => {
        if (obj.ref) {
          var rect = obj.ref.getBoundingClientRect();
          var elemTop = rect.top;
          var elemBottom = rect.bottom;
          
          //var isTotallyVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight)
          var isPartlyVisible = elemTop < window.innerHeight && elemBottom >= 0
          
          if (isPartlyVisible) workingArray.push({id: obj.id, top: elemTop})
        }
      })

      if (workingArray.length > 0) {
        activeElement = workingArray.reduce((prev, curr) => prev.top < curr.top ? prev : curr)
        closestToMid = workingArray.reduce((prev, curr) => (Math.abs(curr.top - (window.innerHeight/2)) < Math.abs(prev.top - (window.innerHeight/2)) ? curr : prev))
        //console.info("activeElement: " + activeElement.id + " / closest: " + closestToMid.id )
        this.toggleClosestElement(activeElement.id)
      }
    }
  }

  addScrollRef = (id, ref) => {
    if (!this.refRepo) this.refRepo = []
    if (ref && !this.refRepo.some(el => el.id === id)) {
      this.refRepo.push({id:id, ref: ref})
    }
  }

  scrollTo = (id) => {
    let section = (this.refRepo.find(section => section.id === id))
    if (section) {
      const element = section.ref
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }

  render() {
    const { children } = this.props
    return(
      <ScrollToContext.Provider value={this.state}>
        {Children.only(children)}
      </ScrollToContext.Provider>
    )
  }
}
export default ScrollToProvider