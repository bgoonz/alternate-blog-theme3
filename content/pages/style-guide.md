---
title: Style Guide
subtitle: >-
  The style guide provides you with a blueprint of default post and page styles.
  The style guide is also a great reference for suggested typographic treatment
  and styles for your content.
img_path: images/style-guide.jpg
seo:
  title: Theme Style Guide
  description: A reference for suggested typographic treatment and styles for your content
  extra:
    - name: 'og:type'
      value: website
      keyName: property
    - name: 'og:title'
      value: Theme Style Guide
      keyName: property
    - name: 'og:description'
      value: >-
        A reference for suggested typographic treatment and styles for your
        content
      keyName: property
    - name: 'og:image'
      value: images/style-guide.jpg
      keyName: property
      relativeUrl: true
    - name: 'twitter:card'
      value: summary_large_image
    - name: 'twitter:title'
      value: Theme Style Guide
    - name: 'twitter:description'
      value: >-
        A reference for suggested typographic treatment and styles for your
        content
    - name: 'twitter:image'
      value: images/style-guide.jpg
      relativeUrl: true
layout: page
---



Use the [React.js jsfiddle](https://jsfiddle.net/reactjs/69z2wepo/) to start hacking. (or the unofficial [jsbin](http://jsbin.com/yafixat/edit?js,output))

### Import multiple exports

### Properties

Use this.props to access properties passed to the component.

See: [Properties](https://reactjs.org/docs/tutorial.html#using-props)

### States

Use states (this.state) to manage dynamic data.

With [Babel](https://babeljs.io/) you can use [proposal-class-fields](https://github.com/tc39/proposal-class-fields) and get rid of constructor

See: [States](https://reactjs.org/docs/tutorial.html#reactive-state)

### Nesting

As of React v16.2.0, fragments can be used to return multiple children without adding extra wrapping nodes to the DOM.

Nest components to separate concerns.

See: [Composing Components](https://reactjs.org/docs/components-and-props.html#composing-components)

### Children

Children are passed as the children property.

## [#](https://gist.github.com/bgoonz/894d714a116f2ed23f2474882c71abbf#defaults)Defaults

### Setting default props

See: [defaultProps](https://reactjs.org/docs/react-component.html#defaultprops)

### Setting default state

Set the default state in the constructor().

And without constructor using [Babel](https://babeljs.io/) with [proposal-class-fields](https://github.com/tc39/proposal-class-fields).

See: [Setting the default state](https://reactjs.org/docs/react-without-es6.html#setting-the-initial-state)

## [#](https://gist.github.com/bgoonz/894d714a116f2ed23f2474882c71abbf#other-components)Other components

### Functional components

Functional components have no state. Also, their props are passed as the first parameter to a function.

See: [Function and Class Components](https://reactjs.org/docs/components-and-props.html#functional-and-class-components)

### Pure components

Performance-optimized version of React.Component. Doesn’t rerender if props/state hasn’t changed.

See: [Pure components](https://reactjs.org/docs/react-api.html#react.purecomponent)

### Component API

These methods and properties are available for Component instances.

See: [Component API](https://facebook.github.io/react/docs/component-api.html)

## [#](https://gist.github.com/bgoonz/894d714a116f2ed23f2474882c71abbf#lifecycle)Lifecycle

### Mounting

Set initial the state on constructor(). Add DOM event handlers, timers (etc) on componentDidMount(), then remove them on componentWillUnmount().

### Updating

Called when parents change properties and .setState(). These are not called for initial renders.

See: [Component specs](https://facebook.github.io/react/docs/component-specs.html#updating-componentwillreceiveprops)

## [#](https://gist.github.com/bgoonz/894d714a116f2ed23f2474882c71abbf#hooks-new)Hooks (New)

### State Hook

Hooks are a new addition in React 16.8.

See: [Hooks at a Glance](https://reactjs.org/docs/hooks-overview.html)

### Declaring multiple state variables

### Effect hook

If you’re familiar with React class lifecycle methods, you can think of useEffect Hook as componentDidMount, componentDidUpdate, and componentWillUnmount combined.

By default, React runs the effects after every render — including the first render.

### Building your own hooks

#### Define FriendStatus

Effects may also optionally specify how to “clean up” after them by returning a function.

#### Use FriendStatus

See: [Building Your Own Hooks](https://reactjs.org/docs/hooks-custom.html)

### Hooks API Reference

Also see: [Hooks FAQ](https://reactjs.org/docs/hooks-faq.html)

#### Basic Hooks

Full details: [Basic Hooks](https://reactjs.org/docs/hooks-reference.html#basic-hooks)

#### Additional Hooks

Full details: [Additional Hooks](https://reactjs.org/docs/hooks-reference.html#additional-hooks)

## [#](https://gist.github.com/bgoonz/894d714a116f2ed23f2474882c71abbf#dom-nodes)DOM nodes

### References

Allows access to DOM nodes.

See: [Refs and the DOM](https://reactjs.org/docs/refs-and-the-dom.html)

### DOM Events

Pass functions to attributes like onChange.

See: [Events](https://reactjs.org/docs/events.html)

## [#](https://gist.github.com/bgoonz/894d714a116f2ed23f2474882c71abbf#other-features)Other features

### Transferring props

Propagates src="..." down to the sub-component.

See [Transferring props](https://facebook.github.io/react/docs/transferring-props.html)

### Top-level API

There are more, but these are most common.

See: [React top-level API](https://reactjs.org/docs/react-api.html)

## [#](https://gist.github.com/bgoonz/894d714a116f2ed23f2474882c71abbf#jsx-patterns)JSX patterns

### Style shorthand

See: [Inline styles](https://reactjs.org/tips/inline-styles.html)

### Inner HTML

See: [Dangerously set innerHTML](https://reactjs.org/tips/dangerously-set-inner-html.html)

### Lists

Always supply a key property.

### Conditionals

### Short-circuit evaluation

## [#](https://gist.github.com/bgoonz/894d714a116f2ed23f2474882c71abbf#new-features)New features

### Returning multiple elements

You can return multiple elements as arrays or fragments.

#### Arrays

#### Fragments

See: [Fragments and strings](https://reactjs.org/blog/2017/09/26/react-v16.0.html#new-render-return-types-fragments-and-strings)

### Returning strings

You can return just a string.

See: [Fragments and strings](https://reactjs.org/blog/2017/09/26/react-v16.0.html#new-render-return-types-fragments-and-strings)

### Errors

Catch errors via componentDidCatch. (React 16+)

See: [Error handling in React 16](https://reactjs.org/blog/2017/07/26/error-handling-in-react-16.html)

### Portals

This renders this.props.children into any location in the DOM.

See: [Portals](https://reactjs.org/docs/portals.html)

### Hydration

Use ReactDOM.hydrate instead of using ReactDOM.render if you’re rendering over the output of [ReactDOMServer](https://reactjs.org/docs/react-dom-server.html).

See: [Hydrate](https://reactjs.org/docs/react-dom.html#hydrate)

## [#](https://gist.github.com/bgoonz/894d714a116f2ed23f2474882c71abbf#property-validation)Property validation

### PropTypes

See: [Typechecking with PropTypes](https://reactjs.org/docs/typechecking-with-proptypes.html)

#### Basic

#### Enum

#### Array

#### Object

#### Elements

#### Required

### Basic types

### Required types

### Elements

### Enumerables (oneOf)

### Arrays and objects

Use .array\[Of], .object\[Of], .instanceOf, .shape.

### Custom validation
