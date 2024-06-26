/* eslint-disable no-undef */
import { Navbar, TextInput,Button } from "flowbite-react";
import { Link,useLocation } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";


export default function Header() {

    const path = useLocation().pathname;

  return (
    <Navbar className="border-b-2">  
    
        <Navbar.Brand>
            <Link to="/" className="text-xl font-bold">Grocery Shop</Link>
        </Navbar.Brand>
        <form>
            <TextInput type="text" placeholder='Search...' rightIcon={AiOutlineSearch} className="hidden lg:inline " />
        </form>
        <Button className="w-12 h-10 lg:hidden" color="gray" pill >
           <AiOutlineSearch/>
        </Button>
        <div className="flex gap-2 md:order-2">
            <Button  className="w-12 h-10 hidden sm:inline" color="grey" pill>
                <FaMoon/>
            </Button>
            <Link to="/signin" className="text-xl font-bold">
                <Button  gradientDuoTone='purpleToBlue' pill outline>
                    Sign In
                </Button>
            </Link>
            <Navbar.Toggle/>
        </div>
        <Navbar.Collapse>
                <Navbar.Link active={path === "/"}  as={'div'}>
                    <Link to="/" >
                        Home
                    </Link>
                </Navbar.Link>
                <Navbar.Link active={path === "/dashboard"} as={'div'}>
                    <Link to="/dashboard" >
                        Products
                    </Link>
                </Navbar.Link>
                <Navbar.Link active={path === "/cart"} as={'div'}>
                    <Link to="/cart" >
                        Cart
                    </Link>
                </Navbar.Link>
            </Navbar.Collapse>
     </Navbar>
  )
}
