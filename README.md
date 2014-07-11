STORY TELLER
============

This is project is about writing little stories to entertain kids. Specially when the have to go to bed.

Also i like to try the population of mongoose.

## requirements
1. node && npm intalled
2. mongodb up and running

## clone the repo
```
git clone -b develop git@github.com:popigg/storyteller.git
```

## Install packages
```
cd storyteller
npm install
```

## make it run
```
node app.js
```

The app will run in your localhost port 3000.

## how to create with populationg
```
curl -X POST -H "Content-Type: application/json" -d '{"author": {"fullName": "Lucas Ramonez Garcia", "age": 23}, "story": {"title": "bla bla", "body": "test test test"}}' http://localhost:3000/story
```

the result must be something like this:

```
{"__v":0,"title":"bla bla","body":"test test test","author":"53bf969e1df4c5301602a0f7","_id":"53bf969e1df4c5301602a0f8","updated_at":"2014-07-11T07:47:42.307Z","created_at":"2014-07-11T07:47:42.307Z"}
```

## how to get an object back
```
curl http://localhost:3000/story/53bf969e1df4c5301602a0f8
```

You will get something like
```
{"_id":"53bf969e1df4c5301602a0f8","title":"bla bla","body":"test test test","author":{"_id":"53bf969e1df4c5301602a0f7","fullName":"Lucas Ramonez Garcia","age":23,"__v":0,"upadated_at":"2014-07-11T07:47:42.013Z","created_at":"2014-07-11T07:47:42.013Z"},"__v":0,"updated_at":"2014-07-11T07:47:42.307Z","created_at":"2014-07-11T07:47:42.307Z"}
```

So population of mongoose worked as expected.

For next step we need to see how to deal to get several authors for the same story.