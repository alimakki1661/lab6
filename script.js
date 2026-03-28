document.getElementById("loadBtn").addEventListener("click", loadFacts);

function loadFacts() {
    fetch("https://brianobruno.github.io/cats.json")
        .then(response => response.json())
        .then(data => {

            // sort by factId
            const sortedFacts = data.facts.sort((a, b) => a.factId - b.factId);

            // clear table before adding new rows
            const table = document.getElementById("factTable");
            table.innerHTML = "";

            // populate table
            sortedFacts.forEach(item => {
                table.innerHTML += `
                    <tr>
                        <td>${item.factId}</td>
                        <td>${item.text}</td>
                    </tr>
                `;
            });

            // update image
            document.getElementById("catImage").src = data.catPhoto;
        })
        .catch(error => {
            console.error("Error fetching API:", error);
        });
}
