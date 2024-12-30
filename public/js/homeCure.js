

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






// herbs data

document.getElementById('herbs-form').addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent form submission
  
    const category = document.getElementById('category').value;
  
    if (!category) {
      alert('Please select a category.');
      return;
    }
  
    try {
      const response = await fetch(`/api/herbs?category=${encodeURIComponent(category)}`);
      const herbs = await response.json();
  
      displayHerbs(herbs);
    } catch (error) {
      console.error('Error fetching herbs:', error);
    }
  });
  
  function displayHerbs(herbs) {
    const resultsList = document.getElementById('results-list');
    resultsList.innerHTML = ''; // Clear previous results
  
    if (herbs.length > 0) {
      herbs.forEach((herb) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<strong>${herb.name}</strong>: ${herb.benefits}`;
        resultsList.appendChild(listItem);
      });
    } else {
      resultsList.innerHTML = '<li>No herbs found for this category.</li>';
    }
  }
  




  // pin favorites

 












  