import express from 'express';

const app = express();
const port = 8000;

let posts = [];
let idcnt = 1;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.set({'Content-Type': 'text/html; charset-utf-8'});
    res.end('Hello, World!');
});

app.post('/posts', (req, res) => {
    const {title, name, text} = req.body;
    console.log(`Typeof req.body is ${typeof req.body} and ${title}'s id is ${idcnt}`);
    posts.push({id: idcnt++, title, name, text, createdDt: Date()});
    res.json({title, name, text});
});

app.delete('/posts/:id', (req, res) => {
    let id = req.params.id;
    let filterd = posts.filter(post => post.id != id)

    if(filterd.length == posts.length){
        res.json(`There is no id ${id}.`)
    } else res.json(`Done! id ${id} has been succesfully deleted.`);

    posts = filterd;

});

app.listen(port, _ => {
    console.log(`App is listening on port ${port}!`);
});