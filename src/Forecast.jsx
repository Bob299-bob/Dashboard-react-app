import Receipt from "./Reciept";
import "./Forecast.css";
function Forecast(){
    return <div>
        <h3> Sales Projection</h3>
        <div id="mainly">
            <div id="submain"> 
                <table border={"1px solid black"} width={"100px"} cellPadding={"5px"}>
                    <tr>
                        <th>July</th>
                         <td id="Fore1"></td>
                     </tr>
                    <tr> 
                        <th>Aug</th>
                        <td id="Fore2"></td>
                    </tr>
                    <tr>
                        <th>Sep</th>
                        <td id="Fore3"></td>
                    </tr>
                    <tr>    
                        <th>Oct</th>
                        <td id="Fore4"></td>
                    </tr>
                    <tr>    
                        <th>Nov</th>
                        <td id="Fore5"></td>
                    </tr>
                    <tr>    
                        <th>Dec</th>
                        <td id="Fore6"></td>
                   </tr>
                </table>
            </div>
            <div id="submain" className="submainly">
                <h3>Sales Forecast</h3>
                It is a Process of estimating what future Sales may look like at your company .
                 
            </div>
        </div>
    </div>
}
export default Forecast;