# Product Backlog

The backlog document contains all PBIs for the project, ordered by priority.

| ID | Actor | User Story | Status | Conditions of Satisfaction (CoS) |
| :- | :- | :- | :- | :- |
| [1](./1/prd.md) | Developer | As a Developer, I need a version-controlled monorepo with separate, configured environments for the frontend and backend so that I can begin development efficiently. | Done | A Git repository exists with `/frontend` and `/backend` directories, each with its own environment setup. |
| [2](./2/prd.md) | Architect | As an Architect, I need a minimal, deployed "vertical slice" of the application to confirm end-to-end connectivity between the Vercel frontend and the Azure backend. | InProgress | A page on the deployed frontend successfully fetches a status message from a deployed backend API endpoint. |
| [3](./3/prd.md) | Quant | As a Quant, I need the core Python analytics engine built and unit-tested so that I can be confident in the underlying mathematical models. | Proposed | The `DataConnector`, `LinearKalmanFilter`, and `Backtester` classes are complete and have passing unit tests. |
| [4](./4/prd.md) | Developer | As a Developer, I need the backend analytics engine wrapped in a secure and documented FastAPI interface so that it can be consumed by the frontend. | Proposed | The backend exposes `POST /simulations` and `GET /simulations/{id}` endpoints that are tested and documented. |
| [5](./5/prd.md) | User | As a User, I need a complete, interactive web interface to configure simulations and analyze results so that I can perform my research effectively. | Proposed | The frontend application provides views for simulation configuration and detailed results analysis, fully connected to the backend API. |
| [6](./6/prd.md) | Project Manager | As a Project Manager, I need final project documentation and automated CI/CD pipelines so that the project is maintainable and easy to deploy. | Proposed | The root `README.md` is complete, and a CI/CD pipeline automates the deployment of both frontend and backend. |

## PBI History

| Timestamp           | PBI_ID | Event_Type | Details              | User     |
|---------------------|--------|------------|----------------------|----------|
| 2025-08-12 10:00:00 | 1      | create_pbi | PBI created          | AI Agent |
| 2025-08-12 10:01:00 | 2      | create_pbi | PBI created          | AI Agent |
| 2025-08-12 10:02:00 | 3      | create_pbi | PBI created          | AI Agent |
| 2025-08-12 10:03:00 | 4      | create_pbi | PBI created          | AI Agent |
| 2025-08-12 10:04:00 | 5      | create_pbi | PBI created          | AI Agent |
| 2025-08-12 10:05:00 | 6      | create_pbi | PBI created          | AI Agent |
| 2025-08-13 00:00:00 | 1      | propose_for_backlog | PBI approved and ready for implementation | User |
| 2025-08-13 00:30:00 | 1      | start_implementation | Work started with Task 1-2 and Task 1-3 | AI Agent |
| 2025-08-13 01:00:00 | 1      | submit_for_review | All tasks implemented and submitted for review | AI_Agent |
| 2025-08-13 01:30:00 | 2      | start_implementation | Work started with Task 2-1 | AI_Agent |
| 2025-08-13 01:28:00 | 1      | approve | PBI accepted; all CoS met | User |
