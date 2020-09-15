import React from "react"
import '../../static/styles.css'
import Layout from "../components/layout"
import * as hq from 'hue-queue'

export default class RandomPalette extends React.Component {
  constructor() {
    super();

    this.state = {
      pal: this.getRandomPal(),
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
          <p>Background: <span className='pal-span-sub'>{this.state.pal.background}</span></p>
          <p>Stroke: <span className='pal-span-sub'>{this.state.pal.stroke}</span></p>
        </div>

        <p>To use this palette in a project:</p>
        <pre>
          <code>
          import * as hq from hue-queue;
          <br />< br />
          const pal = hq.get('{this.state.pal.name}');
          </code>
        </pre>
        <p></p>
      </Layout>
    )
  }
}