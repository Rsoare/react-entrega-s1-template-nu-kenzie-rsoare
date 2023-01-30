import { useState } from "react"

import { DashboardPage } from "./pages/DashboardPage"
import { LandingPage } from "./pages/LandingPage"

import "./style/index.css"

function App() {
   const [changePage, setChangePage] = useState(false)
   const [darkMode, setDarkMode] = useState(false)

   return (
      <div className={ darkMode ? ("darkMode"):("")}>
         {changePage ? (
         <DashboardPage setChangePage={setChangePage} setDarkMode={setDarkMode} darkMode = {darkMode}/>
         ) : (
         <LandingPage setChangePage={setChangePage} />
         )}
      </div>
   )
}

export default App;
