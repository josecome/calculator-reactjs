import { useState } from 'react';
//import Button from './Button'
import "./style.css";

let prevnmbr = '0';
const Calculator = () => {
    const styles = {
        oper: {
          backgroundColor: "#A9A9A9",
        },
        oper2: {
          backgroundColor: "#0000FF",
          color: "white",
        },
        btn_clean: {
          backgroundColor: "#FF0000",
          color: "white",
       },
  };  
  const [nmbr, setNmbr] = useState('0');
  const [lastop, setLastop] = useState('NA');  
  let r = 0;
  const addNmber = (e) => {
    //console.log('L:' + lastop + ':');
    if("=" === e.target.innerHTML){
     if(lastop === "NA"){
         return;
     } else{
         if(lastop === "-"){    
            //console.log('' + prevnmbr + ',' + nmbr)        
            r = Number(prevnmbr) - Number(nmbr);
            setNmbr('' + r)
            //console.log('r: ' + r);            
         } else if(lastop === "+"){
            r = Number(prevnmbr) + Number(nmbr);
            setNmbr('' + r)
         } else if(lastop === "/"){
            r = Number(prevnmbr) / Number(nmbr);
            setNmbr('' + r)
         } else if(lastop === "x"){
            r = Number(prevnmbr) * Number(nmbr);
            setNmbr('' + r)
         }
     }
     prevnmbr = '';
     return;
    } 
    if (!("=/+-x").includes(e.target.innerHTML)){ 
     setNmbr("" + nmbr + e.target.innerHTML);
     console.log("N: " + nmbr)
    } else {
     prevnmbr = nmbr; 
     setNmbr('');
     setLastop(e.target.innerHTML);
     console.log("O: " + prevnmbr + ',' + e.target.innerHTML)
    }
  };
  const clean_screen = () => {
     prevnmbr = '';
     setNmbr('');
     setLastop('NA');
 }; 
 return (
    <div style={{margin: 'auto' , width: '50%'}}>
         <table>
         <tbody>
            <tr>
            <td colSpan="5">
                    <div id="lbl">
                        <label>{nmbr}</label>
                    </div>                    
                </td>
                <td>
                    <button className="btn_clean" style={styles.btn_clean} onClick={clean_screen}>C</button>
                </td>
            </tr>
            <tr>
                <td>
                    <button onClick={addNmber}>7</button>
                </td>
                <td>
                    <button onClick={addNmber}>8</button>
                </td>
                <td>
                    <button onClick={addNmber}>9</button>
                </td>
                <td>
                    <button className="oper" onClick={addNmber}>/</button>
                </td>
                <td>
                    <button className="oper" onClick={addNmber}>sin</button>
                </td>
                <td>
                    <button className="oper" onClick={addNmber}>Pi</button>
                </td>
            </tr>
            <tr>
                <td>
                    <button onClick={addNmber}>4</button>
                </td>
                <td>
                    <button onClick={addNmber}>5</button>
                </td>
                <td>
                    <button onClick={addNmber}>6</button>
                </td>
                <td>
                    <button className="oper" onClick={addNmber}>x</button>
                </td>
                <td>
                    <button className="oper" onClick={addNmber}>cons</button>
                </td>  
                <td>
                    <button className="oper" onClick={addNmber}>e</button>
                </td>              
            </tr>
            <tr>
                <td>
                    <button onClick={addNmber}>1</button>
                </td>
                <td>
                    <button onClick={addNmber}>2</button>
                </td>
                <td>
                    <button onClick={addNmber}>3</button>
                </td>
                <td>
                    <button className="oper" onClick={addNmber}>-</button>
                </td>
                <td>
                    <button className="oper" onClick={addNmber}>log</button>
                </td>
                <td>
                    <button className="oper" onClick={addNmber}>Exp</button>
                </td>                
            </tr>
            <tr>
                <td>
                    <button onClick={addNmber}>0</button>
                </td>
                <td>
                    <button onClick={addNmber}>.</button>
                </td>
                <td>
                    <button className="oper2" onClick={addNmber}>=</button>
                </td>
                <td>
                    <button className="oper" onClick={addNmber}>+</button>
                </td>
                <td>
                    <button className="oper" onClick={addNmber}>ln</button>
                </td>
                <td>
                    <button className="oper" onClick={addNmber}>x!</button>
                </td>
            </tr>
            </tbody>
         </table>        
    </div>
  ); 
}

export default Calculator