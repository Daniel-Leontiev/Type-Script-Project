- Create git repo
  - mkdir `projectName`
  - cd `projectName`
  - git init
  - touch `README.md`
  - git add `README.md`
  - git commit -m `Create Repo`

- Create GitBub Repo
 - curl -i -u '`userName`':$GITHUB_TOKEN https://api.github.com/user/repos -d `'{"name": "Project Name", "description": "Project Description"}`'