# search-Mongo-project
This project is intended to build a search engine for products on MongoDB

It uses MongoDB atlas, MongoDB Realm functions, ReactJS

Main task:
Build a website that I can search for a garment (e.g. black hat) and it should display the garments that match the search criteria from a MongoDB database.
Solution architecture:	
The initial solution was to build a FARM stack (FastApi, React, MongoDB) that is scalable and robust, and while this solution is good, I decided to simplify it more and build a serverless app using MongoDB.
I used Atlas to build in indexes in the database, and used Realm to build in functions, here MongoDB would act as our backend serving the main purpose of the project and giving room for expansion, speeding up the process, and would enable us to build redundancy around the project.
So in a nutshell our architecture would be:
-MongoDB as our Backend
-React as our Frontend
I was also able to implement a cool autocomplete function that would speed up the process for anyone who wants to search
Project is hosted on Netlify 

