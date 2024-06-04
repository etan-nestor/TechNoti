import './ajoutDetail.css';
import NavBar from '../components/NavBar'
import Header from '../components/Header'
import DetailRecord from '../components/DetailRecord'

const AjoutDetail = () => {
  return (
    <>
    <NavBar />
    <Header title2={" un enregistrement "} title1={"Noticom Holding"} title3={" detaillé "} />
    <DetailRecord />
    </>
  )
}

export default AjoutDetail