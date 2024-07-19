
import express, {request} from 'express'



const app = express()

app.get('/users' , (req, res) => {
    app.send('ok deu bom')
})


app.listen(3000)