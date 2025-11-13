import "./Sales.css";
import Receipt from "./Reciept";
import Forecast from "./Forecast";
function Sales(){
    const Handle=()=>{
            console.log("Hello");
            let show=document.getElementById("Show")
            console.log(show);
            show.style.display="block";
     }
    return <div>
        <div id="Show"><Receipt/></div>
        <h2><button onClick={Handle} id="openbtn">Enter Sales Reports</button></h2>
        <div className="Div">
            <div id="main">
                $250
                <div id="div"></div>
                <div id="div"></div>
                <div id="div"></div>
                <div id="div"></div>
                <div id="div"></div>
                <div id="div"></div>
                $200
                <div id="div"></div>
                <div id="div"></div>
                <div id="div"></div>
                <div id="div"></div>
                <div id="div"></div>
                <div id="div"></div>
                $150
                <div id="div"></div>
                <div id="div"></div>
                <div id="div"></div>
                <div id="div"></div>
                <div id="div"></div>
                <div id="div"></div>
                $100
                <div id="div"></div>
                <div id="div"></div>
                <div id="div"></div>
                <div id="div"></div>
                <div id="div"></div>
                <div id="div"></div>
                $50
                <div id="div">
                    <div id="Css1" className="Hype1">
                    </div>
                </div>
                <div id="div">
                    <div id="Css1" className="Hype2">
                    </div>
                </div>
                <div id="div">
                    <div id="Css1" className="Hype3">
                    </div>
                </div>
                <div id="div">
                    <div id="Css1" className="Hype4">
                    </div>
                </div>
                <div id="div">
                     <div id="Css1" className="Hype5">
                    </div>
                </div>
                <div id="div">
                     <div id="Css1" className="Hype6">
                    </div>
                </div>
                $0
                <div >Jan</div>
                <div >Feb</div>
                <div >Mar</div>
                <div >Apr</div>
                <div >May</div>
                <div >June</div>
            </div>
        </div>
    </div>
}
export default Sales;