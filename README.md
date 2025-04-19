# 🌟 HIghly Advanced MERN B2B Teams Management SaaS Project

## 📌 Project Overview

**MyManager** is a full-stack project management app built with the **MERN** stack (MongoDB, Express, React, Node.js). It includes features like Google Login, role-based access, multi-workspace support, task & project tracking, and more.

---

## 🌟 Key Features at a Glance

| 🔐 Authentication          | Google, Email & Password Sign-In       |
| -------------------------- | -------------------------------------- |
| 🏢 Workspaces              | Create & manage multiple workspaces    |
| 📊 Project Management      | Organize projects, epics & timelines   |
| ✅ Tasks                   | Full CRUD, status, priority, assignees |
| 👥 Role System             | Owner, Admin, Member with permissions  |
| ✉️ Member Invites          | Invite users via email to workspaces   |
| 🔍 Smart Filters           | Filter by status, priority, assignee   |
| 📈 Analytics Dashboard     | Visual insights & progress tracking    |
| 📅 Pagination & Load More  | Efficient data loading                 |
| 🌱 Test Data Seeding       | Instantly populate with sample data    |
| 🔒 Secure Sessions         | Cookie-based session management        |
| 🚪 Logout & Cleanup        | Session termination support            |
| 💾 Mongo + Mongoose        | Robust & scalable data layer           |
| 🌐 MERN + TypeScript Stack | Modern, type-safe full-stack solution  |

---

## 🚀 Tools & Technologies

This project leverages the latest tools and frameworks for modern development:

- **Node.js**: Scalable backend architecture
- **React.js**: Dynamic frontend framework
- **MongoDB & Mongoose**: Flexible and scalable database solutions
- **Google OAuth**: Seamless Google Sign-In integration
- **TypeScript**: For a type-safe codebase
- **TailwindCSS & Shadcn UI**: Beautiful, responsive design
- **Vite.js**: Lightning-fast frontend development

---

## 🔄 Getting Started

### 1. Watch the Video

Follow along step-by-step by watching the full guide on YouTube.

### 2. Set Up Environment Variables

Create a `.env` file in the root of your project and configure these variables:

```plaintext
PORT=8000
NODE_ENV=development
MONGO_URI="mongodb+srv://<username>:<password>@<>.mongodb.net/my-manager"

SESSION_SECRET="session_secret_key"

GOOGLE_CLIENT_ID=<your-google-client-id>
GOOGLE_CLIENT_SECRET=<your-google-client-secret>
GOOGLE_CALLBACK_URL=http://localhost:8000/api/auth/google/callback


FRONTEND_ORIGIN=http://localhost:3000
FRONTEND_GOOGLE_CALLBACK_URL=http://localhost:3000/google/callback
```

### 3. Run the Application

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Access the backend at `http://localhost:8000`.

---

## 🌐 Deploying MyManager

### 1. Add Environment Variables

Add the `.env` variables to your hosting platform (e.g., Vercel).

### 2. Deploy

Deploy your app using your preferred method to make it live.

---

## 📚 Comprehensive Guide

**🚀 Deepen Your Understanding!**  
We’ve developed an all-encompassing guide for this project that explains:

- The architecture and design principles behind MyManager
- Step-by-step breakdowns of each feature
- Advanced techniques for implementing seeding, Mongoose transactions, and performance optimizations
- Insights into multi-tenancy and role-based permission models
- Best practices for building scalable SaaS applications

## This guide ensures you gain a thorough understanding of every concept and feature in MyManager, empowering you to build similar systems or expand upon this project.
