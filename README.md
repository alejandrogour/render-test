# Notes Backend

Backend for the Notes application from Fullstack Open course (Part 3). Built with Node.js, Express, and Mongoose to manage notes in MongoDB, including validations, error handling, and ESLint for code quality.

## Description
This RESTful server enables creating, reading, updating, and deleting notes. Features include:
- React frontend integration (served in production from `/dist`).
- Mongoose validations (content min 5 chars, required).
- Error middleware (CastError, ValidationError).
- Deployed on Render.

## Requirements
- Node.js v18+
- MongoDB URI (set in `.env` for development).

## Installation
```bash
npm install
```

## Basic Commands
- Development (with nodemon):
```bash
npm run dev
```
- Production:
```bash
npm start
```
- Lint (check code with ESLint):
```bash
npm run lint
```
- Frontend build (watch `package.json`):
```bash
npm run build:ui
```
or
```bash
npm run deploy:full
```

## Deployment
App deployed on Render: https://render-test-i3xo.onrender.com

## License
The University of Helsinki. Fullstack Open course 2025.