function loadCommits() {
    const BASE_URL = "https://api.github.com/repos/";
    const username = document.getElementById("username");
    const repo = document.getElementById("repo");
    const commits = document.getElementById("commits");
    const usernameValue = repo.value;
    const repoVal = repo.value;

    fetch(`${BASE_URL}${usernameValue}${repoVal}/commits`)
        .then((res) => res.json())
        .then((data) => {
            data
                .forEach(({commit}) => {
                    const li = document.createElement("li");
                    li.textContent = `${commit.author.name}: ${commit.message}`;
                    commits.appendChild(li);
                })

        })
        .catch((err) => {
            console.error(err);
        })
}