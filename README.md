
# User Management & Admin Access — REST API

An educational REST API built with Express, TypeScript, and PostgreSQL. Developed during my Full Stack Web Development training at **Kenzie Academy Brasil**.

## Overview

A back-end application designed to manage users, authentication, and access permissions through a RESTful API.

## Features

- User registration with input validation and duplicate-email checks.
- Login with token-based authentication.
- Authenticated user profile access.
- User listing and profile updates with authorization checks.
- User deactivation.
- Administrator-protected user recovery.
- Error handling and database integration.

## Technologies

- Node.js
- TypeScript
- Express.js
- PostgreSQL
- JSON Web Tokens (JWT)
- bcryptjs
- Zod
- Jest and Supertest

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| POST | `/users` | Register a user |
| GET | `/users` | List users with authorization checks |
| GET | `/users/profile` | View user profile |
| PATCH | `/users/:id` | Update authorized user |
| DELETE | `/users/:id` | Deactivate authorized user |
| PUT | `/users/:id/recover` | Administrator-protected user recovery |
| POST | `/login` | Authenticate a user |

These endpoints are defined in the source code. Their behavior has not been independently verified through live API testing.

## Getting Started

Clone the repository and install dependencies:

```bash
npm install
```

Configure a local PostgreSQL database and create a `.env` file with the required database settings:

```dotenv
DB_USER=your_username
DB_PASSWORD=your_password
DB_HOST=localhost
DB=your_database
DB_PORT=5432
SECRET_KEY=replace_with_a_long_random_secret
```

Start the development server:

```bash
npm run dev
```

The server uses port 3000 by default unless another port is configured.

## Technical Highlights

- RESTful API architecture.
- Authentication and authorization middleware.
- Protected routes and administrator permissions.
- Request validation using Zod.
- Password hashing and token-based authentication.
- Relational database integration.
- Modular organization of routes, controllers, and services.

## Project Scope

This project was developed for educational purposes. It demonstrates back-end development and access-control concepts, but has not been independently validated as a production-ready authentication service.

## Connect

- [LinkedIn](https://www.linkedin.com/in/pedro-henrique-barros-nascimento-2bb684251/)
- [GitHub Profile](https://github.com/pedrohenriquebarrosn)
