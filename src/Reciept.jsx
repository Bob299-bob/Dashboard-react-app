import "./Reciept.css";
import Graph from "./Graph";
import Forecast from "./Forecast";
function Receipt(){
    const Handle2=()=>{
        console.log("hwll");
        document.querySelector("#Show").style.display="none";
            let total=0;
            let Alls=0;
            let m=0;
            let Allx=0;
            let Ally=0;
            let Allxy=0;
            for(let i=1;i<=6;i++){
            let yt1=parseInt(document.getElementById(`O${i}`).value);
            if(yt1<260){
            let div=document.querySelector(`.Hype${i}`);
            div.style.height=`${yt1}px`;
            let yt2=document.getElementById(`per${i}`);
            if(yt1<40){
                yt2.style.height=`40px`;
            }
            else if(yt1<=140){
                yt2.style.height=`${yt1}px`;
            }
            else{
                yt2.style.height=`140px`;
            }
            total=parseInt(total+yt1);
            console.log(total);    
            }
            else{
                alert("Please Enter Value between 0$ to 260$");
                break;
            }
            }
            console.log(total);
            for(let y=1;y<=6;y++){
                let T1=parseInt(document.getElementById(`O${y}`).value);
                let yt3=(T1/total)*360;
                console.log(total);
                console.log(yt3);
                let T2=document.getElementById(`per${y}`);
                let yt4=document.getElementById("Total");
                yt4.innerHTML=`Pie Chart :- Total sale Value=${total}`;
                T2.innerHTML=`${yt3}\nDegree`;
            }
              for(let x=1;x<=6;x++){
            let z=parseInt(document.getElementById(`O${x}`).value);
                //console.log(z);
                 m=x*z;
                //console.log(m);
                 Alls=Alls+x*x;
                //console.log(Alls);
                Allx=Allx+x;
                //console.log(Allx);
                Ally=Ally+z;
                //console.log(Ally);
                Allxy=Allxy+m;
              }//console.log(Allxy);
             let b=((6*Allxy)-(Allx*Ally))/((6*Alls)-(Allx*Allx));
                console.log(`B:-${b}`);
              let a=(Ally-(b*Allx))/6;
              console.log(`A:-  ${a}`);
              //Forecast Eqution y=a+bx;
              for(let k=1;k<=6;k++){
             let kat=a+(b*k);
             let  yt6=document.getElementById(`Fore${k}`);
             yt6.innerHTML=`${kat} $`;
              }
              for(let q=1;q<=6;q++){
                let Bob1=parseInt(document.getElementById(`O${q}`).value);    
                let F=(Bob1*100)/250;
                let Bob2=document.getElementById(`fill${q}`);
                Bob2.innerHTML=`${F}%`;
  }

    }
    return <div className="Showdata">
        <label>Jan</label>
        <input type="text" placeholder="Enter Sale Price $" id="O1"/><br></br>
        <label>Feb</label>
        <input type="text" placeholder="Enter Sale Price $" id="O2"/><br></br>
        <label>Mar</label>
        <input type="text" placeholder="Enter Sale Price $" id="O3"/><br></br>
        <label>Apr</label>
        <input type="text" placeholder="Enter Sale Price $" id="O4"/><br></br>
        <label>May</label>
        <input type="text" placeholder="Enter Sale Price $" id="O5"/><br></br>
        <label>June</label>
        <input type="text" placeholder="Enter Sale Price $" id="O6"/><br></br>
        <button onClick={Handle2} id="closebtn">Close</button>
    </div>
}
export default Receipt;