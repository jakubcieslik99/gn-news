# <img src="https://i.ibb.co/J7RZcV0/gn-news-1.png" width="340">

## gnNews 📰

📌 Web app for displaying local & country based news fetched from NewsData.io API. Project contains React app as a frontend
(client) built by Vite tool.

![GitHub package.json version (subfolder of monorepo)](https://img.shields.io/github/package-json/v/jakubcieslik99/gnNews?color=orange&filename=package.json&label=client%20version)
![GitHub top language](https://img.shields.io/github/languages/top/jakubcieslik99/gnNews)
![GitHub repo size](https://img.shields.io/github/repo-size/jakubcieslik99/gnNews)
[![Website)](https://img.shields.io/website?label=demo%20website&url=https%3A%2F%2Fgnnews.jakubcieslik.com%2F)](https://gnnews.jakubcieslik.com/)

## Features

- Displaying local news based on selected language
- Displaying country based news
- Searching for news
- Selecting news category
- Displaying news as a list or tiles
- Displaying news details

## Run Locally

- Clone repository

```bash
  git clone https://github.com/jakubcieslik99/gnNews.git
```

ℹ️ Instructions for running client app locally:

- Navigate to the client directory and install dependencies

```bash
  cd gn-news
  pnpm install
```

- Run client app in development mode

```bash
  pnpm run dev
```

- Run client app tests

```bash
  pnpm run test
```

## Deployment

ℹ️ Instructions for building client app to production

- Create production build

```bash
  pnpm run build
```

## Environment Variables

⚙️ To build client app, you will need to add the following environment variables to your .env file

- `VITE_PREVIEW_PORT`

- `VITE_NEWSDATA_API_KEY`

## Languages

🔤 Available client app languages: **PL**, **EN**, **DE**, **ES**, **FR**

## Feedback

If you have any feedback, please reach out to me at ✉️ contact@jakubcieslik.com

## Authors

- [@jakubcieslik99](https://www.github.com/jakubcieslik99)

The whole project was developed as gnStudio React.js developer challenge.
