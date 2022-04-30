

export function RoomDetails(id) {

    const section = document.createElement('section');

    section.innerHTML = `
    <div class="divRoomDetail">
    <h2>Informacje o pokoju</h2>
        <p>Loading...</p>
        </div>
    `;

    fetch(`http://localhost:3000/rooms/${id}`)
        .then(response => response.json())
        .then(room => {
            const article = document.createElement('article');

            article.innerHTML = `
                <h3>${room.name}</h3>
                <p>🛏️ ${room.beds}</p>
                <p>💁 ${room.guests}</p>
                <p>
                    <strong>${room.price.toFixed(2)} PLN</strong>
                </p>
            `;

            section.querySelector('p').remove();
            section.append(article);
        });

    return section;
}
