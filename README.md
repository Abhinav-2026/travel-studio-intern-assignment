# 🌍 Travel Studio - GydeXP Intern Assignment

This full-stack project is built as part of the GydeXP Developer Internship assignment. It is a guest request logging system that integrates WhatsApp messaging using `n8n` workflows, a `NestJS` backend, and a `Next.js` frontend for displaying guest requests in a dashboard.

---
## Whatsapp No: +1 5556567451 
## 🚀 Tech Stack

### 🔧 Backend
- **NestJS (TypeScript)**
- **PostgreSQL** (Hosted on [Render](https://render.com))
- **Prisma ORM**
- **n8n.io** for WhatsApp Workflow automation

### 🎨 Frontend
- **Next.js (TypeScript)**
- **Tailwind CSS**
- **TanStack Query (React Query)**

### 📦 Tools
- **Render** – Backend + DB deployment
- **Vercel** – Frontend deployment
- **Postman** – API Testing
- **GitHub** – Code repository
- **VS Code** – Editor

---

## 📁 Folder Structure


travel-studio-intern-assignment/
│
├── backend/         # NestJS backend with Prisma + PostgreSQL
├── frontend/        # Next.js frontend (dashboard)
└── workflow/        # n8n workflows for WhatsApp integration
## Backend Setup (NestJS + Prisma)
### Initialize NestJS project:
  #### cd backend
#### npx @nestjs/cli new . --skip-git
### Install dependencies:
npm install @nestjs/config @nestjs/typeorm @nestjs/common class-validator class-transformer prisma @prisma/client
### Set up Prisma:
npx prisma init
### Configure PostgreSQL connection in .env using Render DB URL.
### Define your model in prisma/schema.prisma:
model Request {
  id          String   @id @default(uuid())
  guestPhone  String
  requestText String
  createdAt   DateTime @default(now())
}
### :Create and migrate DB:
npx prisma migrate dev --name init
npx prisma generate
### Generate Request Module:
npx nest g module requests
npx nest g service requests
npx nest g controller requests
### API Endpoints:
POST /api/requests – Create guest request
GET /api/requests – Fetch all requests
### Test using Postman:
POST http://localhost:3000/api/requests
🔗 Deployed Backend
https://travel-studio-intern-assignment-2144.onrender.com/api/requests

 
## n8n WhatsApp Workflow Integration
### Create an account on n8n.io (free for 15 days).
### Add WhatsApp Trigger node (sandbox credentials).
### Extract guestPhone and requestText from the message.
### Use HTTP Request node to send data to:
POST https://travel-studio-intern-assignment-2144.onrender.com/api/requests
### Send confirmation back to the same WhatsApp chat.

 
## Frontend (Next.js Dashboard)
### Create frontend app:
#### cd frontend
#### npx create-next-app@latest frontend --typescript
### Install Tailwind CSS:
#### npm install -D tailwindcss postcss autoprefixer
#### npx tailwindcss init -p
Set up Tailwind in tailwind.config.js and globals.css.

### :Create /dashboard route:
#### Fetch from /api/requests
###Display phone number, request text, timestamp using TanStack Query

🌐 Deployed Frontend
https://abhinavkumargydexpinternassignment-five.vercel.app




