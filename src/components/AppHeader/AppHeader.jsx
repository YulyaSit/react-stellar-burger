import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import headerStyles from './AppHeader.module.css'
function AppHeader() {
    return (
        <header className={headerStyles.header}>
            <nav className={headerStyles.navigation}>
                <ul className={headerStyles.list}>
                    <li className={headerStyles.listOne}><BurgerIcon type="primary" /><p className="text text_type_main-small">Конструтор</p></li>
                    <li className={headerStyles.listTwo}><ListIcon type="secondary" /><p className="text text_type_main-small text_color_inactive">Лента заказов</p></li>
                </ul>
                <Logo />
                <div className={headerStyles.profile}><ProfileIcon type="secondary" /><p className="text text_type_main-small text_color_inactive">Личный кабинет</p></div>
            </nav>
        </header>
    )
}

export default AppHeader