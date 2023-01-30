import { Button } from "../ButtonChangerPage"
import { ButtonDarkMode } from "../ButtonDarkMode"
import style from "./style.module.css"
import nuKenzieWhite from "../../assets/Nu Kenzie.svg"
import nuKenzieBlack from "../../assets/Nu Kenzie black.svg"

export const Header = ({ setChangePage,setDarkMode,darkMode }) => {

   return (
      <div className={style.header__container}>

         {darkMode ? (<img src={nuKenzieWhite} alt="Logo Nu kenzie" />):
         (<img src={nuKenzieBlack} alt="Logo Nu kenzie" />)}
      

         <div className= {style.buttons__header}>
            <Button
               setChangePage={setChangePage}
               BooleanValue={false}
               text={"Inicio"}
               className ={"button header"}
            />

            <ButtonDarkMode 
            setDarkMode = {setDarkMode} 
            darkMode = {darkMode}
            />

         </div>

      </div>
   )
}
