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

### Usage

#### addScrollRef()

Add a ref to a component where you want to scroll to:

```
const { addScrollRef } = this.context

<div ref={node => addScrollRef('mysection', node)}>

```

#### scrollTo()

Scroll to a specefied section:

```

handleClick = (target) => {
  const { scrollTo } = this.context
  if (scrollTo) scrollTo(target)
}

<a logo onClick={() => this.handleClick('mysection')}>My Section</a>

```