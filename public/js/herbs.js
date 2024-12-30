document.getElementById('herbs-form').addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent form submission

    const category = document.getElementById('category').value;

    if (!category) {
        alert('Please select a category.');
        return;
    }

    try {
        // Fetch herbs based on the selected category
        const response = await fetch(`/api/herbs?category=${encodeURIComponent(category)}`);
        const herbs = await response.json();

        // Display herbs
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
            // Create list item for each herb
            const listItem = document.createElement('li');
            listItem.style.display = 'flex';
            listItem.style.alignItems = 'center';
            listItem.style.marginBottom = '10px';

            // Herb text
            const herbText = document.createElement('div');
            herbText.style.flex = '1';
            herbText.innerHTML = `<strong>${herb.name}</strong>: ${herb.benefits}`;

            // Pin button
            const pinButton = document.createElement('button');
            pinButton.textContent = 'Pin';
            pinButton.style.marginLeft = '10px';

            // Add event listener for pinning
            pinButton.addEventListener('click', async () => {
                try {
                    const pinResponse = await fetch('/favorites', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ name: herb.name, usage: herb.benefits }),
                    });

                    if (pinResponse.ok) {
                        alert(`${herb.name} pinned successfully!`);
                    } else {
                        alert('Failed to pin herb.');
                    }
                } catch (err) {
                    console.error('Error pinning herb:', err);
                }
            });

            // Append the text and button to the list item
            listItem.appendChild(herbText);
            listItem.appendChild(pinButton);

            // Add the list item to the results list
            resultsList.appendChild(listItem);
        });
    } else {
        resultsList.innerHTML = '<li>No herbs found for this category.</li>'
    }
}

