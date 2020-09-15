import React from "react"
import '../../static/styles.css'
import Layout from "../components/layout"
import * as hq from 'hue-queue'
import { Link } from 'gatsby'

export default class AllPalettes extends React.Component {
  constructor() {
    super();
    const pals = this.getPalettes()

    this.state = {
      pals: pals,
      pal_size: 4
    }
  }

  getPalettes() {
    return hq.getAll();
  }

  render() {
    return (
      <Layout>
        <h2>All Palettes</h2>
        <ul className='hue-ul flex-ul'>
          {this.state.pals
            .map(filteredPal => (
              <li key={filteredPal.name}>
                <div style={{ marginBottom: `.5rem` }}>
                  <Link to={`/view-palette`} state={{ pal: filteredPal.name }}><h4>{filteredPal.name}:</h4></Link>
                </div>
                <div className='palette' style={{ backgroundColor: filteredPal.background }}>
                  {filteredPal.colors.map((s) => <div key={s} style={{ height: `70px`, border: `3px ${filteredPal.stroke} solid`, margin: `12px 0`, backgroundColor: s, position: 'relative', }}><span className='pal-span'>{s}</span></div>)}
                </div>
                <div className='li-detail'>
                  <p >Background: <span className='pal-span-sub'>{filteredPal.background}</span></p>
                  <p>Stroke: <span className='pal-span-sub'>{filteredPal.stroke}</span></p>
                </div>
              </li>
            ))}
        </ul>
      </Layout>
    )
  }
}