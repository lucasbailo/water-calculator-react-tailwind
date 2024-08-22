import { useLocation } from 'react-router-dom';

import { useRef, useState } from 'react'

export default function ProteinCalculate() {

    // const {state} = useLocation();
    // const {username, useremail} = state;

    const dataGoal = useRef("Lose Weight");
    const dataWeight = useRef(0);
    const [result, setResult] = useState(0)
    const [grProtein, setGrProtein] = useState(0)

    console.log(dataGoal)
    
    const doCalculate = (event) => {
        event.preventDefault() // prevent the submit default action
        const valueGoal = dataGoal.current.value // saving the age input to use later

        // Here we're goingo to use this function to define the amount of water in ml for each Kg using the age, and then multiply it for the person's weight
        const defineProteinNeed = () => {
           return 0.8
        }

        const weight = dataWeight.current.value //colect the person's weight
        const waterNeed = defineProteinNeed() // creating the variable with the input

        const totalWaterNeed = (weight ? ((waterNeed * weight)) : 0) // formula to give the amount of water in liters (ml of water per body kg x person's weight)

        // To see if the results and data colected is right
        console.log('Water need in ml: ' + waterNeed)
        console.log('Total Water need: ' + totalWaterNeed)
        console.log('Age: ' + dataGoal.current.value)
        console.log('Weight: ' + dataWeight.current.typeof)

        setResult(totalWaterNeed) // changing the state with the current results to display these information.
        setGrProtein(waterNeed)
    }

    return (
        <main className='main-box flex-col items-center main-box-bg'>
            <div><h1 className='pt-10'>👷‍♂️💻I'M STILL WORKING ON THIS ONE...💻👷‍♂️</h1></div>
            <div className='main-box'>
                <div className='div-box'>
                    <form action="" className='form-box'>
                        <div>
                            <label htmlFor="goal">Goal</label>
                        </div>
                        <div className='input-box'>
                            <input onChange={doCalculate} type="text" id="goal" name='goal' placeholder='TYPE YOUR GOAL...' ref={dataGoal} value="LOSE WEIGHT" className='water-inputs' />
                        </div>
                        <div className='mt-5'>
                            <label htmlFor="weight">Weight</label>
                        </div>
                        <div className='input-box'>
                            <input onChange={doCalculate} type="number" id='weight' name='weight' placeholder='TYPE YOUT WEIGHT...' ref={dataWeight} className='water-inputs' />
                        </div>
                    </form>
                </div>
                <div className='div-box'>
                    { dataGoal.current.value === "" || dataGoal.current === 0 ?
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

// https://www.researchgate.net/publication/303535135_A_fuzzy_recommendation_system_for_daily_water_intake
// https://www.tuasaude.com/beber-agua/
