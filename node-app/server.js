const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieSession = require("cookie-session");
const passport = require("passport");
const googleStrategy = require("passport-google-oauth20");
const cors = require("cors");

const userApi = require("./controllers/api");
const router = require("./routes/router");

const app = express();
mongoose.connect("mongodb://localhost/mongooseTest", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(cors());

app.use(
  bodyParser.json(),
  bodyParser.urlencoded({
    extended: true
  })
);

app.use(
  cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: ["thisismykey"]
  })
);

passport.serializeUser((user, done) => {
  done(null, user.googleId);
});

passport.deserializeUser(async (userGoogleId, done) => {
  let user = await userApi.getUserByGoogleId(userGoogleId);
  done(null, user);
});

passport.use(
  new googleStrategy(
    {
      callbackURL: "/auth/google/redirect",
      clientID:
        "716280916742-897gltk8ssnr8r7seu99v06pt4saj8a6.apps.googleusercontent.com",
      clientSecret: "ygM74nRSiwkLio0NIDOwvQ1n"
    },
    async (accessToken, refreshToken, profileData, done) => {
      try {
        let user = await userApi.getUserByGoogleId(profileData.id);
        if (!user) {
          let newUser = {
            name: profileData.displayName,
            email: profileData.emails[0].value,
            googleId: profileData.id,
            picture: profileData.photos[0].value
          };
          let insertedUser = await userApi.addUser(newUser);
          done(null, insertedUser);
        } else {
          done(null, user);
        }
      } catch (err) {
        console.log(err);
      }
    }
  )
);

app.use(passport.initialize(), passport.session());

app.use(express.static("./public"));
app.use("/", router);

app.listen(5000, () => {
  console.log("Server running at http://127.0.0.1:5000");
});
