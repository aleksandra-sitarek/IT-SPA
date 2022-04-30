import { cartManager } from "../cart/cart-manager";
import { Button } from "../common/Button";

export function Cart() {

    const section = document.createElement('section');
    section.innerHTML = `
    <div class="divCart"> 
    <h2>Twój koszyk</h2>
    </div>
    `;

    const table = document.createElement('table');
    table.classList.add('table');

    table.innerHTML = `
        <tr>
            <td>Usługa</td>
            <td>Cena</td>
            <td></td>
        </tr>
    `;

    const allItems = cartManager.getAllItems();

    let price = 0;
    const tableRows = allItems.map((item, index) => {
        const removeCartItemButton = Button({
            text: 'usuń',
            callback: () => {
                cartManager.removeItem(item);
                table.deleteRow(index);
                price = price - item.price;
            }
        });

        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${item.name}</td>
            <td>${item.price.toFixed(2)} PLN</td>
            <td></td>
        `;
        tr.lastElementChild.append(removeCartItemButton);
        return tr;
    });

    allItems.map(item => {
        price = price + item.price;
    })
    const summary = document.createElement('summary');
    summary.innerHTML = `
        <h2>Podsumowanie</h2>
        <p>Cena: ${price} PLN</p>
    `;

    table.append(...tableRows);
    section.append(table);
    section.append(summary);
    return section;

}
