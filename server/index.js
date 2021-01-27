const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express();
const config = require('./config/key');
const registerRouter = require('./routes/register');
const loginRouter = require('./routes/login');
const logoutRouter = require('./routes/logout');
const authRouter = require('./routes/auth');
const boardRouter = require('./routes/board');
const userRouter = require('./routes/user');
const favoriteRouter = require('./routes/favorite');
const mongoose = require("mongoose");

const connect = mongoose.connect(config.mongoURI, 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
    }
).then(() => console.log("MongoDB connected..."))
.catch(err => console.log(err));

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());

app.use('/register', registerRouter);
app.use('/login', loginRouter);
app.use('/logout', logoutRouter);
app.use('/auth', authRouter);
app.use('/board', boardRouter);
app.use('/user', userRouter);
app.use('/favorite', favoriteRouter);

const port = 8080;
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})



            