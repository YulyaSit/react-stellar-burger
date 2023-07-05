import ingredientsStyle from '../BurgerIngredients/BurgerIngredients.module.css'
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components'


function IngredientsList({ item }) {
    return (
    <div className={ingredientsStyle.item}>
        <img src={`${item.image}`} alt={`${item.name}`} className={ingredientsStyle.image} />
        <div><span className={`${ingredientsStyle.price} text text_type_digits-default`}>{item.price}</span><CurrencyIcon type="primary" /></div>
        <p className={`${ingredientsStyle.paragraph} text text_type_main-default`} >{item.name}</p>
        <Counter size="small" />
    </div>
    )
}

export default IngredientsList