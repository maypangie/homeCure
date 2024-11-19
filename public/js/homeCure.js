

const searchButton = document.getElementById("search-button");
const remediesList = document.getElementById("remedies-list"); 


document.getElementById('search-button').addEventListener('click', async () => {
    const symptomInput = document.getElementById('symptom-input');
    const symptom = symptomInput.value.trim().toLowerCase();

    if (!symptom) {
        alert('Please enter a symptom');
        return;
    }

    console.log('Searching for symptom:', symptom); // Debugging log

    try {
        const response = await fetch(`/api/remedies?symptom=${encodeURIComponent(symptom)}`);
        const remedies = await response.json();
        console.log('Remedies received:', remedies); // Debugging log

        displayRemedies(remedies);
    } catch (err) {
        console.error('Error fetching remedies:', err);
    }
});



function displayRemedies(remedies) {
    remediesList.innerHTML = ""; // Clear previous remedies

    if (remedies.length > 0) {
        remedies.forEach(remedy => {
            const listItem = document.createElement("li");
            listItem.innerHTML = `<strong>${remedy.name}</strong>: ${remedy.usage}`;
            remediesList.appendChild(listItem);
        });
    } else {
        remediesList.innerHTML = `<li>No remedies found for this symptom.</li>`;
    }
}
