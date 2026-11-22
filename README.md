# Amplify Cafe Cloud

A small café website built in November 2023 while preparing for the AWS Certified Cloud
Practitioner exam, to practise deploying a React app with AWS Amplify.

- **Frontend:** React 18, React Router, Tailwind CSS, Headless UI
- **Auth:** Amazon Cognito user pool (email sign-up and verification), wired in with
  Amplify's `withAuthenticator`
- **Hosting:** AWS Amplify, region `eu-north-1` (Stockholm)

Pages: Home (image slider), Menu (AWS-themed dishes such as "S3PRESSO" and "Dynamocha")
and Contact.

## Run it

You need the Amplify CLI and your own AWS account.

```bash
npm install
amplify init          # or `amplify pull` if you already have this backend
amplify push          # creates the Cognito user pool and writes src/aws-exports.js
npm start             # http://localhost:3000
```

`src/aws-exports.js` and `amplify/team-provider-info.json` are generated per environment and
are not committed.

```bash
npm test              # navigation test
npm run build         # production build
```
