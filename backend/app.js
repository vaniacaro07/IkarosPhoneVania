// require
const cookieParser = require('cookie-parser');
const express = require('express');
const path = require('path');
const methodOverride = require('method-override')
const session = require('express-session');
const auth = require('./middlewares/auth')

const app = express();

app.use(express.static(path.resolve ('public')));
app.use(express.static(path.resolve ('views')));
app.use(express.urlencoded({extended:false}));//Para capturar lo que llegue del form en un obj lit.
app.use(express.json());
app.use(cookieParser())
app.use(methodOverride("_method"));
app.use(session({
    secret:"secret", 
    resave: false, 
    saveUninitialized: false }));
app.use(auth)


app.set('view engine', 'ejs')//configuracion EJS


//routers require and use
const apiIndexRouter = require('./routers/api/apiIndex');
const apiUsersRouter = require('./routers/api/apiUsers');
const apiProductsRouter = require('./routers/api/apiProducts')
// const rutaProducts = require('./routers/products');

app.use('/api',apiIndexRouter);
app.use('/api',apiUsersRouter);
app.use('/api', apiProductsRouter);
// app.use('/',rutaProducts);

app.listen(3001,()=> console.log('servidor corriendo'));

app.use((req, res, next)=>{
    res.status(404).render('404-page');
    next();
})