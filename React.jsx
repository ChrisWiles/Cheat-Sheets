import React, {Compoent, PropTypes} from 'react'
import {render} from 'react-dom'




export class MyCompoent extends Compoent {
  constructor(props) {
    super(props)

  }
  static propType = {}
  static defaultProps = {}

  onMouseEnter = e => this.setState({hovering: true})

  render() {
    return (
      <div></div>
    )
  }
}

// stateless function compoents
const Commas = ({items, ...otherProps}) => {
  <div {...otherProps}>{items.join(',')}</div>
}

// The ref Callback Attribute
class CustomTextInput extends React.Component {
  constructor(props) {
    super(props)
    this.focus = this.focus.bind(this)
  }

  focus() {
    // Explicitly focus the text input using the raw DOM API
    this.textInput.focus()
  }

  render() {
    // Use the `ref` callback to store a reference to the text input DOM
    // element in this.textInput.
    return (
      <div>
        <input
          type="text"
          ref={(input) => this.textInput = input} />
        <input
          type="button"
          value="Focus the text input"
          onClick={this.focus}
        />
      </div>
    )
  }
}

// Template Literals
this.setState({[`${inputName}Value`] : e.target.value})

// Class Decorators
// Use in place of mixins
@something(options)
class MyCompoent extends Compoent {}
// Desugars to

let MyCompoent = something(options) (
  class MyCompoent extends Compoents {}
)

// Typechecking With PropTypes
MyComponent.propTypes = {
  // You can declare that a prop is a specific JS primitive. By default, these
  // are all optional.
  optionalArray: React.PropTypes.array,
  optionalBool: React.PropTypes.bool,
  optionalFunc: React.PropTypes.func,
  optionalNumber: React.PropTypes.number,
  optionalObject: React.PropTypes.object,
  optionalString: React.PropTypes.string,
  optionalSymbol: React.PropTypes.symbol,

  // Anything that can be rendered: numbers, strings, elements or an array
  // (or fragment) containing these types.
  optionalNode: React.PropTypes.node,

  // A React element.
  optionalElement: React.PropTypes.element,

  // You can also declare that a prop is an instance of a class. This uses
  // JS's instanceof operator.
  optionalMessage: React.PropTypes.instanceOf(Message),

  // You can ensure that your prop is limited to specific values by treating
  // it as an enum.
  optionalEnum: React.PropTypes.oneOf(['News', 'Photos']),

  // An object that could be one of many types
  optionalUnion: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number,
    React.PropTypes.instanceOf(Message)
  ]),

  // An array of a certain type
  optionalArrayOf: React.PropTypes.arrayOf(React.PropTypes.number),

  // An object with property values of a certain type
  optionalObjectOf: React.PropTypes.objectOf(React.PropTypes.number),

  // An object taking on a particular shape
  optionalObjectWithShape: React.PropTypes.shape({
    color: React.PropTypes.string,
    fontSize: React.PropTypes.number
  }),

  // You can chain any of the above with `isRequired` to make sure a warning
  // is shown if the prop isn't provided.
  requiredFunc: React.PropTypes.func.isRequired,

  // A value of any data type
  requiredAny: React.PropTypes.any.isRequired,

  // You can also specify a custom validator. It should return an Error
  // object if the validation fails. Don't `console.warn` or throw, as this
  // won't work inside `oneOfType`.
  customProp: function(props, propName, componentName) {
    if (!/matchme/.test(props[propName])) {
      return new Error(
        'Invalid prop `' + propName + '` supplied to' +
        ' `' + componentName + '`. Validation failed.'
      )
    }
  },

  // You can also supply a custom validator to `arrayOf` and `objectOf`.
  // It should return an Error object if the validation fails. The validator
  // will be called for each key in the array or object. The first two
  // arguments of the validator are the array or object itself, and the
  // current item's key.
  customArrayProp: React.PropTypes.arrayOf(function(propValue, key, componentName, location, propFullName) {
    if (!/matchme/.test(propValue[key])) {
      return new Error(
        'Invalid prop `' + propFullName + '` supplied to' +
        ' `' + componentName + '`. Validation failed.'
      )
    }
  })
}


// class constructor & super(props)
class MyClass extends React.component{
    constructor(props){
        super()
        console.log(this.props) // this.props is undefined

    }
}

// Don't need a constructor if you don't need props in the constructor
class MyClass extends React.component{
    state = {
      array: [0,1,2]
    }
    render(){
        // There is no need to call `super(props)` or even having a constructor

        // this.props is automatically set for you by React

        // not just in render but another where else other than the constructor

        console.log(this.props)  // it works!

    }
}


this.setState((prevState, props) => {
  return {myInteger: prevState.myInteger + props.step}
})

this.setState(prevState => {
  return {myInteger: prevState.myInteger + 1}
})
