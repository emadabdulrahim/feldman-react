import React from 'react'
import styled from 'styled-components'
import Link from './link'
import Logo from 'components/logo'
import media from 'styled-media-query'
import { Separator } from './index'
import SiteMenu from './site-menu'
import s from './site-header.module.scss'

const SiteHeader = () => (
  <nav className={s.global_nav}>
    <div className={s.nav_content}>
      <Logo theme="dark" />
      <SiteMenu>
        <SiteMenu.MenuButton />
        <SiteMenu.MenuSheet />
      </SiteMenu>
      {/* <div className={s.nav_menu}>
        <Link type="nav" to="/blog">
          Blog
        </Link>
        <Separator />
        <Link type="nav" to="/podcast">
          Postcast
        </Link>
        <Separator />
        <Link type="nav" to="#books">
          Books
        </Link>
        <Separator />
        <Link type="nav" to="/about">
          About
        </Link>
        <Separator />
        <Link type="nav" to="/workshop">
          Workshop
        </Link>
      </div> */}
    </div>
  </nav>
)

export default SiteHeader
