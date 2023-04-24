import React,  {useState} from 'react'

export default function Textbox(props) {

  const first = ()=>{
    if(text === ''){
      props.showAlert('Write something' , 'danger')
    }
    else{
    console.log(text);
    let nowtext = text.toLowerCase().split(' ').map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ')

    setText(nowtext)
    props.showAlert('First letter is capitalized' , 'success')
  
  }

  }

  const handleONclicku = ()=>{
    if(text === ''){
      props.showAlert('Write something' , 'danger')
    }
    else{
    // console.log('button is click' + text);
    let nowtext = text.toLocaleUpperCase()
    setText(nowtext)
    props.showAlert('Converted to UpperCase' , 'success')
  }
  }
  const handleONclickl = ()=>{
    // console.log('button is click' + text);
    if(text === ''){
      props.showAlert('Write something' , 'danger')
    }
    else{
    let nowtext = text.toLocaleLowerCase()
    setText(nowtext)
    props.showAlert('Converted to LowerCase' , 'success')
  }
  }


  const handleONclickd = ()=>{
    if(text === ''){
      props.showAlert('Write something' , 'danger')
    }
    else{
    setText('')
    props.showAlert('Cleared Text' , 'success')
  }}

  
  
  const handleONchange = (event)=>{
    // console.log('on change');
    setText(event.target.value)
    // console.log(event.target.value);
    // props.showAlert('First letter is capitalized' , 'success')
  }

  //copytxt

  const copytxt = ()=>{
    if(text === ''){
      props.showAlert('Write something' , 'danger')
    }
    else{
    var textq = document.getElementById('mybox');
    textq.select();
    navigator.clipboard.writeText(textq.value)
    props.showAlert('Text copied on clipboard' , 'success')
  }
  }
  //remove sextra sace
  
 const space = ()=>{
  if(text === ''){
    props.showAlert('Write something' , 'danger')
  }
  else{
    let newtxt = text.split(/[ ]+/);
    setText(newtxt.join(" "))
    props.showAlert('Extra space removed' , 'success')

 }}


//dark mode


  
// dark mode finish


  const [text , setText] = useState('')
  return (
    <div  style={{color:props.mode === `dark`?`white`:`black` }}>
        <h1>{props.title}</h1>  
       
        <div className="mb-3"  style={{color:props.mode === `dark`?`white`:`black` }} >
             <textarea className="form-control"  style={{backgroundColor:props.mode === `dark`?`gray`:`white`, color: props.mode === `dark`?`white`:`black` }} value={text} onChange= {handleONchange}id="mybox" rows="9"></textarea>
        </div>
              <button className='btn btn-primary mx-1 my-1' onClick={handleONclicku}>Convert to Uppercase</button>
              <button className='btn btn-primary mx-1 my-1' onClick={handleONclickl}>Convert to Lowercase</button>

             
               <button className='btn btn-primary mx-1 my-1'  onClick={copytxt}>Copy</button>
               <button className='btn btn-primary mx-1 my-1'  onClick={space}>Remove extra space</button>
               <button className='btn btn-primary mx-1 my-1'  onClick={first}>First latter capital</button>
               <button className='btn btn-danger mx-1 my-1'  onClick={handleONclickd}>Clear text</button>
              
             




              <div className='containar my-2'style={{color:props.mode === `dark`?`white`:`black` }}>
             
                <h2>Your text summary</h2>
                <p>{text.split(" ").filter((element)=>{return element.length!=0}).length} Words and {text.length} characters</p>
              </div>
             
    </div>   
  )
}
