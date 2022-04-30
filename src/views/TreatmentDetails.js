export function TreatmentDetails(id) {

    const section = document.createElement('section');

    section.innerHTML = `
        <div class="divTreatmentDetails">
        <h2>Informacja o zabiegu</h2>
        <p>Loading...</p>
        </div>
    `;

    fetch(`http://localhost:3000/treatments/${id}`)
        .then(response => response.json())
        .then(treatment => {
            const article = document.createElement('article');

            article.innerHTML = `
                <h3>${treatment.name}</h3>
                <p>partia ciała: ${treatment.area}</p>
                <p>⏱ ${treatment.time} min</p>
                <p>
                    <strong>${treatment.price.toFixed(2)} PLN</strong>
                </p>
            `;

            section.querySelector('p').remove();
            section.append(article);
        });

    return section;
}