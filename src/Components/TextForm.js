import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("Anand")
    
    const convertToUpperCase = () => {
      let newText = text.toUpperCase();
      setText(newText);
    };
    const textChangingOfTextArea = (event) =>{
      setText(event.target.value);
    };
    const convertToLowerCase = () =>{
        setText(text.toLowerCase())
    };
    const clearText = () => {
        setText('')
    };
    const convertToSantenceCase = () => {
        if (text === '')
           return;
        let newText = text[0].toUpperCase() + text.slice(1).toLowerCase();
        setText(newText)
    };
    const copyText = () => {
        navigator.clipboard.writeText(text)
    };
  return (
    <div className="container" style={{color: props.mode === 'light'? 'black': 'white'}}>
        <h1 className="my-2">{props.heading}</h1>
        <textarea value={text} className="form-control" placeholder="Leave a comment here" id="floatingTextarea" onChange={textChangingOfTextArea} rows="8" style={{color: props.mode === 'light'? 'black': 'white', backgroundColor: props.mode === 'light'? 'white': '#042743', borderWidth:'2px'}}></textarea>
        <button type="button" onClick={convertToUpperCase} className="my-2">Convert to Upper Case</button>
        <button type='button' onClick={convertToLowerCase} className="my-2 mx-2">Convert to Lower Case</button>
        <button type='button' onClick={convertToSantenceCase} className='my-2 mx-2'>Convert To Sentence Case</button>
        <button type='button' onClick={clearText} className='my-2 mx-2'>Clear Text</button>
        <button type='button' onClick={copyText} className='my-2 mx-2'>Copy to Clipboard</button>
        <h2 className='my-3'>Your Text Summary</h2>
        <label>{text.split(' ').length} words and {text.length} characters</label>
    </div>
  )
}
