import { Button } from "../../components/ButtonChangerPage"
import style from "./style.module.css"

export const LandingPage = ({ setChangePage }) => {

   return (

      <main className={style.main__container}>

         <section className={style.section__infoPage}>

            <div>
               <img src="src/assets/Nu Kenzie.svg" alt="Logo Nu kenzie" />
               <h2 className="title one">Centralize o controle das suas finanças</h2>
               <p className="Headline">De forma rápida e segura</p>
            </div>

            <Button
               className={"button landing__page"}
               setChangePage={setChangePage}
               BooleanValue={true}
               text={"Iniciar"}
            />
         </section>

         <section className={style.section__Illustration}>
            <img src="src/assets/Illustration.svg" alt="ilustração da pagina" />
         </section>

      </main>
   )
}
