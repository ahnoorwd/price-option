import { useState } from "react";
import Link from "../../../link/Link";
import { MdOutlineMenu} from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
const Mynavbar = () => {
  const [open,Setopen]=useState([]);

    const routes = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'Services', path: '/services' },
        { id: 3, name: 'Text', path: '/text' },
        { id: 4, name: 'Contact', path: '/contact' },
        { id: 5, name: 'About', path: '/about' },
      ];
      
      
      
    return (
        <nav >
            <div className="md:hidden text-3xl" onClick={()=>Setopen(!open)}>{
              open===true?<RxCross2></RxCross2>:<MdOutlineMenu  className=""></MdOutlineMenu>
              }
            
            </div>
            <ul className={`md:flex md:static absolute duration-1000 ${open ? 'top-10' : '-top-60'}`}>
            {
              routes.map(route=><Link key={route.id} route={route}></Link>)  
            }
            </ul>
        </nav>
    );
};

export default Mynavbar;