// Requiring mongoose and connecting to the database
const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1/fruitsDB")
    .then(() => {
        console.log("Connected to MongoDB!");
    })
    .catch((err) => {
        console.error(err);
});



//Inserting many documents to the collection
const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please check your data entry, no name specified!"]
    },
    rating: {
        type: Number,
        min: 1,
        max: 10  
    },
    review: String
});


const Fruit = mongoose.model("Fruit", fruitSchema);

const apple = new Fruit({
    name: "Apple",
    rating: 7,
    review: "Pretty solid as a fruit."
});

const kiwi = new Fruit({
    name: "Kiwi",
    rating: 10,
    review: "The best fruit!"
});

const mango = new Fruit({
    name: "Mango",
    rating: 8,
    review: "Decent fruit."
});

const orange = new Fruit({
    name: "Orange",
    rating: 5,
    review: "Vitamin C is good."
});

const banana = new Fruit({
    name: "Banana",
    rating: 4,
    review: "Good for potassium."
});

Fruit.insertMany([apple, kiwi, mango, orange, banana]);



//This will cause an error as name is required when saved!
const fruit = new Fruit(
    {
        rating: 10,
        review: "Peaches are so yummy!"
    }
);

fruit.save().then(() => {
    console.log("Fruit has been saved:", fruit);
}).catch((error) => {
    console.error("Error while saving fruit!! :", error);
});

//Reading Items
Fruit.find().then ((fruits)=>{

    //Prints all the documents in the collection
    fruits.forEach((fruit)=>{
        console.log(fruit.name);
    });    

    //Close the connection
    mongoose.connection.close();

}).catch((err) => {
    console.error(err);
});


//Updating Items
Fruit.updateOne(
    //First argument is the filter
    {_id: "5f1f9b1b1b1b1b1b1b1b1b1b"},
    //Second argument is the update
    {name: "Peach"}
).then(() => {
    console.log("Successfully updated the document!");
}).catch((err) => {
    console.log("Error caught!! :", err);
});

//Deleting Items
Fruit.deleteOne(
    //First argument is the filter
    {_id: "5f1f9b1b1b1b1b1b1b1b1b1b"},
).then(() => {
    console.log("Successfully deleted the document!");
}).catch((err) => {
    console.log("Error caught!! :", err);
});

//Deleting Many Items
Person.deleteMany(
    //First argument is the condition
    {name: "john"},
).then(() => {
    console.log("Successfully deleted all the documents!");
}
)


Fruit.findOneAndDelete(
    {_id: "5f1f9b1b1b1b1b1b1b1b1b1b"},
).then(() => {
    console.log("Successfully deleted the document!");
}).catch((err) => {
    console.log("Error caught!! :", err);
});


//Finds, fethces and deletes the document
const fetched = Fruit.findOneAndRemove(
    {_id: "5f1f9b1b1b1b1b1b1b1b1b1b"},
).then(() => {
    console.log("Successfully deleted the document!");
}).catch((err) => { 
    console.log("Error caught!! :", err);
});







//Creating a document in the collection
const personSchema = new mongoose.Schema({
    id: Number,
    name: String,
    age: Number,
    favouriteFruit: fruitSchema
});

//Creating a model
const Person = mongoose.model("person", personSchema);

//Creating a document
const john = new Person({
    id: 1,
    name: "John",
    age: 21
});

//Saving the document to the collection
john.save().then(() => {
    console.log("Document has been saved:", john);
}).catch((error) => {
    console.error("Error while saving document:", error);
});


//Creating a new fruit 
const pinapple= new Fruit({
    name: "Pinapple",
    score: 9,
    review: "Great fruit."
});

pineapple.save();


const person = new Person({
    id: 2,
    name: "Amy",
    age: 20,
    favouriteFruit: pineapple
});

//Updating John to have a fav fruit too!
People.updateOne(
    {name: "John"},
    {favouriteFruit: pineapple}
).then(() => {
    console.log("Successfully updated the document!");
}).catch((err) => {
    console.log("Error caught!! :", err);
});