# react-scroll-to
Scroll to named ankers on your page. Scroll to Provider for React (^16.3.0) .. or better (^16.6.0)..

## Installation
```
npm install @zauberware/react-scroll-to
```

### ScrollToProvider

Include the ScrollToProvider in your App by wrapping it around your App Component.

```
# src/index.js
import ScrollToProvider from '@zauberware/react-scroll-to'


# wrap scroll to Provider
<ScrollToProvider>
  <App />
</ScrollToProvider>

```

### NEW with v 0.2.1

### ScrollToActionElement
You can use the included ScrollToAction element with a scrollTo action already attached.

```

# Renders a passed Component and adds 'active' property
<ScrollToActionElement Parent={Button} target='mysection' />

```
The rendered element has the property active='active', so you can use it with styled-components

### Usage

#### addScrollRef()

Add a ref to a component where you want to scroll to:

```
const { addScrollRef } = this.context
<div ref={node => addScrollRef('mysection', node)}>

```

#### scrollTo()

Scroll to a specified section:

```

handleClick = (target) => {
  const { scrollTo } = this.context
  if (scrollTo) scrollTo(target)
}

<a logo onClick={() => this.handleClick('mysection')}>My Section</a>

```
#### Add Context

#### LEGACY IMPLEMENTATION BEFORE v0.2.1!

Define your contextTypes:

```

MyComponent.contextTypes = {
  scrollTo: PropTypes.func.isRequired,
  addScrollRef: PropTypes.func.isRequired,
}
```
Note: You only need to define the types or functions you want to use. You may only need addScrollRef on your scroll target and e.g. scrollTo within your MenuComponent.

#### IMPLEMENTATION v0.2.1!

```
import ScrollToContext from '@zauberware/react-scroll-to'

[...]

MyComponent.contextType = ScrollToContext
```