const express = require('express')
const cors = require('cors')

const userRouter = require('./routes/userRoutes')
const connectToDatabase = require('./config/database')

const app = express();

const PORT = process.env.PORT || 3000;

connectToDatabase()
.then(() => {

    app.use(cors({ origin: 'http://localhost:5173', credentials: true }))
    app.use(express.json());
    app.use('/api/users', userRouter);

    app.listen(PORT, ()=>{
        console.log(`listening on server ${PORT}`);
    })

})
.catch((error)=>{
    console.log('server.js error - ',error)
})



