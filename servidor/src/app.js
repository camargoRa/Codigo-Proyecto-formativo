import express from 'express';
import config from './config';
import cors from 'cors'
import talleresRoutes from './routes/Tallerusers.routes'

const app = express();

app.set('port', config.port)
app.use(cors({
    origin: 'http://localhost:5173'
}));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(talleresRoutes)

export default app