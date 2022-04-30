import { Home } from '../views/Home';
import { Rooms } from '../views/Rooms';
import { Button } from '../common/Button';
import { Cart } from '../views/Cart';
import { Treatments } from '../views/treatments';
import { Calendar } from '../views/Calendar';


const navigateTo = (component) => {
    const navigateEvent = new CustomEvent('navigate', {
        detail: component
    });

    document.body.dispatchEvent(navigateEvent);
};

const navItems = [
    { text: 'O nas', component: Home },
    { text: 'Pokoje', component: Rooms },
    { text: 'Zabiegi', component: Treatments },
    { text: 'Zarezerwuj', component: Calendar },
    { text: '🛒', component: Cart },
];

export function Nav() {
    const nav = document.createElement('nav');

    const buttons = navItems.map(navItem => {
        return Button({
            text: navItem.text,
            callback: () => {
                navigateTo(navItem.component);
            }
        });
    });

    nav.append(...buttons);

    return nav;
}
