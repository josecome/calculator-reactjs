import { useState, useEffect } from 'react';
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
  useEffect(() => {
       //console.log("nmbr: " + nmbr)
       if(String(nmbr) === "NaN" || String(nmbr) === "Infinity") {
          alert("Any number can't divide zero!");
       }
  }, [nmbr])

  let r = 0;
  const addNmber = (e) => {
    var targetedVal = e.target.innerHTML;
    if("=" === targetedVal){
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
    if (!["=", "/", "+", "-", "x"].includes(targetedVal)){ 
     setNmbr("" + nmbr + targetedVal);
     console.log("N: " + nmbr)
    } else {
     prevnmbr = nmbr; 
     setNmbr('');
     setLastop(targetedVal);
     console.log("O: " + prevnmbr + ',' + targetedVal)
    }
  };
  const clean_screen = () => {
     prevnmbr = '';
     setNmbr('');
     setLastop('NA');
 }; 
 const buttons_in_array = [[7, 8, 9, "/"], [4, 5, 6, "x"],[1, 2, 3, "-"], [0, ".", "=", "+"]];
 return (
    <div style={{margin: 'auto' , width: '50%'}}>
         <table>
         <tbody>
            <tr>
            <td colSpan="3">
                    <div id="lbl">
                        <label>{nmbr}</label>
                    </div>                    
                </td>
                <td>
                    <button className="btn_clean" style={styles.btn_clean} onClick={clean_screen}>C</button>
                </td>
            </tr>
            {
            buttons_in_array.map((rows) => ( 
            <tr key={buttons_in_array.indexOf(rows)}>
              {
                rows.map((value) => ( 
                <td key={rows.indexOf(value)}>
                    <button onClick={addNmber}>{ value }</button>
                </td>                    
                 ))   
                }
            </tr>
            ))
            }
            </tbody>
         </table>        
    </div>
  ); 
}

export default Calculator