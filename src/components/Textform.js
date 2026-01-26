import React, { useState } from 'react'


export default function Textform(props) {
    // const [text, setText] = useState("Enter Text Here");  // text is the state variable, setText is the function to update the state variable, useState is a hook to manage state in functional components
    const [text, setText] = useState("");


    // Uppercase function
    const handleUpClick = () => {
        // console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase!", "Success");
    }

    // LowerCase function
    const handleLoClick = () => {
        // console.log("Uppercase was clicked");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase!", "Success!");

    }

    // ClearText function
    const handleClearText = () => {
        // console.log("ClearText was clicked");
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared!", "Success!");

    }

    // CopyText function
    const handleCopy = () => {
        // console.log("CopyText was clicked");
        let newText = text;
        navigator.clipboard.writeText(newText);
        props.showAlert("Text Copied!", "Success!");

    }

    //Handle Extra Spaces
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!", "Success!");

    }

    // To Change the text areas values
    const handleOnChange = (event) => {
        // console.log("On Change");
        setText(event.target.value);
        // props.showAlert("Changed!", "Success!");

    }

    return (
        <>
        <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
            <h2>{props.heading}</h2>
            <div className="mb-3">
                <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} rows="8" placeholder='Enter text Here'></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick} >Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick} >Convert to Lowecase</button>
            <button className="btn btn-primary mx-2 m-3" onClick={handleClearText} >Clear Text</button>
            <button className="btn btn-primary mx-2 m-3" onClick={handleCopy} >Copy Text</button>
            <button className="btn btn-primary mx-2" onClick={handleExtraSpaces} >Remove Extra Spaces</button>
        </div>
        <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
            <h2>Your Text Summary</h2>
            {/* <p><b>{text.split(" ").length}</b> words and <b>{text.length}</b> characters</p> */}
            <p><b>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length}</b> words and <b>{text.length}</b> characters</p>                                       {/* This line counts words and characters correctly without extra spaces */}
            <p><b>{0.008 * text.split(" ").length}</b> minutes to read</p>            
            
            <h3>Preview</h3>
            <p>{text.length > 0 ? text : "Enter text in the textbox above to preview it here."}</p>
        </div>
        </>
    )
}
