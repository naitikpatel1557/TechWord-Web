import React from 'react'

export default function About(props) {

    // Enable Dark Mode using useState hook
    // const [myStyle, setMyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white',
    //     border: '1px solid white'
    // });

    let myStyle = {
        color: props.mode === 'dark' ? 'white' : 'black',
        backgroundColor: props.mode === 'dark' ? 'rgb(33, 37, 41)' : 'white',
        border: '1px solid white'
    };

    return (
        <div className="container" style={myStyle}>
            <h2 className='my-3'>About Our Tool</h2>
            <div className="accordion" id="accordionExample">

                {/* Item #1 */}
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <strong>100% Client-Side Privacy</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" style={myStyle} aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            Unlike other online tools, we respect your data. We do not send your text to any server. All text manipulation happens strictly within your browser (Client-side), ensuring that your personal information or sensitive text remains private and secure on your device.
                        </div>
                    </div>
                </div>

                {/* Item #2 */}
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <strong>Instant Text Transformations</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" style={myStyle} aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            Time is money. Whether you need to fix a caps-lock error, format a title for a blog post, or clean up messy code, our algorithms process your text in milliseconds. Experience real-time conversion without page reloads or lag.
                        </div>
                    </div>
                </div>

                {/* Item #3 */}
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <strong>Universal Compatibility</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" style={myStyle} aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            We believe tools should be accessible everywhere. This application is built with a responsive framework that adapts to any screen size. It works seamlessly on Google Chrome, Safari, Firefox, and Edge, whether you are on a desktop, tablet, or mobile phone.
                        </div>
                    </div>
                </div>
            </div>

            
        </div>
    )
}
