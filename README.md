# Snorri of the Stars

https://snorri.rest

## To preview edits
in  terminal from snorri folder, run the command `npm run dev` to start your local server. 
this starts the local development environment, using your computer as a local server. any saved changes will be immediately visible at `localhost:4321` from your computer while the local server is running.

You get to the snorri folder by typing cd Sites, then cd snorri. If you aren't sure if you're in the right place, type cd & then press tab, the files/folders within that level will appear and you can choose where to go.

After you've started running `npm run dev`, you'll need to click on the link localhost:4321 to open it in your browser to see changes.
To exit your local server, press ctrl + c. You'll need to do this to run other commands (like `git commit -a -m "whatever message will help your future self understand what change you made"`).
https://www.snorri.rest/secret-menuhttps://www.snorri.rest/secret-menu
## To edit:

- Edit .md files in VS Code or Obsidian on your computer

When you want to push something live to the internet:
- Run `vercel --prod` in terminal at the level of the `/snorri` repo folder. This tells vercel (where your website is hosted) to put the new changes online.
- Commit and push to github (back it up) in VS Code or by running `git commit -a -m "my commit message"` This logs your change in Github.

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│	└── images/
│   		└── Image files live here
├── src/
│	└── components/
│	└── content/
│   	└── blog/
│   		└── Article .md files live here
│   	└── pages/
│   		└── .md files for other pages live here
│   └── layouts
│   └── pages
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
