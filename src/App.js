import Button from "./components/icon";
import { useEffect, useState, createContext } from "react";

export const ThemeContext = createContext();

function App() {
  let lighttheme = window.matchMedia("(prefers-color-scheme: light)")
    ? "light"
    : "dark";

  console.log("windowtheme", lighttheme);
  let existingtheme = localStorage.getItem("theme")
    ? localStorage.getItem("theme")
    : lighttheme;

  console.log("existingtheme", existingtheme);

  const [theme, setTheme] = useState(existingtheme);
  const [btntext, setBtntext] = useState(
    existingtheme === "light" ? "dark" : "light"
  );
  console.log("theme", theme);
  const togglevalue = () => {
    // console.log("app", e.target);
    if (theme === "light") {
      setTheme("dark");
      setBtntext("light");
    } else {
      setTheme("light");
      setBtntext("dark");
    }
    console.log("toggletheme", theme);
    // localStorage.setItem("theme", theme);
    // document.body.setAttribute("data-bs-theme", theme);
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.setAttribute("data-bs-theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ btntext, togglevalue }}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <Button />
          </div>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
