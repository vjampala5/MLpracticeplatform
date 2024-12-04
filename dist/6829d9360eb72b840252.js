
document.addEventListener('DOMContentLoaded', function () {
    const problemId = new URLSearchParams(window.location.search).get('problemId');

    // Check if the user is logged in
    const token = localStorage.getItem('token');
    const userEmail = localStorage.getItem('userEmail'); // Assume user email is stored on login

    if (!token || token === 'null' || token === 'undefined') {
        alert('You must be logged in to access this page. Please log in and try again.');
        return;
    }

    // Fetch problem details from the server
    loadProblemDetails(problemId);

    document.getElementById('run-code-btn').addEventListener('click', () => {
        // Double-check login status when running the code
        const tokenCheck = localStorage.getItem('token');
        if (!tokenCheck || tokenCheck === 'null' || tokenCheck === 'undefined') {
            alert('You must be logged in to run the code. Please log in and try again.');
            return;
        }

        if (!window.editor) {
            alert('The code editor is not fully loaded. Please refresh the page and try again.');
            return;
        }

        const userCode = window.editor.getValue().replace(/\s+/g, ' ').trim(); // Normalize user code

        // Find the current problem in the problemData array by matching the title
        const problemTitle = document.getElementById('problem-title').textContent;
        const currentProblem = problemData.find(problem => problem.title === problemTitle);

        if (currentProblem) {
            const solutionCode = currentProblem.solution.replace(/\s+/g, ' ').trim(); // Normalize solution code
            console.log('User Code:', userCode);
            console.log('Solution Code:', solutionCode);

            // Compare normalized user code with the solution
            if (userCode === solutionCode) {
                document.getElementById('output').textContent = currentProblem.sampleOutput;

                // Update solved problems count in local storage
                let userSolvedData = JSON.parse(localStorage.getItem('userSolvedData')) || {};
                userSolvedData[userEmail] = (userSolvedData[userEmail] || 0) + 1;
                localStorage.setItem('userSolvedData', JSON.stringify(userSolvedData));

                // Check if the user has solved more than one problem
                if (userSolvedData[userEmail] > 1) {
                    alert('You have reached your limit. Please upgrade to continue solving more problems.');
                    window.location.href = 'upgrade.html';
                    return;
                }
            } else {
                document.getElementById('output').textContent = 'Error: Your code does not match the expected solution. Please try again.';
            }
        } else {
            document.getElementById('output').textContent = 'Error: Problem solution not found.';
        }
    });
});

// Function to fetch problem details from the server
async function loadProblemDetails(problemId) {
    try {
        const response = await fetch(`http://localhost:8000/api/problems/${problemId}`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });
        const problem = await response.json();

        if (problem) {
            document.getElementById('problem-title').textContent = problem.title;
            document.getElementById('problem-description').textContent = problem.description;
            document.getElementById('problem-sample-input').textContent = problem.sampleInput;
            document.getElementById('problem-sample-output').textContent = problem.sampleOutput;
        } else {
            document.getElementById('problem-title').textContent = 'Problem not found';
        }
    } catch (error) {
        console.error('Error fetching problem details:', error);
        document.getElementById('problem-title').textContent = 'Error loading problem details';
    }
}
