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
 const factorial = (y) => {var f = 1; for(var i = y; i >= 1; i--){f = f * i;/* console.log(i); */} return f},
 const calc_factorial = (n) => {
     return n > 1 ? this.factorial(n) : n;
 };
 const ExponetialOfNumber = (v1, v2) => {
    var v_result = 1; 
    for(var i = 0; i < Number(v2); i++){
        v_result = v_result * v1; 
    }
    return v_result;
 };
 const buttons_in_array = [[7, 8, 9, "/", "sin", "Pi"], [4, 5, 6, "x", "cons", "e"],[1, 2, 3, "-", "log", "Exp"], [0, ".", "=", "+", "ln", "x!"]];
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
            {
            buttons_in_array.map((rows) => ( 
            <tr>
                {
                 rows.map((value) => ( 
                <td>
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