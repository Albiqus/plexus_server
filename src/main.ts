import express from 'express';

const PORT = process.env.PORT || 5000

const app = express()

app.use(express.json())

const start = () => {
    try {
        app.listen(PORT, () => console.log(`server started on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()