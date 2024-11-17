import NavBar from "./NavBar";
import Footer from "./Footer";

export default function MainLayout({ children }) {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
