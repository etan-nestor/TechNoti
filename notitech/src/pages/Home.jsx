import Header from "../components/Header"
import NavBar from "../components/NavBar"
import Resume from "../components/Resume"
import ButtonNav from "../components/ButtonNav"


const Home = () => {
    return (
        <>
            <NavBar />
            <Header title1={"Bienvenue au Service Technique"} title2={"Noticom"} title3={"Holding"} />
            <Resume />
            <ButtonNav />
        </>
    )
}

export default Home