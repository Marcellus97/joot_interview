# joot_interview
Joot interview code

# how i made it
Took ~5 hours to make from start to finish

Only used express and mongoose.
Tried to create a traditional mvc api but obviously without the v.

Most of my time was spend reviewing mongodb / mongoose documentation,
as this was the first time i actually used them.


# installation and usage
Simply clone the git repository and change the mongodb connection string,
which is found in api.js

Currently, I've running mongodb with the following command:
// mongod --dbpath ./mongodb --port 1234

Start the app with 'npm start'

The index of the api 'localhost:4000/' has documentation of every api route.




# notes
Import vs Require?

I'm aware I am currently using commonjs method to manage modules, instead of es6. 
No real reason for doing this besides it's already what i know, 
although i do understand the differences:
commonjs is sync and a node specific thing.
modules in es6 is a newer js feature, and use imports instead of require, which are async

Errors

Currently i am passing mongoose validation errors out for the api. But for db level
errors like a not found id, i am passing this out as well. The two formats don't match here, 
and probaly not smart to expose db error to production api, but this would require
more work than required right now...

Repair params

Didn't check if itemName or customerEmail exit when a repair is created.
definitely should in production as this could add confusion. 
was running short on time

More abstraction / helper files

Database connection strings and some of that code could possibly be in a different file.
It would look cleaner.