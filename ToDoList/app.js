const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const _ = require('lodash');
//Requiring mongoose
const mongoose = require('mongoose');

const app = express();
app.use(express.static("public"));
app.set("view engine", "ejs");

//Connecting to local database
mongoose.connect("mongodb://127.0.0.1/todolistDB");

const itemSchema = {
    name:{
        type: String,
        required: true
    }

}


const Item = mongoose.model("Item", itemSchema);


const item1 = new Item({
    name: "Welcome to your todolist!"
});

const item2 = new Item({
    name: "Hit the + button to add a new item."
});

const item3 = new Item({
    name: "<-- Hit this to delete an item."
});
const defaultItems = [item1, item2, item3];


//New schema for custom lists
const listSchema = {
    name: String,
    items: [itemSchema]
};
//Creating a new model for the custom lists
const List = mongoose.model("List", listSchema);





//Requiring a local module
const day = require(__dirname + "/date.js");

app.use(bodyParser.urlencoded({extended: true}));

app.listen(3000, function(){
    console.log("Server started on port 3000")
});






app.get("/", function(req, res){

    Item.find({}).then((foundItems) => {

        let date = day.getDate();

        if (foundItems.length === 0) {
            Item.insertMany(defaultItems).then(() => {
                console.log("Successfully inserted default items using mongoDB");
            }).catch((err) => {
                console.log(err);
            })

            res.redirect("/");
        }

        else{
            res.render("list", { ListTitle: date, newListItemz: foundItems });
        }

       

    }).catch((err) => {
        console.log(err);
    });

    
});


app.post("/", function(req, res){

    const itemName = req.body.newItem;
    const listName = req.body.list;

    //console.log(listName);

    const item = new Item({
        name: itemName
    });

    //Checking if the submit button was pressed on localhost:3000 or a custom list page
    if(listName == day.getDate() ){

        item.save().then(() => {
            console.log("Successfully added new item");
        })
        res.redirect("/");
    }else {
        
        List.findOne({name: listName}).then((foundList) => {

            foundList.items.push(item);
            foundList.save().then(() => {
                res.redirect("/" + listName);
            });
        });
    }

});


app.post("/delete", function(req, res){

    const checkedItemId = req.body.checkbox;
    const listName = req.body.listName;

    //Checking if the delete button was pressed on localhost:3000 or a custom list page
    if(listName == day.getDate() ){

        Item.findByIdAndRemove(checkedItemId).then(() => {
            console.log("Successfully deleted checked item");

        }).catch((err) => {
            console.log(err);
        });
        res.redirect("/");
    }

    //If the delete button was pressed on a custom list page
    else{
        Item.findByIdAndUpdate({name: listName}, { $pull: { items: { _id: checkedItemId } } }).then((foundList) => {

            console.log("Successfully deleted checked item");
            res.redirect("/" + listName);
        
        }).catch((err) => {
            console.log(err);
        });

    }


});



app.get("/:customListName", function(req, res){

    const customListName = _.capitalize(req.params.customListName);


    List.findOne({name : customListName}).then((foundList) => {
        
        if (!foundList) {

            //Creating a new list
            const list = new List({
                name: customListName,
                items: defaultItems
            });

            
            //Saving the new list to the database
            list.save().then(() => {
                console.log("Successfully added new custom list");
            }).catch((err) => {
                console.log(err);
            });

            res.redirect("/" + customListName);
            
        }else {

            //Show an existing list
            res.render("list", { ListTitle: foundList.name, newListItemz: foundList.items });
        
        } 
    });
    

});




app.get("/work", function(req, res){
    
    res.render("list", {ListTitle: "Work List", newListItemz: workItems});

});



app.get("/about", function(req, res){
    res.render("about");
})