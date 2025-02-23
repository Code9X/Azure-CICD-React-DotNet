```mermaid
graph TD
    A["GitHub Repo (Code Push)"] -->|Trigger| B["GitHub Actions (CI/CD Workflow)"]
    B --> C["Build & Push Images"]
    C -->|Push to ACR| D["Azure ACR (ACR)"]
    D -->|Deploy to AKS| E["Deploy to AKS"]
    E -->|Apply K8s YAMLs| F["AKS Staging Namespace"]
    
    C -->|React (Frontend)| C1["Docker -> ACR"]
    C -->|.NET API (Backend)| C2["Docker -> ACR"]

    F -->|Frontend| G["bookingwiz-web (FE)"]
    F -->|Backend| H["bookingwiz-admin (BE)"]
    F -->|LoadBalancer| I["Frontend LB"]
    F -->|ClusterIP| J["Backend Internal"]
