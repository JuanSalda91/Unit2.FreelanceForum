// 1: Predefined freelancers array
const freelancers = [
    { name: "Alice", occupation: "Writer", price: 30 },
    { name: "Bob", occupation: "Teacher", price: 50 },
    { name: "Carol", occupation: "Programmer", price: 70 },
    { name: "Juan", occupation: "Software Developer", price: 65 },
    { name: "Andrea", occupation: "Consultant", price: 60 },
    { name: "Luis", occupation: "Data Analyst", price: 40 },
    { name: "Jhon", occupation: "Teacher", price: 45 },
    { name: "Alex", occupation: "Accountant", price: 50 },
    { name: "Grace", occupation: "Photographer", price: 35 },
    { name: "Jacob", occupation: "Driver", price: 45 },
    { name: "Ethan", occupation: "Web Developer", price: 75 },
    { name: "Bill", occupation: "Graphic Designer", price: 65 },
    { name: "Alex", occupation: "Video Editing", price: 70 },
    { name: "Maria", occupation: "Translator", price: 55 },
    { name: "Tom", occupation: "Virtual Assistant", price: 50 },
];

//2: Initialize displayed freelancers with the first two from the array
const displayedFreelancers = [freelancers[0], freelancers[1]];

//3: Function to calculate average starting price
function calculateAveragePrice() {
    let totalPrice = 0;
    for (let freelancer of displayedFreelancers) {
        totalPrice += freelancer.price;
    }
    return (totalPrice / displayedFreelancers.length).toFixed(2); // Rounded to two decimals
}

//4: Function to display freelancers on the page
function renderFreelancers() {
    // Get references to the HTML elements
    const freelancerList = document.querySelector("#freelancers");
    const averagePriceElement = document.querySelector("#average");

    // Clear the list before updating
    freelancerList.innerHTML = "";

    // Add each freelancer to the list
    for (let freelancer of displayedFreelancers) {
        const listItem = document.createElement("li");
        listItem.textContent = `${freelancer.name}, ${freelancer.occupation} - Starting Price: $${freelancer.price}`;
        freelancerList.appendChild(listItem);
    }

    // Update the average price
    averagePriceElement.textContent = calculateAveragePrice();
}

//5: Function to add a new random freelancer
function addRandomFreelancer() {
    const randomIndex = Math.floor(Math.random() * freelancers.length);
    const randomFreelancer = freelancers[randomIndex];
    displayedFreelancers.push(randomFreelancer);
    renderFreelancers();
}

//6: Set an interval to add a new freelancer every few seconds
setInterval(addRandomFreelancer, 3000);

//7: Initial render of the freelancers
renderFreelancers();
