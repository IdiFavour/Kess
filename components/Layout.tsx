import Navbar from "./Navbar";
const Layout = ({children}: any) => {
    const navLink: any = [
      {
        link: "/",
        label: "Home",
      },
      {
        link: "",
        label: "About",
      },
      {
        link: "",
        label: "Services",
      },
      {
        link: "/contact",
        label: "Contact Us",
      },
    ];
    
    return ( 
        <>
            <Navbar links={navLink}/>
            {children} 
        </>
        
    );
}
 
export default Layout;