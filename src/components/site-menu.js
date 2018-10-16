import React from 'react'
import s from './site-menu.module.scss'
import classNames from 'classnames/bind'
import { TweenLite } from 'gsap'

const cx = classNames.bind(s)

const MenuContext = React.createContext()

class Sheet extends React.Component {
  myTween = null

  componentDidMount() {
    this.myTween = TweenLite.to(this.menuSheet, 0.5, { y: 0 })
  }

  getMenuSheet = el => {
    this.menuSheet = el
  }

  render() {
    return (
      <div className={s.menu_sheet} ref={this.getMenuSheet}>
        {this.props.children}
      </div>
    )
  }
}

const _MenuSheet = props => (
  <MenuContext.Consumer>
    {({ isOpen }) => isOpen && <Sheet isOpen={isOpen} {...props} />}
  </MenuContext.Consumer>
)

class SiteMenu extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isOpen: false,
      toggle: this.toggle,
    }
  }

  toggle = () => {
    this.setState(state => ({
      ...state,
      isOpen: !state.isOpen,
    }))
  }

  render() {
    console.log('menu state:', this.state)

    return (
      <MenuContext.Provider value={this.state}>
        {this.props.children}
      </MenuContext.Provider>
    )
  }
}

SiteMenu.MenuButton = props => (
  <MenuContext.Consumer>
    {({ isOpen, toggle }) => (
      <button
        className={cx({
          icon: true,
          icon__open: isOpen,
        })}
        onClick={toggle}
        {...props}
      />
    )}
  </MenuContext.Consumer>
)

SiteMenu.MenuSheet = _MenuSheet

export default SiteMenu
