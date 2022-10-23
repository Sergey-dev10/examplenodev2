import express from 'express'
import mongoose from 'mongoose'
import fileUpload from 'express-fileupload'
import router from './router.js'

const app = new express()

const PORT = 5000
const DB_URL = 'mongodb+srv://sereja1010:qwert159753@cluster0.umd74d2.mongodb.net/?retryWrites=true&w=majority'

app.use(express.json())
app.use(fileUpload({}))
app.use('/api', router)

async function startApp() {
    try {
        await mongoose.connect(DB_URL)
        app.listen(PORT, () => `Server was started on ${PORT} port`)
    } catch (e) {
        console.log(e)
    }
}

startApp()