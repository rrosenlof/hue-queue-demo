import React from "react"

const Install = () => {
    return (
        <div>
            <p>To use this palette in a project:</p>
            <pre>
            <code>
            npm install hue-queue
            </code>
            </pre>
            <p>And in a .js file...</p>
            <pre>
            <code>
            import * as hq from 'hue-queue';
            <br />< br />
            <span style={{ color: `#6d9652`}}>// Get a palette by a name</span>
            <br />
            const pal = hq.get('fence');
            <br />< br />
            console.log(pal.colors);
            < br />
            <span style={{ color: `#6d9652`}}>// Will return: "['#2791BB', '#248170', '#E1B473', '#B7A477']"</span>
            <br />
            </code>
            </pre>
            
            
        </div>
    )
}

export default Install