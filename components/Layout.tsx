import Navbar from "./Navbar";
const Layout = ({children}: any) => {
    const navLink: any = [
        {
            link: "/",
            label: "Home"
        },
        {
            link: "/services",
            label: "Services"
        },
        {
            link: "/about",
            label: "About",
        },
        {
            link: "/contact",
            label: "Contact Us",
        },
      ]
    
    return ( 
        <>
            <Navbar links={navLink}/>
            {children} 
        </>
        
    );
}
 
export default Layout;