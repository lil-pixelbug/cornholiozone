document.addEventListener('DOMContentLoaded', function() {
    const username = 'lil-pixelbug'; // Replace with your GitHub username
    const repo = 'cornholiozone'; // Replace with your repository name

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
                    <p>Uploaded Files:</p>
                    <ul>
                        ${issue.comments_url ? `<li><a href="${issue.comments_url}" target="_blank">View Comments</a></li>` : ''}
                        ${issue.body.includes('http') ? `<li><a href="${issue.body.match(/http[^ ]+/)[0]}" target="_blank">Download File</a></li>` : ''}
                    </ul>
                `;
                container.appendChild(submissionDiv);
            });
        })
        .catch(error => {
            console.error('Error fetching submissions:', error);
            document.getElementById('submissions-container').innerHTML = '<p>Error loading submissions. Please try again later.</p>';
        });
});
