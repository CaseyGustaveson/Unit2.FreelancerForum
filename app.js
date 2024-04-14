const listing = [
    {
        first:'John',
        job:'Engineer',
        pay:'$50'
    },
    {
        first:'Jane',
        job:'Artist',
        pay:'$30'
    },
    {
        first:'Michael',
        job:'Doctor',
        pay:'$70'
    },
    {
        first: "Alice",
        job: "Writer",
        pay: "$30",
    },
    {
        first: "Bob",
        job: "Teacher",
        pay: "$50",
    },
    {
        first: "Carol",
        job: "Programmer",
        pay: "$70",
    },
    {
        first: "James",
        job: "Barista",
        pay: "$12",
    },
];

// Function to calculate average starting price
function calculateAverageStartingPrice(listing) {
    let total = 0;
    for (const freelancer of listing) {
        const pay = parseInt(freelancer.pay.substring(1));
        total += pay;
    }
    const average = total / listing.length;
    if (isNaN(average)) {
        return 0;
    } else {
        return average.toFixed(2);
    }
}
// Function to render freelancers with a delay
function renderFreelancersWithDelay(listing, delay) {
    const freelancersTableBody = document.querySelector("#freelancersTableBody");
    freelancersTableBody.innerHTML = ""; // Clear the existing content

    let index = 0;
    const intervalId = setInterval(() => {
        if (index >= listing.length) {
            clearInterval(intervalId);
            const average = calculateAverageStartingPrice(listing); // Calculate average starting price
            const averagePriceElement = document.querySelector("#averagePrice");
            averagePriceElement.innerHTML = `<h2>The average price is $${average}</h2>`; // Display average starting price
            setTimeout(() => {
                renderFreelancersWithDelay(listing, delay); // Start over after a delay
            }, 5000); // Wait 5 seconds before starting over
            return;
        }

        const freelancer = listing[index];
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${freelancer.first}</td>
            <td>${freelancer.job}</td>
            <td>${freelancer.pay}</td>
        `;
        freelancersTableBody.appendChild(row);

        index++;
    }, delay);
}

// Render freelancers with a delay of 1 second between each
renderFreelancersWithDelay(listing, 1000);
