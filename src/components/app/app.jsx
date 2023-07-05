import stylesApp from "./app.module.css";
import { data } from "../../utils/data";
import AppHeader from "../AppHeader/AppHeader";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
function App() {
  return (
    <>
    <AppHeader />
    <main className={stylesApp.main}>
      <div className={stylesApp.content}>
        <BurgerIngredients ingredientsBurger={data} />
      </div>    
    </main>
    </>
  );
}

export default App;
