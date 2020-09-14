import React from "react"
import '../../static/styles.css'
import Layout from "../components/layout"
import * as hq from 'hue-queue'
import { Link } from 'gatsby'

const ViewPalette = ({ location }) => {

    const props_pal = location.state.pal;
    let pal = hq.get(props_pal);

    if (pal) {
        return (
            <Layout>
                <h2>View Palette</h2>
                
                <h4>{pal.name}:</h4>
                <div className='palette' style={{ backgroundColor: pal.background }}>
                    {pal.colors.map((s) => <div key={s} style={{ height: `70px`, border: `3px ${pal.stroke} solid`, margin: `12px 0`, backgroundColor: s, position: 'relative', }}><span className='pal-span'>{s}</span></div>)}
                </div>
                <div className='li-detail'>
                    <p >Background: {pal.background}</p>
                    <p>Stroke: {pal.stroke}</p>
                </div>

                <p>To use this palette in a project:</p>
                <pre>
                    <code>
                        import * as hq from hue-queue;
                    <br />< br />
                    const pal = hq.get('{pal.name}');
                    </code>
                </pre>

                <Link to='/all-palettes' replace><p style={{ marginBottom: `2rem`}}>View All Palettes</p></Link>
            </Layout>
        )
    } else {
        return (
            <Layout>
                <h2>View Palette</h2>
                <p>Sorry, no palette found by that name...</p>
            </Layout>
        )
    }
}

export default ViewPalette