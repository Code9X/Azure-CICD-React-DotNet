Open Edit to See!

┌───────────────┐
│ GitHub Repo   │
│ (Code Push)   │
└──────┬────────┘
       │
       ▼
┌───────────────────┐
│ GitHub Actions    │
│ (CI/CD Workflow)  │
└──────┬────────────┘
       │
       ▼
┌────────────────────────┐
│  Build & Push Images   │
│  - React (Frontend)    │
│  - .NET API (Backend)  │
│  Docker -> ACR         │
└──────┬─────────────────┘
       │
       ▼
┌─────────────────┐
│ Azure ACR (ACR) │  <-- Stores Docker images
└──────┬──────────┘
       │
       ▼
┌────────────────────┐
│ Deploy to AKS      │
│ - Apply K8s YAMLs  │
│ - Frontend: LB     │
│ - Backend: Internal│
└──────┬─────────────┘
       │
       ▼
┌─────────────────────────┐
│ AKS Staging Namespace   │
│ - bookingwiz-web (FE)   │
│ - bookingwiz-admin (BE) │
│ - LoadBalancer (FE)     │
│ - ClusterIP (BE)        │
└─────────────────────────┘
