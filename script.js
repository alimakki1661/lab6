document.getElementById("loadBtn").addEventListener("click", loadFacts);

function loadFacts() {
    fetch("https://brianobruno.github.io/cats.json")
        .then(response => response.json())
        .then(data => {
            console.log(data); // ALWAYS inspect first

            // 1. Sort facts by factId
            const sortedFacts = data.facts.sort((a, b) => a.factId - b.factId);

            // 2. Populate table
            const table = document.getElementById("factTable");
            table.innerHTML = ""; // clear old data (important)

            sortedFacts.forEach(item => {
                const row = `
                    <tr>
                        <td>${item.factId}</td>
                        <td>${item.fact}</td>
                    </tr>
                `;
                table.innerHTML += row;
            });

            // 3. Update image
            document.getElementById("catImage").src = data.catPhoto;
        })
        .catch(error => {
            console.error("Error fetching API:", error);
        });
}
