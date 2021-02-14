# Express Microservice Helper

## Deployment

### Secret Variables

The following secret variables are required to ensure that CI/CD completes correctly.

- **RUN_PROJECT_PRODUCTION** : The gcloud project used for production
- **RUN_PROJECT_STAGING** : The gcloud project used for staging
- **RUN_SA_KEY** : The Service Account Key (JSON) used to deploy
- **SERVICE_NAME** : The name used for this service

### Service Account Roles

The service account used to ddploy needs the following roles to be able to deploy correctly

- Cloud Run Admin
- Cloud Build Editor
- Cloud Build Service Account
- Viewer
- Service Account User
