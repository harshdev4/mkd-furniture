import "./App.css";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer";
import AppContextProvider, { AppContext } from "../store/AppContext";
import { useEffect, useLayoutEffect, useState } from "react";
import PreLoader from "../components/PreLoader";
function App() {
  const [isLoaded, setLoaded] = useState(false);

  useEffect(() => {

    const preloadImages = async () => {
      const imageUrls = ['/img/big-hero.jpg', '/img/Director.jpg', '/img/1.webp', '/img/2.webp','/img/3.webp'];
      const imagePromises = imageUrls.map(url => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = url;
          img.onload = resolve;
          img.onerror = reject;
        });
      });


      await Promise.all(imagePromises);

      setTimeout(()=>{
        setLoaded(true);
      }, 2300);
    };

    preloadImages();

  },[]);


  return (
    <AppContextProvider>
      {isLoaded === true ? (
        <div className="bgColor">
          <Navbar />
          <Outlet />
          <Footer></Footer>
        </div>
      ) : (
        <PreLoader />
      )}
    </AppContextProvider>
  );
}

export default App;
