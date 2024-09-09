import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {

    const [userName, setUserName] = useState("")
    const [userEmail, setUserEmail] = useState("")
    const [userSelection, setUserSelection] = useState("")

    const navigate = useNavigate();

    function handleSubmit() {
        if (userSelection === "/water-calc") {
            navigate("/water-calc", {state: {username: userName, email: userEmail}})
        } else {
            navigate("/protein-cal", {state: {username: userName, email: userEmail}})
        }
    }

    return (
        <main className='main-box flex-col items-center justify-start gap-[15vh] main-box-bg h-svh'>
            <div className='flex items-center justify-center h-fit pt-10'>
                <h1>Welcome to the water calculator!</h1>
            </div>
            <div className='div-box'>
                <form className='form-box' onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="username">Name</label>
                    </div>
                    <div className='input-box' required>
                        <input required type="text" id='username' name='username' placeholder='TYPE YOUR NAME...' className='water-inputs' onChange={(e) => setUserName(e.target.value)}/>
                    </div>
                    <div className='mt-5'>
                        <label htmlFor="email">E-mail</label>
                    </div>
                    <div className='input-box'>
                        <input required type="email" id='email' name='email' placeholder='TYPE YOUR EMAIL...' className='water-inputs' onChange={(e) => setUserEmail(e.target.value)}/>
                    </div>
                    <div className='mt-10 flex gap-4'>
                        <button type='submit' className='water-button' onClick={() => setUserSelection("/water-calc")}>Water calculation</button>
                        <button type='submit' className='water-button'onClick={() => setUserSelection("/protein-calc")}>Protein calculation</button>
                    </div>
                </form>
            </div>
        </main>
    )
}