# config.js is here to connect your server with your bdd.

# The best practice is to use a file '.env' with 'dotenv', but if you just need to use the server personnaly, you can set your DB connection directly in config.js like that :

``` 
const connection = mysql.createConnection({
    host: 'localhost',
    port: 8889 // ONLY IF YOU USE MAMP
    user: 'your sql username',
    password: 'your sql password',
    database: 'your bdd_name'
}) 

```

# if you need to use dotenv so follow this :

```
require('dotenv').config(process.cwd(), '.env') // REQUIRE 'dotenv" with this line
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port : process.env.DB_PORT // ONLY IF YOU USE MAMP
    user: process.env.DB_USER
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
}) 

```

# in server_template directory create .env file and add this lines in :

```
DB_HOST=localhost
DB_PORT=8889  //ONLY IF YOU USE MAMP
DB_USER=yourSQLUsername
DB_PASS=yourSQLPassword
DB_NAME=yourDBName

```