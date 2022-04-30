import { Button } from "../common/Button";
import { Rooms } from "./Rooms";
import { datepicker } from "js-datepicker";

export function Calendar() {
    const section = document.createElement('section');
    var today = new Date().toISOString().slice(0, 10);

    const navigateTo = (component) => {
        const navigateEvent = new CustomEvent('navigate', {
            detail: component
        });

        document.body.dispatchEvent(navigateEvent);
    };

    section.innerHTML = ` <div class="divCalendar">
    <input type="date" min=${today} />
    <input type="date" min=${today} />
    </div>`;


    const searchButton = Button({
        text: 'Wyszukaj',
        callback: () => {
            navigateTo(Rooms);
        }
    });
    searchButton.classList.add('buttonNav');
    section.append(searchButton);
    return section;
}

