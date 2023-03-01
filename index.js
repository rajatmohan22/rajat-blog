const express = require('express');
const app = express();
app.set('view engine','ejs');
app.use(express.static(__dirname + '/public'));
console.log(__dirname+'/public')
const bodyparser = require('body-parser');
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())


app.route('/')
.get((req,res)=>{
    res.render('Posts/index')
})

app.route('/posts/:pid')
.get((req,res)=>{
    const {pid} = req.params;
    if(pid=="rdpd") res.render('Posts/rdpd');
    else if(pid=="financial-ed") res.render('Posts/rdpd')
})


app.listen(3000,()=>{
    console.log('App listening on port 3000');
})