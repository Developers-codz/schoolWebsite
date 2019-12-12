const express = require('express')

const app = express()

app.use(express.static(__dirname + '/public'));
app.set('view engine','pug')
app.set('views', 'views')

app.get('/', (req, res) =>{
    res.render('home')
})

app.get('/admission', (req, res) =>{
    res.render('admission')
})

app.get('/student_login', (req, res) =>{
    res.render('login')
})

app.get('/parent_login', (req, res) =>{
    res.render('login')
})

app.get('/teacher_login', (req, res) =>{
    res.render('login')
})

app.get('/librarian_login', (req, res) =>{
    res.render('login')
})

app.get('/admin_login', (req, res) =>{
    res.render('login')
})

app.get('/image' , (req,res) => {
    res.render('image')
})
app.listen(8000)