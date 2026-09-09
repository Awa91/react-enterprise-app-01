# Enterprise React Clean Architecture Application
[![Build & Test CI/CD](https://github.com/Awa91/react-enterprise-app-01/actions/workflows/react_ci_cd.yml/badge.svg)](https://github.com/Awa91/react-enterprise-app-01/actions/workflows/react_ci_cd.yml)


An enterprise-grade, accessible, and localized "Contact Us" web application built for a Nigerian software development agency. Designed using strict **MVVM (Model-View-ViewModel) Clean Architecture** principles to separate business logic from UI rendering.

---

## 🏗️ Architecture & Tech Stack

* **Framework & Core:** React 19, Vite, TypeScript (Strict Mode)
* **Architecture:** MVVM Clean Architecture (Domain, Data, and Presentation Layers)
* **Styling:** Tailwind CSS v4
* **State & Querying:** React Query (TanStack Query)
* **Testing:** Vitest, `@testing-library/react`, `@vitest/coverage-v8`
* **Localization (i18n):** `i18next` (English & Nigerian Pidgin support)
* **CI/CD:** GitHub Actions (Node.js 22 LTS)

---

## ⚙️ CI/CD Pipeline Architecture

This repository uses GitHub Actions (`.github/workflows/react_ci_cd.yml`) to enforce code quality, automated testing, and artifact generation on every commit and pull request.

[Push / Pull Request]
│
├───► Job 1: Quality & Unit Tests
│        ├── TypeScript Strict Check (tsc --noEmit)
│        ├── Vitest Execution & Code Coverage
│        └── Artifact: Code Coverage Report (7 days)
│
├───► Job 2: Production Build (depends on Job 1)
│        ├── Vite Bundle Compilation
│        └── Artifact: Production Distribution (dist/ - 14 days)
│
└───► Job 3: Automated Deployment Notice (main branch only)
└── Triggers on merge to main


### Continuous Integration (CI)
* **Strict Type Safety:** Executes `tsc --noEmit` across all application and test files before building.
* **Isolated Unit Testing:** Runs Vitest unit tests in parallel with v8 coverage tracking.
* **Concurrency Management:** Automatically cancels redundant in-flight pipeline runs when new commits are pushed to the same branch.

### Continuous Deployment (CD)
* **Artifact Generation:** Compiles optimized distribution assets using production-level environment configurations.
* **Artifact Retention:** Stores deployable build artifacts (`dist/`) directly in GitHub Actions for automated downstream hosting deployments (e.g., Vercel, Netlify, AWS S3).

---

## 📁 Repository Structure

```text
.
├── .github/
│   └── workflows/
│       └── react_ci_cd.yml             # Automated CI/CD pipeline definition
├── src/
│   ├── domain/                   # Entities, Use Cases, Repository Interfaces
│   ├── data/                     # API Services, DTOs, Repository Implementations
│   ├── presentation/             # ViewModels, React Components, Custom Hooks
│   ├── i18n/                     # English & Pidgin translation bundles
│   └── test/                     # Test setup and mocks
├── tsconfig.json                 # Base TypeScript config
├── tsconfig.app.json             # Production build config (excludes test files)
├── vite.config.ts                # Vite & Vitest configuration
└── package.json
🚀 How to Run the Project Locally
Prerequisites
Node.js: v22.x (LTS recommended)

Package Manager: npm v10+

Setup Instructions
Clone the repository:

Bash
git clone [https://github.com/Awa91/react-enterprise-app-01.git](https://github.com/Awa91/react-enterprise-app-01.git)
cd react-enterprise-app-01
Install dependencies:

Bash
npm install
Start the local development server:

Bash
npm run dev
Open http://localhost:5173 in your browser.

🧪 Testing & Code Quality
Run tests locally using Vitest before pushing changes:

Bash
# Run unit tests in watch mode
npm run test:watch

# Execute full test suite once
npm run test

# Generate coverage report
npm run test:coverage

# Perform TypeScript strict type verification
npx tsc --noEmit
📦 Production Build
To verify production bundle compilation locally:

Bash
npm run build
This command runs tsc -b using tsconfig.app.json (which safely ignores test files) and outputs the compiled production assets into the dist/ directory.

📄 License
This project is open-source and available under the MIT License.


***

### How to apply this to your repo:

Replace `YOUR_GITHUB_USERNAME` in the badge URL and clone instructions with your actual GitHub username, then commit and push to your feature branch: