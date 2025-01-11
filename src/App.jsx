import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Menu from "./pages/Menu/Menu";
import MenuList from "./pages/Menu/MenuList";
import { cafeMenu } from "./datas/cafeMenus";
import TimeLocation from "./pages/TimeLocation/TimeLocation";
import Contact from "./pages/Contact/Contact";
import { useEffect, useState } from "react";
import AboutUs from "./pages/AboutUs/AboutUs";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) document.body.style.overflow = "hidden";
    if (!isMenuOpen) document.body.style.overflow = "auto";
  }, [isMenuOpen]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          element={
            <Home setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
          }
        />
        <Route
          path="menu"
          element={
            <Menu setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
          }
        >
          <Route index element={<Navigate to="beverages" />} />

          <Route path="beverages" element={<MenuList menu={cafeMenu[0]} />} />

          <Route
            path="breakfast&snacks"
            element={<MenuList menu={cafeMenu[1]} />}
          />

          <Route
            path="lunch&lightmeals"
            element={<MenuList menu={cafeMenu[2]} />}
          />

          <Route
            path="desserts&extras"
            element={<MenuList menu={cafeMenu[3]} />}
          />
        </Route>

        <Route
          path="time&location"
          element={
            <TimeLocation
              setIsMenuOpen={setIsMenuOpen}
              isMenuOpen={isMenuOpen}
            />
          }
        />

        <Route
          path="contact"
          element={
            <Contact setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
          }
        />

        <Route
          path="about"
          element={
            <AboutUs setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
