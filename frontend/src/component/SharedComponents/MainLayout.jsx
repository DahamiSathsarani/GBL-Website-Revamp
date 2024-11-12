import NavBar from "./NavBar";
import Footer from "./Footer";

export default function MainLayout({children}){
return (<div className="w-full">
<NavBar/>
{children}
<Footer className="posi"/>
</div>)
}