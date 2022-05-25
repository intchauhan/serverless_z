---

RUNNING THE PROJECT:

To test and deploy the application on your AWS account you should install Serverless framework by running:

-> npm install -g serverless
-> Copy .env.example to .env

---

Before running locally our functions, we need to setup the database. You can run the docker-compose file to create a container with a Mysql database.

-> docker-compose up

---

When the container is up, run the project offline by:

-> npm run start

This will run 'serverless offline'.
No manual database migrations are needed.

---

Running the application locally without 'serverless offline':

If you encounter pg-native error, you can try to run the project offline without 'serverless offline' by running:
-> npm run dev

---

DEPLOY
To deploy, change the DB credentials to RDS credentials then deploy using
-> npm deploy

=======
ENDPOINTS:

1. POST /lead/createlead

Example input:
{
"email": "example@example.com",
"phone": "12345",
"first_name": "ashwin",
"last_name": "chauhan",
"interest":{
"message": "sample message"
}
}

2. GET /lead/leads
