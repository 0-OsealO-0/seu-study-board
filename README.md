# GitHub Pages Study Board

This folder contains only the public web files:

- `index.html`: interactive study board
- `review-questions.html`: review question sheet

Do not copy private course archives, Anki packages, OneNote files, or personal records into this folder.

## Publish

1. Create a new public GitHub repository, for example `seu-study-board`.
2. Run `publish-github-pages.cmd` in the project root.
3. Enter the GitHub username and repository name.
4. Complete the Git credential login if prompted.
5. Open the repository on GitHub.
6. Go to `Settings`, then `Pages`.
7. Set `Source` to `Deploy from a branch`.
8. Select branch `main` and folder `/ (root)`.
9. Wait one or two minutes.

The public URL will be:

```text
https://<github-username>.github.io/<repository-name>/
```

The review question link is:

```text
https://<github-username>.github.io/<repository-name>/review-questions.html
```

The publish script sets repository-local Git identity to:

```text
user.name  = GitHub username
user.email = <github-username>@users.noreply.github.com
```
