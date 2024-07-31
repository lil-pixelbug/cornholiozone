document.addEventListener('DOMContentLoaded', function() {
    const username = 'lil-pixelbug'; //
    const repo = 'cornholiozone'; //

    fetch(`https://api.github.com/repos/${username}/${repo}/issues?labels=art,submission`)
        .then(response => response.json())
        .then(issues => {
            const container = document.getElementById('submissions-container');
            issues.forEach(issue => {
                const submissionDiv = document.createElement('div');
                submissionDiv.className = 'submission';
                submissionDiv.innerHTML = `
                    <h2>${issue.title}</h2>
                    <p>${issue.body}</p>
                `;
                container.appendChild(submissionDiv);
            });
        })
        .catch(error => {
            console.error('Error fetching submissions:', error);
            document.getElementById('submissions-container').innerHTML = '<p>Error loading submissions. Please try again later.</p>';
        });
});
