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
         } else if(lastop === "exp"){
            setNmbr(ExponetialOfNumber(prevnmbr, nmbr));
         } else if(lastop === "sin"){
            setNmbr(calculateSinCosTan('sin', prevnmbr));
         } else if(lastop === "cos"){
            setNmbr(calculateSinCosTan('cos', prevnmbr));
         } else if(lastop === "tan"){
            setNmbr(calculateSinCosTan('tan', prevnmbr));
         } 
     }
     prevnmbr = '';
     return;
    }
    if("x!" === e.target.innerHTML){
      console.log("Value: " + nmbr)
      setNmbr(calc_factorial(nmbr));
      console.log("Value2: " + nmbr)
      return;
    } else if(e.target.innerHTML === "pi") {
          setNmbr("" + 3.141592653589793238);             
    } else if(e.target.innerHTML === "e") {
          setNmbr("" + 2.7182818);             
    } else if (!["=", "/", "+", "-", "x", "exp", "sin", "cos", "tan"].includes(e.target.innerHTML)){ 
        setNmbr("" + nmbr + e.target.innerHTML);
    } else {
        if(e.target.innerHTML === "pi" || e.target.innerHTML === "e") {
            return;
        }
        prevnmbr = nmbr; 
        setNmbr('');
        setLastop(e.target.innerHTML);
    }
  };
  const clean_screen = () => {
     prevnmbr = '';
     setNmbr('');
     setLastop('NA');
 }; 
 const factorial = (y) => {var f = 1; for(var i = y; i >= 1; i--){f = f * i;/* console.log(i); */} return f};
 const calc_factorial = (n) => {
     return n > 1 ? factorial(n) : n;
 };
 const ExponetialOfNumber = (v1, v2) => {
    var v_result = 1; 
    for(var i = 0; i < Number(v2); i++){
        v_result = v_result * v1; 
    }
    return v_result;
 };
 const calculateSinCosTan = (oper, value) => {
  if (value > 90) {
      value = value % 90; 
  }
  var _30 = sin_cos_tan_notable_values[0];
  var _45 = sin_cos_tan_notable_values[1];
  var _60 = sin_cos_tan_notable_values[2];
  
  if(value === 30) {
    if(oper === "sin") { return _30[1]} 
    else if(oper === "cos") {return _45[2]} 
    else if(oper === "tan") {return _60[3]}
  } else if(value === 45) {
    if(oper === "sin") { return _30[1]} 
    else if(oper === "cos") {return _45[2]} 
    else if(oper === "tan") {return _60[3]}
  } else if(value === 60) {
    if(oper === "sin") { return _30[1]} 
    else if(oper === "cos") {return _45[2]} 
    else if(oper === "tan") {return _60[3]}
  }   
  return value;
};
 const buttons_in_array = [[7, 8, 9, "/", "sin", "pi"], [4, 5, 6, "x", "cos", "e"],[1, 2, 3, "-", "log", "exp"], [0, ".", "=", "+", "ln", "x!"]];
 const sin_cos_tan_notable_values = [[30, 0.5, 0.866, 0.5773], [45, 0.707, 0.707, 1], [60, 0.866, 0.5, 1.732]];
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