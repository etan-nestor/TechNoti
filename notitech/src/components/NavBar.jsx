import ListItems from "./ListItems";
import menuItems from "../data/menuItems";
import './navBar.css';

const NavBar = () => {
  return (
    <nav className="mt-[3rem]">
        <ul className="flex justify-center items-center gap-5 listItems">
            {
                menuItems.map((item)=>(
                    <ListItems key={item._id} link={item.link} name={item.name} />
                ))
            }
        </ul>
    </nav>
  )
}

export default NavBar