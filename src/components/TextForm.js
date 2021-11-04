import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUPClick= () => {
        setText(text.toUpperCase());
    }
    const handleLoClick= () => {
        setText(text.toLowerCase());
    }
    const handleClearClick= () => {
        setText('');
    }
    const handleOnChange=(event) => {
        setText(event.target.value);
    }
    const handleOnRemove=()=> {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }
    const handleOnCopy=() => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const [text, setText] = useState('');

    return (
        <>
        <div className="container" style={{color: props.mode==='light'?'#042743':'white'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='light'?'white':'#042743', color: props.mode==='light'?'#042743':'white'}} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUPClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-primary mx-1" onClick={handleOnCopy}>Copy Text</button>
            <button className="btn btn-primary mx-1" onClick={handleOnRemove}>Remove Extra Spaces</button>
        </div>
        <div className="container my-2" style={{color: props.mode==='light'?'#042743':'white'}}>
            <h2>Your Text Summary</h2>
            <p>{text === ""? 0 : text.split(' ').length} words, {text.length} characters</p>
            <p>{0.008 * (text === ""? 0 : text.split(' ').length)} Minutes to read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter Something in the textbox above to preview here"}</p>
        </div>
        </>
    )
}
