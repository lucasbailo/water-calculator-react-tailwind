// import CatImg from '../images/hire-me.jpg'

export default function AboutUs() {
    return (
        <main className="main-box p-5 main-box-bg">
            {/* <img src={CatImg} alt="" /> */}
            <ul className='flex flex-col items-center justify-center h-full text-xl underline animate-bounce gap-2'>
                <li><a href="https://github.com/lucasbailo">My GitHub</a></li>
                <li><a href="https://www.instagram.com/lucassbailo/">Instagram - @lucassbailo</a></li>
                <li><a href="https://www.linkedin.com/in/lcsbailo">LinkedIn - Lucas Bailo</a></li>
            </ul>
        </main>
    )
}