import React,{useState} from 'react';
import "./Rate_Calc.css"

const Dollars = [
    100,500,900,1300,1700,2100,2500,2900,3300,3700,4100,4500,4900,
    5300,5700,6100,6500,6900,7300,7700,8100,8500,8900,9300,9700,10100,
    10500,10900,11300,11700,
]

const MyToyota = {
     
    Torque : 4000,
    Seconds : 4.5,

    Toyota : [
         
        4450,6250,8050,9850,9850,11650,13450,15250,1050,18850,20650,
        22450,24250,26050,27850,29650,31450,33250,35050,36850,38650,40450,
        42250,44050,45850,47650,49450,51250,53050,54850,56650
    ]


}

const MyVolvo = {

    Torque: 1000,
    Seconds: 5,

    Volvo : [
        1500,3500,5500,7500,9500,11500,13500,15500,17500,19500,21500,
        23500,25500,27500,29500,31500,33500,3550037500,39500,41500,43500,
        45500,47500,49500,51500,53500,55400,57500,59500
    ]
}

const MyFord = {

    Torque: 450,
    Seconds: 5.5,

    Ford: [
        1000,3200,5400,7600,9800,12000,14200,16400,18600,20800,23000,25200,27400,29600,31800,
        34000,36200,28400,40600,42800,45000,47200,49400,51600,53800,56000,
        58000,60400,62600,64600,64800
    ]
}


const ToyotaC_calc=(User_Input)=>{

    const Toyota_C = User_Input * MyVolvo.Seconds + MyVolvo.Torque;

    return Toyota_C;
}


const ToyotaD_calc=(User_Input)=>{

    const Toyota_D = User_Input * MyFord.Seconds + MyVolvo.Torque;

    return Toyota_D;
}



const Rate_Calc = () => {

    const [my_input,setmy_input] = useState(0);
    //const [Toyota_d,setTotyota_d] = useState(0);

    const [ToyotaBTotal, setToyotaBTotal] = useState(0);
    const [VolvoCTotal, setVolvoCTotal] = useState(0);
    const [FordDTotal, setFordTotal] = useState(0);
    const [bestApp, setBestApp] = useState("Yet");

    
    const ToyotaB_calc=(e)=>{

        const Toyota_B =my_input* MyToyota.Seconds + MyToyota.Torque;

        setToyotaBTotal(Toyota_B);
    }

    const FordD_calc=()=>{

        const Ford_D = my_input * MyFord.Seconds + MyFord.Torque;
    
        setFordTotal(Ford_D);
    }

    const VolvoC_calc=()=>{

        const Volvo_C= my_input* MyVolvo.Seconds + MyVolvo.Torque;

        setVolvoCTotal(Volvo_C)
    }


    const Comparism=()=>{

        if((ToyotaB_calc > VolvoC_calc)  && (ToyotaB_calc > FordD_calc)){
            setBestApp("Toyota")
        }

        else if((VolvoC_calc > ToyotaB_calc) && (VolvoC_calc > FordD_calc)){
            setBestApp("Volvo");
        }

        else if((FordD_calc > ToyotaB_calc) && (FordD_calc > VolvoC_calc)){
            setBestApp("Ford")
        }

        else{
            setBestApp("Yet to Compare the best App")
        }
    }


    return (
        <div className="calculator">
           <div className="calculator_header">
               <h1>
                   CALCULATOR
               </h1>
           </div>

           <div className="calculator_input">
               <div className="input_label">
                   <h2>Enter Number: </h2>
               </div>

               <div className="input_value">
                   <input 
                   type="number" 
                   name="my_input" 
                   value={my_input}
                   onChange={e => setmy_input(e.target.value)}
                   >
                   </input>
               </div>

                <div className="input_button">
                   <button 
                   className="calc_button"
                   onClick={()=>{
                       ToyotaB_calc();
                       VolvoC_calc();
                       FordD_calc();
                       Comparism();
                   }}
                   >
                       Check
                   </button>
               </div>
           </div>

           <div className="calculator_result">
               <div className="calculator_flex1">
                   <h3>
                      {my_input} 
                   </h3>
                   <h3>
                       App 
                   </h3>
                   <h3>
                       TOYOTA
                   </h3>
                   <h3>
                       VOLVO
                   </h3>
                   <h3>
                       FORD
                   </h3>

               </div>

               <div className="calculator_flex2">
                   <h3>
                        {ToyotaBTotal}.00
                   </h3>
                   <h3>
                       TOYOTA
                   </h3>
                   <h3>
                       ----
                   </h3>
                   <h3>
                       {ToyotaBTotal-VolvoCTotal}.00
                   </h3>
                   <h3>
                       {ToyotaBTotal-FordDTotal}.00
                   </h3>
               </div>

               <div className="calculator_flex3">
                   <h3>
                        {VolvoCTotal}.00
                   </h3>
                   <h3>
                       VOLVO
                   </h3>
                   <h3>
                       {VolvoCTotal-ToyotaBTotal}.00
                   </h3>
                   <h3>
                       ---
                   </h3>
                   <h3>
                       {VolvoCTotal-FordDTotal}.00
                   </h3>
               </div>

               <div className="calculator_flex4">
                    <h3>
                            {FordDTotal}.00
                    </h3>
                    <h3>
                        FORD
                    </h3>
                    <h3>
                        {FordDTotal-ToyotaBTotal}.00
                    </h3>
                    <h3>
                        {FordDTotal-VolvoCTotal}.00
                    </h3>
                    <h3>
                        --
                    </h3>
               </div>
           </div>

           <div className="calculator_bestapp">
               
               <h3>
               <span>The best App is </span> {bestApp}
               </h3>
           </div>
        </div>
    )
}

export default Rate_Calc;


