import { useRef, useState } from 'react'
import './App.css'

export default function Calculate() {
    const dataAge = useRef(0);
    const dataWeight = useRef(0);
    const [result, setResult] = useState(0)
    const [mlWater, setMlWater] = useState(0)

    console.log(dataAge)
    
    const doCalculate = (event) => {

        event.preventDefault()
        
        const valueAge = dataAge.current.value

        const defineWaterNeed = () => {
            if (valueAge == "" || valueAge === 0) {
                return 0;
            }
            else if (0 <= valueAge && valueAge <= 1) {
                return 140;
            }
            else if (2 <= valueAge && valueAge <= 3) {
                return 120;
            }
            else if (4 <= valueAge && valueAge <= 7) {
                return 95;
            }
            else if (8 <= valueAge && valueAge <= 9) {
                return 85;
            }
            else if (10 <= valueAge && valueAge <= 14) {
                return 65;
            }
            else if (15 <= valueAge && valueAge <= 17) {
                return 40;
            } else if (18 <= valueAge && valueAge < 55) {
                return 35;
            } else if (55 <= valueAge && valueAge < 66) {
                return 30;
            } else if (66 <= valueAge) {
                return 25;
            }
        }

        const weight = dataWeight.current.value
        const waterNeed = defineWaterNeed()

        const totalWaterNeed = (weight ? ((waterNeed * weight) / 1000) : 0)

        console.log('Water need in ml: ' + waterNeed)
        console.log('Total Water need: ' + totalWaterNeed)
        console.log('Age: ' + dataAge.current.value)
        console.log('Weight: ' + dataWeight.current.typeof)

        setResult(totalWaterNeed)
        setMlWater(waterNeed)
    }

    return (
        <main className='main-box'>
            <div className='div-box'>
                <form action="" className='form-box'>
                    <div>
                        <label htmlFor="">Age</label>
                    </div>
                    <div className='input-box'>
                        <input onChange={doCalculate} type="number" placeholder='TYPE YOUR AGE...' ref={dataAge} className='water-inputs' />
                    </div>
                    <div className='mt-5'>
                        <label htmlFor="">Weight</label>
                    </div>
                    <div className='input-box'>
                        <input onChange={doCalculate} type="number" placeholder='TYPE YOUT WEIGHT...' ref={dataWeight} className='water-inputs' />
                    </div>
                </form>
            </div>
            <div className='div-box'>
                { dataAge.current.value === "" || dataAge.current === 0 ?
                    <div> </div>
                    :
                    <div className='display-box'>
                        <span>You will need </span>
                        <span className='water-display'>{mlWater}</span>
                        <span>ml of water per Kg</span>
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
                        <span>Liters of water per day</span>
                    </div>
                }
            </div>
        </main>
    )
}

// https://www.researchgate.net/publication/303535135_A_fuzzy_recommendation_system_for_daily_water_intake
// https://www.tuasaude.com/beber-agua/
