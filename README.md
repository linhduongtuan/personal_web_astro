# This personal blog is powered by the 🍥Fuwari's [**code**](https://github.com/saicaca/fuwari)

A static blog template built with [Astro](https://astro.build).

[**🖥️ Live Demo (Vercel)**](https://personal-web-astro-zx8v.vercel.app/)&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;
[**🌏 中文**](https://github.com/linhduongtuan/personal_web_astro/blob/main/README.zh-CN.md)&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;
[**🌏 日本語**](https://github.com/linhduongtuan/personal_web_astro/blob/main/README.ja-JP.md)&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;
[**🌏 한국어**](https://github.com/linhduongtuan/personal_web_astro/blob/main/README.ko.md)&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;
[**🌏 Español**](https://github.com/linhduongtuan/personal_web_astro/blob/main/README.es.md)
[**🌏 Tiếng Việt**](https://github.com/linhduongtuan/personal_web_astro/blob/main/README.vi.md)

> README version: `2024-12-15`

![Preview Image](https://github.com/linhduongtuan/personal_web_astro/blob/main/src/assets/images/screen.png)

## ✨ Features

- [x] Built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com)
- [x] Smooth animations and page transitions
- [x] Light / dark mode
- [x] Customizable theme colors & banner
- [x] Responsive design
- [x] Search
- [ ] TOC
- [ ] Dashboards
- [ ] Comments

## 🚀 How to Use

1. [Generate a new repository](https://github.com/saicaca/fuwari/generate) from this template or fork this repository.
2. To edit your blog locally, clone your repository, run `pnpm install` AND `pnpm add sharp` to install dependencies.
   - Install [pnpm](https://pnpm.io) `npm install -g pnpm` if you haven't.
3. Edit the config file `src/config.ts` to customize your blog.
4. Run `pnpm new-post <filename>` to create a new post and edit it in `src/content/posts/`.
5. Deploy your blog to Vercel, Netlify, GitHub Pages, etc. following [the guides](https://docs.astro.build/en/guides/deploy/). You need to edit the site configuration in `astro.config.mjs` before deployment.

## ⚙️ Frontmatter of Posts

```yaml
---
title: My First Blog Post
published: 2023-09-09
description: This is the first post of my new Astro blog.
image: ./cover.jpg
tags: [Foo, Bar]
category: Front-end
draft: false
lang: en      # Set only if the post's language differs from the site's language in `config.ts`
---
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                             | Action                                           |
|:------------------------------------|:-------------------------------------------------|
| `pnpm install` AND `pnpm add sharp` | Installs dependencies                            |
| `pnpm dev`                          | Starts local dev server at `localhost:4321`      |
| `pnpm build`                        | Build your production site to `./dist/`          |
| `pnpm preview`                      | Preview your build locally, before deploying     |
| `pnpm new-post <filename>`          | Create a new post                                |
| `pnpm astro ...`                    | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro --help`                 | Get help using the Astro CLI                     |

## How to Deploy Your Code on Vercel:
- **Step 1. Create a Vercel Account:** Head over to the Vercel website (https://vercel.com/) and sign up for a free account

- **Step 2. Clone the Repository (Optional):** If you want to customize the code before deploying, clone this repository to your local machine using Git. You can find instructions on cloning repositories online or in the Git documentation.

- **Step 3. Deploy Your Project:**

- Step 3.1. Vercel offers two ways to deploy your code:

   Direct Deployment (Recommended):

   Open a terminal in your project directory (if you cloned the repository).
  
   Run the command `vercel --prod` to initiate deployment.

   This will guide you through linking your Vercel account and automatically deploying your project.
  
   Deployment through Vercel Interface:

- Step 3.2. If you prefer a web interface, navigate to your Vercel dashboard after linking your account:
  
   Click "Import Project" and select your preferred method (e.g., GitHub, GitLab, etc.) to connect the repository containing your code
  
   Follow the on-screen instructions to complete the deployment process.

- **Step 4. Access Your Deployed Project:** Once the deployment is successful, Vercel will provide you with a unique URL where you can access your live website.
  
- **You also deploy it to other Platforms following [this official documents here](https://docs.astro.build/en/guides/deploy/)**

Enjoy!
