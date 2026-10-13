# CRUD Admin — User Management REST API

**TypeScript and PostgreSQL REST API for authentication, user management, and role-based access control.**

[**↗ Code on GitHub**](https://github.com/pedrohenriquebarrosn/CRUD-Admin)

## Overview

CRUD Admin is a back-end project developed during Kenzie Academy Brasil's Full Stack program. It demonstrates API design, password hashing, JWT authentication, protected routes, input validation, and relational persistence.

## Key features

- Register users with input validation and duplicate-email checks.
- Authenticate with JSON Web Tokens (JWT).
- Retrieve profiles and manage user records with permission checks.
- Update user details and passwords, with bcrypt hashing.
- Deactivate accounts and recover eligible users through protected administrative routes.
- Use centralized error handling and parametrized database queries.

## Technology stack

Node.js · TypeScript · Express · PostgreSQL · JWT · bcryptjs · Zod · Jest · Supertest

## API routes

| Method | Endpoint | Purpose |
| --- | --- | --- |
| `POST` | `/users` | User registration |
| `POST` | `/login` | Authentication |
| `GET` | `/users/profile` | Authenticated profile |
| `GET` | `/users` | Authorized user listing |
| `PATCH` | `/users/:id` | Authorized profile update |
| `DELETE` | `/users/:id` | User deactivation |
| `PUT` | `/users/:id/recover` | Administrative account recovery |

## Explore and run locally

The default `main` branch contains the reviewed authorization and password-handling improvements, validated with an isolated PostgreSQL test database.

```bash
git clone https://github.com/pedrohenriquebarrosn/CRUD-Admin.git
cd CRUD-Admin
npm install
```

Copy the documented database configuration from `.env.example` into a local `.env` and provide a PostgreSQL instance and private JWT signing secret.

```bash
npm run dev
```

## Engineering and verification

- TypeScript checks and integration tests with a dedicated PostgreSQL test instance passed in GitHub Actions.
- Regression tests cover ordinary-user registration, secure password updates, authorization, and access after account deactivation.
- This repository is a back-end API; its interface is HTTP endpoints and testable source code rather than a graphical website.

The implementation is presented as an educational engineering project, not a deployed identity provider or externally audited production security service.

---

## Author

**Pedro Henrique Barros Nascimento** — Business Administration graduate and Full Stack development alumnus of Kenzie Academy Brasil.

[GitHub profile](https://github.com/pedrohenriquebarrosn) · [LinkedIn](https://www.linkedin.com/in/pedro-henrique-barros-nascimento-2bb684251/)
