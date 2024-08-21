import CatImg from '../images/hire-me.jpg'

export default function AboutUs() {
    return(
        <>
            <main className="main-box p-5">               
                <img src={CatImg} alt="hire me even if you are blind"/>
                <ul className='flex flex-col items-center justify-center h-full'>
                    <li><a href="https://github.com/lucasbailo">My GitHub</a></li>
                    <li><a href="https://www.instagram.com/lucassbailo/">Instagram - @lucassbailo</a></li>
                    <li><a href="https://www.linkedin.com/in/lcsbailo">LinkedIn - Lucas Bailo</a></li>
                </ul>
            </main>
        </>
    )
}