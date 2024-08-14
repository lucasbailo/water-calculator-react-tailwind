import { useRef, useState } from 'react'
import './App.css'

export default function Calculate() {
    const dataAge = useRef("");
    const dataWeight = useRef("");
    const [result, setResult] = useState('___')
    const [mlWater, setMlWater] = useState('___')

    const defineWaterNeed = () => {
        if (dataAge.current.value <= 17) {
            return 40;
        } else if (18 <= dataAge.current.value && dataAge.current.value < 55) {
            return 35;
        } else if (55 <= dataAge.current.value && dataAge.current.value < 66) {
            return 30
        } else if (66 <= dataAge.current.value) {
            return 25
        }
    }

    const doCalculate = (event) => {

        event.preventDefault()

        const weight = dataWeight.current.value
        const waterNeed = defineWaterNeed()


        const totalWaterNeed = ((waterNeed * weight) / 1000)

        console.log(waterNeed)
        console.log(totalWaterNeed)
        console.log(dataWeight)

        setResult(totalWaterNeed)
        setMlWater(waterNeed)

    }

    return (
        <div className='bg-gradient-to-t from-[#a6c1ee] to-[#ffffff] w-full h-screen flex flex-col gap-2 justify-center items-center'>
            <div>
                <form action="" className='flex flex-col gap-2 items-center'>
                    <div>
                        <label htmlFor="">Age</label>
                    </div>
                    <div>
                        <input onChange={doCalculate} type="number" placeholder='TYPE YOUR AGE...' ref={dataAge} className='bg-blue-300 rounded-full p-2 placeholder:text-cyan-100 text-sm text-blue-950 outline-blue-700 text-center'/>
                    </div>
                    <div>
                        <label htmlFor="">Weight</label>
                    </div>
                    <div>
                        <input onChange={doCalculate} type="number" placeholder='TYPE YOUT WEIGHT...' ref={dataWeight} className='bg-blue-300 rounded-full p-2 placeholder:text-cyan-100 text-sm text-blue-950 outline-blue-700 text-center' />
                    </div>
                </form>
            </div>
            <div>
                {dataAge.current != "" ? <span>You will need {mlWater} ml of water per Kg</span> : <span> </span>}
            </div>
            <div>
                {dataWeight.current != "" ? <span>Or, {result} Liters of water per day</span> : <span> </span>}
            </div>
        </div>
    )
}
