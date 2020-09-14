import React from "react"
import { Link } from 'gatsby'

export default function Layout({ children }) {
  return (
    <div style={{ maxWidth: `1200px`, margin: `0 auto`, padding: `0 1.2rem` }}>
      <div className='layout-row'>
        <div className='layout-left'>
          <Link to='/'><h1>Hue Queue</h1></Link>
          <hr id='layout-hr'/>
          <Link to='/all-palettes'><h4>All Palettes</h4></Link>
          <Link to='/random-palette'><h4>Random Palette</h4></Link>
          <Link to='/find-palette'><h4>Find A Palette</h4></Link>
          <hr id='layout-hr'/>
          <a href='https://github.com/rrosenlof/hue-queue'><h5>GitHub Repo</h5></a>
          <a href='https://www.npmjs.com/package/hue-queue'><h5>NPM Package</h5></a>
          <Link to='/release-notes'><h5>Release Notes</h5></Link>

        </div>
        <div className='layout-right'>
      {children}</div>
      </div>
    </div>
  )
}