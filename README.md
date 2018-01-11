# Toy Robot


To set up run (provided you have npm installed prior)
```
npm install
npm run build
npm start
```

Then visit [http://localhost:3000/](http://localhost:3000/)


In the browser console you can run the following commands

```
PLACE(1,2, Robot.FACES.NORTH)
LEFT()
RIGHT()
MOVE()
REPORT()
```
Optionally a string can be passed as the the thrid parameter of `PLACE`. To see valid options see `Robot.FACES`.

### Testing
For a single test run

`npm test`

For continuious testing

`karma start --auto-watch`