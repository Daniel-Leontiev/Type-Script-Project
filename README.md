- Create git repo
  - mkdir `projectName`
  - cd `projectName`
  - git init
  - touch `README.md`
  - git add `README.md`
  - git commit -m `Create Repo`

---

- Create GitBub Repo
  - `curl` -i -u '`userName`':$GITHUB_TOKEN https://api.github.com/user/repos -d `'{"name": "Type Script Project", "description": "Boiler plate Typescript Project"}`'

- Git REST API
  - https://docs.github.com/en/rest/guides/getting-started-with-the-rest-api

---

- Add Remote Origin
  - `git remote add origin` git@github.com:`userName`/Type-Script-Project.git
  - `git push origin master`

---

- Mermaid diagram https://github.com/mermaid-js/mermaid/blob/develop/docs/sequenceDiagram.md
```mermaid
sequenceDiagram
    A-->>B: Request
    B-->>A: Response
```

---

- Install Typescript
  - `npm install typescript@latest --save-dev`

- Add `.gitignore`
  - touch .gitignore
  ```
    #Npm
    node_modules

    #Build
    build
  ```

- Create `src` directory and main entry
  - `mkdir src`
  - `cd src`
  - `touch main.ts`
  ```
  const helloWorld = () => {
    console.log('Hello world');
  }

  helloWorld();
  ```

- Create `tsc` compile script
  - `package.json`
  ```
  { 
    "scripts": {
      "tsc": "tsc"
    }
  }
  ```
  - run compilation `npm run tsc`
  - observe generation of `build/main.js`
  - run compiled app `node ./build/main.js`

- Create `node run` script
  - `package.json`
  ```
  {
    "scripts": {
      "run": "node ./build/main.js"
    }
  }
  ```