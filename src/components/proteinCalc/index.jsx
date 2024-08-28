// import { useLocation } from 'react-router-dom';

import { useEffect, useRef, useState } from 'react'

export default function Protein() {

    // const {state} = useLocation();
    // const {username, useremail} = state;

    const [dataGoal,setDataGoal]  = useState("");
    console.log("Fora: " + dataGoal)
    const dataWeight = useRef(0);
    const [result, setResult] = useState(0)
    const [grProtein, setGrProtein] = useState(0)

    // Average person: Recommended intake is about 0.8 grams per kilograms for most adults. (1 kg = 2.2 pounds)
    // Person with diabetes: Protein intake for a person with diabetes is also about 0.8 grams.
    // Build muscle: Recommended intake is 1-1.5 grams per kilogram. Adding more protein to your diet than this won’t help with muscle growth.
    // Weight loss: Recommended intake is 1-1.2 grams per kilogram.
    
    // Here we're goingo to use this function to define the amount of protein in gr for each Kg using the age, and then multiply it for the person's weight
    
    const defineProteinNeed = () => {
       
        if ( dataGoal == "" ) {
        return "";
       } else if ( dataGoal === "Average person" || dataGoal == "Person with diabetes" ) {
        return 0.8;
       } else if ( dataGoal === "Build muscle" ) {
        return 1.5;
       } else if ( dataGoal === "Weight loss" ) {
        return 1.2;
       } else {
        return "";
       }
    }

    const mudarTudo = (e) => {
        setDataGoal(e.target.value)
        console.log("Dentro: " + dataGoal)
    }
    
    
    const doProteinCalculate = () => {
        
        const proteinNeed = defineProteinNeed() // creating the variable with the input
        
        const weight = dataWeight.current.value //colect the person's weight
        
        const totalProteinNeed = (weight ? ((proteinNeed * weight)) : 0) // formula to give the amount of water in liters (ml of water per body kg x person's weight)
        
        // To see if the results and data colected is right
        console.log('Protein need in gr: ' + proteinNeed)
        console.log('Total Protein need: ' + totalProteinNeed)
        console.log('Goal: ' + dataGoal)
        console.log('Weight: ' + dataWeight.current.typeof)
        
        setResult(totalProteinNeed) // changing the state with the current results to display these information.
        setGrProtein(proteinNeed)
    }

    useEffect(() => {
        doProteinCalculate()  
    }, [dataGoal]
    )
    
    
    return (
        <main className='main-box flex-col items-center main-box-bg'>
            <div><h1 className='pt-10'>👷‍♂️💻I'M STILL WORKING ON THIS ONE...💻👷‍♂️</h1></div>
            <div className='main-box'>
                <div className='div-box'>
                    <form action="" className='form-box'>
                        <div className='flex flex-col gap-2 bg-blue-300 p-3 rounded-md shadow-2xl'>
                            <div className=''>
                                <h1>Select your goal:</h1>
                            </div>
                            <div className='flex gap-3'>
                                <label htmlFor="average">Average person</label>
                                <input type="radio" id="average" name="goal" value="Average person" onChange={mudarTudo} />
                            </div>
                            <div className='flex gap-3'>
                                <label htmlFor="diabetes">Person with diabetes</label>
                                <input type="radio" id="diabetes" name="goal" value="Person with diabetes" onChange={mudarTudo} /> 
                            </div>
                            <div className='flex gap-3'>
                                <label htmlFor="build">Build muscle</label>
                                <input type="radio" id="build" name="goal" value="Build muscle" onChange={mudarTudo} />
                            </div>
                            <div className='flex gap-3'>
                                <label htmlFor="loss">Weight loss</label>
                                <input type="radio" id="loss" name="goal" value="Weight loss" onChange={mudarTudo} />
                            </div>
                        </div>
                        <div className='mt-5'>
                            <label htmlFor="weight">Weight (in Kg)</label>
                        </div>
                        <div className='input-box'>
                            <input onChange={doProteinCalculate} type="number" id='weight' name='weight' placeholder='TYPE YOUT WEIGHT...' ref={dataWeight} className='water-inputs' />
                        </div>
                    </form>
                </div>
                <div className='div-box'>
                    { dataGoal.current === "" || dataGoal.current === 0 ?
                        <div> </div>
                        :
                        <div className='display-box'>
                            <span>You will need </span>
                            <span className='water-display'>{grProtein}</span>
                            <span>gr of protein per Kg</span>
                        </div>
                    }
                    <div></div>
                    {
                        dataWeight.current.value === "" || dataWeight.current === 0 || dataWeight.current.value == "" ?
                        <div> </div>
                        :
                        <div className='display-box'>
                            <span>Or,</span>
                            <span className='water-display'>{result}</span>
                            <span>Grams of protein per day</span>
                        </div>
                    }
                </div>
            </div>
        </main>
    )
}


// https://www.unitypoint.org/news-and-articles/how-much-protein-do-you-need-daily-ideal-protein-intake-for-muscle-growth-weight-loss-and-managing-chronic-conditions