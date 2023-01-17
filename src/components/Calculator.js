import { useState, useEffect } from 'react'
//import Button from './Button'


const Calculator = () => {
  const [prevnmbr, nmbr] = useState(0)
  return (
    <div>
         <table>
            <tr>
            <td colSpan="3">
                    <div id="lbl">
                        <label></label>
                    </div>                    
                </td>
                <td>
                    <button class="btn_clean" onClick="clean_screen()">C</button>
                </td>
            </tr>
            <tr>
                <td>
                    <button onClick="addNmber()">7</button>
                </td>
                <td>
                    <button onClick="addNmber()">8</button>
                </td>
                <td>
                    <button onClick="addNmber()">9</button>
                </td>
                <td>
                    <button class="oper" onClick="addNmber()">/</button>
                </td>
            </tr>
            <tr>
                <td>
                    <button onClick="addNmber()">4</button>
                </td>
                <td>
                    <button onClick="addNmber()">5</button>
                </td>
                <td>
                    <button onClick="addNmber()">6</button>
                </td>
                <td>
                    <button class="oper" onClick="addNmber()">x</button>
                </td>
            </tr>
            <tr>
                <td>
                    <button onClick="addNmber()">1</button>
                </td>
                <td>
                    <button onClick="addNmber()">2</button>
                </td>
                <td>
                    <button onClick="addNmber()">3</button>
                </td>
                <td>
                    <button class="oper" onClick="addNmber()">-</button>
                </td>
            </tr>
            <tr>
                <td>
                    <button onClick="addNmber()">0</button>
                </td>
                <td>
                    <button onClick="addNmber()">.</button>
                </td>
                <td>
                    <button class="oper2" onClick="addNmber()">=</button>
                </td>
                <td>
                    <button class="oper" onClick="addNmber()">+</button>
                </td>
            </tr>
         </table>
        
    </div>
  )
}


export default Calculator