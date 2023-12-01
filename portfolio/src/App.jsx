import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePages from "./pages/HomePage";
import Navbar from "./components/Navbar"

const routes = [
  {
    path: "/",
    element: <HomePages />,
    name: "home",
  },
]

function App() {
  return (
    <div className=" dark:bg-[#25282a] bg-[#f9f9f9]">
      <Router>
        <Routes>
          {routes.map((routes) => {
            return (
              <Route
                key={routes.name}
                path={routes.path}
                element={routes.element}
              />
            );
          })}
        </Routes>
      </Router>
    </div>
  )
}

export default App
