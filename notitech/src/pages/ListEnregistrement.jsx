import './listEnregistrement.css';
import NavBar from '../components/NavBar';
import Header from '../components/Header';
import RecordsList from '../components/RecordsList';

const ListEnregistrement = () => {
  return (
    <>
    <NavBar />
    <Header title1={"Liste des enregistrements"} title2={"Noticom"} title3={"Holding"} />
    <RecordsList />
    </>
  )
}

export default ListEnregistrement