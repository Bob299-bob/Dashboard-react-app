import "./Comp1.css";
import Sales from "./Sales";
import Graph from "./Graph";
import Forecast from "./Forecast";
function Comp1(){
    return <div>
        <h1>Data Visualization Board</h1>
        <div className="Flex">
            <div id="one">
                <Sales/>
            </div>
            <div id="two">
                <Graph/>
            </div>
            <div id="three">
                <Forecast/>
            </div>
        </div>
    </div>
}
export default Comp1;