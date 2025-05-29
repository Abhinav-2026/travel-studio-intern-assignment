# 🌍 Travel Studio - GydeXP Intern Assignment

This full-stack project is built as part of the GydeXP Developer Internship assignment. It is a guest request logging system that integrates WhatsApp messaging using `n8n` workflows, a `NestJS` backend, and a `Next.js` frontend for displaying guest requests in a dashboard.

---

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
Backend Setup (NestJS + Prisma)
1:Initialize NestJS project:
cd backend
npx @nestjs/cli new . --skip-git
2:Install dependencies:
npm install @nestjs/config @nestjs/typeorm @nestjs/common class-validator class-transformer prisma @prisma/client
3:Set up Prisma:
npx prisma init
4:Configure PostgreSQL connection in .env using Render DB URL.
5:Define your model in prisma/schema.prisma:
model Request {
  id          String   @id @default(uuid())
  guestPhone  String
  requestText String
  createdAt   DateTime @default(now())
}
6:Create and migrate DB:
npx prisma migrate dev --name init
npx prisma generate
7:Generate Request Module:
npx nest g module requests
npx nest g service requests
npx nest g controller requests
8:API Endpoints:
POST /api/requests – Create guest request
GET /api/requests – Fetch all requests
9:Test using Postman:
POST http://localhost:3000/api/requests
🔗 Deployed Backend
https://travel-studio-intern-assignment-2144.onrender.com/api/requests

 
n8n WhatsApp Workflow Integration
1:Create an account on n8n.io (free for 15 days).
2:Add WhatsApp Trigger node (sandbox credentials).
3:Extract guestPhone and requestText from the message.
4:Use HTTP Request node to send data to:
POST https://travel-studio-intern-assignment-2144.onrender.com/api/requests
5:Send confirmation back to the same WhatsApp chat.

 
Frontend (Next.js Dashboard)
1:Create frontend app:
cd frontend
npx create-next-app@latest frontend --typescript
2:Install Tailwind CSS:
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
Set up Tailwind in tailwind.config.js and globals.css.

3:Create /dashboard route:
Fetch from /api/requests
Display phone number, request text, timestamp using TanStack Query

🌐 Deployed Frontend
https://abhinavkumargydexpinternassignment-five.vercel.app

✅ Features
WhatsApp to API data relay using n8n
REST API with NestJS + PostgreSQL
Dashboard to monitor requests
Fully deployed and production-ready


