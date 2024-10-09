# MINI PROJECT
- simple api project



## Steps on how to run

``` @js
# install required packages
> npm install

# start the app
> npm run start
```



### How to access API endpoints
- Port runs at 3000: 
- you access http://localhost:3000
    - [GET] /treasures
        - header params 
        ``` 
        {
            "latitude": 14.552036595352455,
            "longitude": 121.01696118771324,
            "distance": 2,
            "prizeValue": 10 // optional
        }
        ```

    - [GET] /users/by-email
        - header params 
        ``` 
        {
            email: "u1@kitra.abc"
        }
        ```
- you can also access api by Swagger Docs thru <br />
http://localhost:3000/api-docs



## Database Migrations and Seeding
- locate the file inside schema folder, run the following files in order in your sql editor

- [1] `table-migration.sql` to create table and columns
- [2] `seeding.sql` to insert values