document.addEventListener('DOMContentLoaded', async function () {
    try {
        const response = await fetch('http://localhost:8000/api/problems');
        if (!response.ok) {
            throw new Error('Failed to fetch problems');
        }

        const problems = await response.json();
        console.log('Problems fetched:', problems); // Debug log

        const problemList = document.getElementById('problem-list');

        problems.forEach(problem => {
            const problemItem = document.createElement('div');
            problemItem.classList.add('problem-item');
            problemItem.innerHTML = `
                <h4>${problem.title}</h4>
                <p><strong>Difficulty:</strong> ${problem.difficulty}</p>
                <p>${problem.description}</p>
                <button onclick="window.location.href='compiler.html?problemId=${problem._id}'">Solve</button>
            `;
            problemList.appendChild(problemItem);
        });
    } catch (error) {
        console.error('Error fetching problems:', error);
    }
});
