import app from './app.js'
import { connectDB } from './database/db.js'

connectDB()

app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'))
});