
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const ejs = require('ejs');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

mongoose.connect('mongodb://127.0.0.1:27017/wikiDB', { useNewUrlParser: true});


app.listen('3000', () => {
    console.log("Server started on port 3000");
    }
);

//Creating a schema
const articleSchema = new mongoose.Schema({
    title: {type: String, required: [true, "Please enter a title"]},
    content: String
});

//Creating a model
const Article = mongoose.model('Article', articleSchema);

//Creating a RESTful API and then chaining the routes together

app.route('/articles')
    .get((req, res) => {
        Article.find({})
            .then(foundArticles => {
                res.send(foundArticles);
            })
            .catch(err => {
                res.send(err);
            });
    })
    .post((req, res) => {
        const title = req.body.title;
        const content = req.body.content;
        const newArticle = new Article({
            title: title,
            content: content
        });

        newArticle.save()
        .then(() => {
            res.send("Successfully added a new article");
        })
        .catch(err => {
            res.send(err);
        });

    })

    .delete((req, res) => {
        Article.deleteMany({})
            .then(() => {
                res.send("Successfully deleted all articles");
            })
            .catch(err => {
                res.send(err);
            });
    })


//////////////////////////Requests targeting a specific article//////////////////////////


app.route("/articles/:articleTitle")
    .get(function (req, res) {
        Article.findOne({ title: req.params.articleTitle })
            .then(foundArticle => {
                if (foundArticle) {
                    res.send(foundArticle);
                } else {
                    res.send("No articles matching that title was found");
                }
            })
            .catch(err => {
                res.send(err);
            });
    })


    .put(function (req, res) {
        Article.updateOne({ title: req.params.articleTitle }, { title: req.body.title, content: req.body.content }, { overwrite: true }).then(
            () => {
                res.send("Successfully updated article");
            }
        ).catch(err => {
            console.log(err);
        });
    })

    .patch(function (req, res) {
        Article.updateOne({title: req.params.articleTitle}, {$set: req.body}).then(
            () => {
                res.send("Successfully updated article");
            }
        ).catch(err => {
            console.log(err);
        });
    })

    .delete(function (req, res) {
        Article.deleteOne({title: req.params.articleTitle}).then(
            () => {
                res.send("Successfully deleted article");
            }
        ).catch(err => {
            console.log(err);
        });
    });