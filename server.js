/*
const express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    mongoose = require('mongoose');
    config = require('./DB');

    const productRoute = require('./routes/product.route');
    mongoose.Promise = global.Promise;
    mongoose.connect(config.DB, { useNewUrlParser: true }).then(
      () => {console.log('Database is connected') },
      err => { console.log('Can not connect to the database'+ err)}
    );

    const app = express();
    app.use(bodyParser.json());
    app.use(cors());
    app.use('/products', productRoute);
    let port = process.env.PORT || 4000;

    const server = app.listen(port, function(){
        console.log('Listening on port ' + port);
    });
*/

/*
const mongoose = require("mongoose");

const db = require("./models");

const createTutorial = function(tutorial) {
  return db.Tutorial.create(tutorial).then(docTutorial => {
    console.log("\n>> Created Tutorial:\n", docTutorial);
    return docTutorial;
  });
};

const createImage = function(tutorialId, image) {
  return db.Image.create(image).then(docImage => {
    console.log("\n>> Created Image:\n", docImage);
    return db.Tutorial.findByIdAndUpdate(
      tutorialId,
      {
        $push: {
          images: {
            _id: docImage._id,
            url: docImage.url,
            caption: docImage.caption
          }
        }
      },
      { new: true, useFindAndModify: false }
    );
  });
};



const createCategory = function(category) {
  return db.Category.create(category).then(docCategory => {
    console.log("\n>> Created Category:\n", docCategory);
    return docCategory;
  });
};

const addTutorialToCategory = function(tutorialId, categoryId) {
  return db.Tutorial.findByIdAndUpdate(
    tutorialId,
    { category: categoryId },
    { new: true, useFindAndModify: false }
  );
};

const getTutorialWithPopulate = function(id) {
  return db.Tutorial.findById(id)
    .populate("comments", "-_id -__v")
    .populate("category", "name -_id")
    .select("-images._id -__v");
};

const getTutorialsInCategory = function(categoryId) {
  return db.Tutorial.find({ category: categoryId })
    .populate("category", "name -_id")
    .select("-comments -images -__v");
};

const run = async function() {
  var tutorial = await createTutorial({
    title: "MongoDB One-to-Many Relationship example",
    author: "bezkoder.com"
  });


  var category = await createCategory({
    name: "Node.js",
    description: "Node.js tutorial"
  });

  tutorial = await addTutorialToCategory(tutorial._id, category._id);
  console.log("\n>> Tutorial:\n", tutorial);

  tutorial = await getTutorialWithPopulate(tutorial._id);
  console.log("\n>> populated Tutorial:\n", tutorial);

  var newTutorial = await createTutorial({
    title: "Mongoose tutorial with examples",
    author: "bezkoder.com"
  });

  await addTutorialToCategory(newTutorial._id, category._id);

  var tutorials = await getTutorialsInCategory(category._id);
  console.log("\n>> all Tutorials in Cagetory:\n", tutorials);
};

mongoose
  .connect("mongodb://localhost/bezkoder_db", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("Successfully connect to MongoDB."))
  .catch(err => console.error("Connection error", err));

run();
*/


var debug = require('debug')('passport-mongo');
var app = require('./app');


app.set('port', process.env.PORT || 3000);


var server = app.listen(app.get('port'), function() {
  debug('Express server listening on port ' + server.address().port);
});
