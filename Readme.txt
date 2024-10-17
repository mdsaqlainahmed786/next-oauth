I have used the Next auth library for the user authentication.
Here are all the steps breakdown:
1) Create a account on the next auth
2) Take the providers link from the google console and git hub developer settings
3) Destructure the session from the useSession provided from the next auth
5) Take the code from the next auth library and make a folder structure shown
6) Create a mongoDB instance and acquire the link of instance
7) Make the DB connection once because next js uses hot reloading
8) Create a api which will check if the session is present, If yes then check for the user, if user already exists in the DB then do nothing, else add it in DB
9) Your authentication is ready to take in the users