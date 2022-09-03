const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/fruitsDB", {
  useNewUrlParser: true,
});

const fruitSchema = new mongoose.Schema({
  name: { type: String, required: [true, "You must enter a name for the fruit."] },
  rating: { type: Number, min: 1, max: 10 },
  review: String,
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
  name: "Apple",
  rating: 7,
  review: "Pretty solid as a fruit.",
});

// fruit.save();

const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

const Person = mongoose.model("Person", personSchema);

const person = new Person({
  name: "Umer",
  age: 19,
});

// person.save();

const pineapple = new Fruit({
  name: "Pineapple",
  score: 10,
  review: "=D",
});

const orange = new Fruit({
  name: "Orange",
  score: 7,
  review: ":)",
});

const mango = new Fruit({
  name: "Mango",
  score: 8,
  review: "=)",
});

Fruit.insertMany([pineapple, orange, mango], function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Succesfully saved all the fruits to fruitsDB");
  }
});

Fruit.find(function (err, fruits) {
  if (err) {
    console.log(err);
  } else {
    mongoose.connection.close();
    fruits.forEach(function (fruit) {
      console.log(fruit.name);
    });
  }
});
