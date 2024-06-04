import Header from '../components/Header';
import NavBar from '../components/NavBar';
import SimpleRecord from '../components/SimpleRecord';
import './ajoutSimple.css';

const AjoutSimple = () => {
  return (
    <>
      <NavBar />
      <Header title1={"Noticom Holding"} title2={" un enregistrement "} title3={" Simple "} />
      <SimpleRecord />
    </>

  )
}

export default AjoutSimple