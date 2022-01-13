import React, {useState} from 'react';

function Fpage(){

    let [numDD1, setDate1] = useState(null);
    let [numDD2, setDate2] = useState(null);
    let [numMM1, setMonth1] = useState(null);
    let [numMM2, setMonth2] = useState(null);
    let [numYY1, setYear1] = useState(null);
    let [numYY2, setYear2] = useState(null);
    let [numAmt, setPri] = useState(null);


    let [total, setTotal] = useState(null);

    function calculateTotal(eve) {
        eve.preventDefault();

          
        let DD = ((numDD1 - numDD2) < 0) ? (numDD1 - numDD2) * -1 : (numDD1 - numDD2);
        let MM= ((numMM1 - numMM2) < 0) ? (numMM1 - numMM2) * -1 : (numMM1 - numMM2);
        let xYY=((numYY1 - numYY2) < 0) ? (numYY1 - numYY2) * -1 : (numYY1 - numYY2);
        let YY= (xYY)*360;
          
          if(numDD1<1 && numDD1>30 && numDD2<0 && numDD2>30 ){
              setTotal("Wrong Input");
          }else if(numAmt<=5000 && YY <=360){

               let princi = (numAmt/100)*3;
               let forMonth= (princi)*MM;//1120
               let forDays= (princi/30)*DD;//21.33
               setTotal(forMonth+forDays+numAmt);

          }else if(numAmt>5000 && YY <=360){
              let princi = (numAmt/100)*2;
              let forMonth= (princi)*MM;
              let forDays= (princi/30)*DD;
              setTotal(forMonth+forDays+numAmt);

          }else if( YY >360){
              let princi = (numAmt/100)*3;      
              let forYear=12*(numYY1 - numYY2)*princi;
              let total1=numAmt+forYear;
              
              let intPrinc=(total1/100)*3; 
              let forMonth= (intPrinc)*MM;
              let forDays= (princi/30)*DD;
              let total2=forMonth+forDays;

              setTotal(total1+total2);

         }
       
      }


    return(
        <div id="fpage">
            <form onSubmit={calculateTotal}>

               <h1>Interest Calculator</h1>
               <label>Realese Date:</label>
        <div className="real">
               <input className="inputs"
                      type="text"
                      onChange={(e) => setDate1(+e.target.value)}
                      value={numDD1}
                      placeholder="DD"/>

               <input className="inputs"
                      type="text" 
                      onChange={(e) => setMonth1(+e.target.value)}
                      value={numMM1}
                      placeholder="MM"/>
               
               <input className="inputs"
                      type="text" 
                      onChange={(e) => setYear1(+e.target.value)}
                      value={numYY1}
                      placeholder="YYYY"/>
         </div>
               <label>Loan Date:</label>
          <div  className="loan">               
               <input className="inputs"
                      type="text"
                      value={numDD2}
                      onChange={(e) => setDate2(+e.target.value)}
                      placeholder="DD"/>

               <input className="inputs"
                      type="text" 
                      value={numMM2}
                      onChange={(e) => setMonth2(+e.target.value)} 
                      placeholder="MM"/>


               <input className="inputs"
                      type="text"
                      value={numYY2}
                      onChange={(e) => setYear2(+e.target.value)}
                      placeholder="YYYY"/>
          </div>    


               
               <label>Principal:</label><br></br>
               <input className="pript"
                      type="text"
                      value={numAmt}
                      onChange={(e) => setPri(+e.target.value)}               
                      placeholder="Amount" /><br></br>


               <button className="btn" type="submit">Submit</button><br></br>
               <h2> {total}</h2>                   
            
            </form>            
        </div>
        
    );
}
export default Fpage;