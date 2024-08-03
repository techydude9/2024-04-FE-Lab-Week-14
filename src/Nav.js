import React, {Component} from 'react'

export default class Nav extends Component {
  render() {
    return (
      <nav className="navBar">
        <ul>
          <li><a href='./Home'>Home</a></li>
          <li><a href='./About'>About</a></li>
          <li><a href='./Contact'>Contact</a></li>
        </ul>
      </nav>
    )
  }
}
