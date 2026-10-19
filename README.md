# CRUD Admin — Secure User Management REST API

**A TypeScript REST API for account management, JWT authentication, permissions, and PostgreSQL persistence.**

[**Browse source code ↗**](https://github.com/pedrohenriquebarrosn/CRUD-Admin) · [**Professional portfolio ↗**](https://portfolio-pedro-barros-2026-review.vercel.app/en) · [**Integration tests ↗**](https://github.com/pedrohenriquebarrosn/CRUD-Admin/actions/runs/38414305297)

## Overview

CRUD Admin is a backend application focused on authenticated user-management workflows. It combines structured API routes, input validation, password hashing, authorization checks, and relational data storage.

Developed during Full Stack training and subsequently reviewed, the project demonstrates how a Node.js/Express API handles accounts, protects restricted operations, and tests persistence against PostgreSQL.

## Features

- **User registration:** validate new accounts and reject duplicate emails.
- **JWT authentication:** issue and validate tokens for protected routes.
- **Role-based authorization:** differentiate permitted account and administrative operations.
- **Account management:** view profiles, update user information, and update passwords.
- **Account lifecycle:** deactivate users and support authorized account recovery.
- **Database integration:** PostgreSQL persistence and parameterized queries.
- **Reliable error handling:** centralized errors and request validation.

## Technology stack

Node.js · TypeScript · Express · PostgreSQL · JSON Web Tokens · bcryptjs · Zod · Jest · Supertest

## API reference

| Method | Endpoint | Purpose |
| --- | --- | --- |
| `POST` | `/users` | Register an account |
| `POST` | `/login` | Authenticate a user |
| `GET` | `/users/profile` | Retrieve the authenticated profile |
| `GET` | `/users` | List users with authorization checks |
| `PATCH` | `/users/:id` | Update authorized account fields |
| `DELETE` | `/users/:id` | Deactivate an account |
| `PUT` | `/users/:id/recover` | Recover an account with administrative authorization |

## Run locally

```bash
git clone https://github.com/pedrohenriquebarrosn/CRUD-Admin.git
cd CRUD-Admin
npm install
```

Create a local `.env` based on `.env.example`, configure the PostgreSQL database and JWT signing secret, and then start the server:

```bash
npm run dev
```

This is a backend/API repository. Interact with the routes using an HTTP client or automated tests; no separate web UI is required.

## Tests & engineering practices

- TypeScript and PostgreSQL-backed integration tests were run in GitHub Actions.
- Regression coverage includes registration, authentication, password updates, authorization, and post-deactivation access.
- Sensitive operations use password hashing, permission checks, and validated inputs.

[**Explore the recorded test run ↗**](https://github.com/pedrohenriquebarrosn/CRUD-Admin/actions/runs/38414305297)

## About the developer

**Pedro Henrique Barros Nascimento** — Full Stack Web Development training at Kenzie Academy Brasil; Business Administration coursework completed at UNIFG. Interested in applied AI, software development, and practical business solutions.

[GitHub](https://github.com/pedrohenriquebarrosn) · [LinkedIn](https://www.linkedin.com/in/pedro-henrique-barros-nascimento-2bb684251/) · [Portfolio EN](https://portfolio-pedro-barros-2026-review.vercel.app/en) · [Portfólio PT](https://portfolio-pedro-barros-2026-review.vercel.app/pt)
