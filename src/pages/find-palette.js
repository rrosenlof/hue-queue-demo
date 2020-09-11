import React from "react"
import '../../static/styles.css'
import Layout from "../components/layout"
import * as hq from 'hue-queue'

export default class FindPalette extends React.Component {
  constructor() {
    super();

    this.state = {
      pal: this.getRandomPal(),
      pal_size: 4
    }

    this.refreshPal = this.refreshPal.bind(this)
  }

  getRandomPal() {
    return hq.getRandom();
  }

  refreshPal() {
    this.setState({
      pal: this.getRandomPal()
    })
  }

  render() {
    return (
      <Layout>
        <h2>Random Palette</h2>
        <button onClick={this.refreshPal}>Refresh</button>
        <h4>{this.state.pal.name}:</h4>
        <div className='palette' style={{ backgroundColor: this.state.pal.background }}>
          {this.state.pal.colors.map((s) => <div key={s} style={{ height: `70px`, border: `3px ${this.state.pal.stroke} solid`, margin: `12px 0`, backgroundColor: s, position: 'relative', }}><span className='pal-span'>{s}</span></div>)}
        </div>
        <div className='li-detail'>
          <p >Background: {this.state.pal.background}</p>
          <p>Stroke: {this.state.pal.stroke}</p>
        </div>

        <p>Code here to copy to use this palette in project</p>
        <p>import * as hq from hue-queue</p>
        <p>const pal = hq.get('name-here')</p>
      </Layout>
    )
  }
}