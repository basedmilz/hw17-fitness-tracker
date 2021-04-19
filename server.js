const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan")

const PORT = process.env.PORT || 3000;

const app = express();
app.use(logger('dev'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/workout',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    }
  );

app.use(require('./routes/htmlroutes'));
app.use(require('./routes/apiRoutes'))

  app.listen(PORT, () => {
      console.log('App running on http://localhost:' + PORT)
  });

//   mongodb+srv://basedmilz:<>@cluster0.q9zzw.mongodb.net/workout?retryWrites=true&w=majority