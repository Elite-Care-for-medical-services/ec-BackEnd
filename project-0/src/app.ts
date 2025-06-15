import express from 'express';
import mockRoutes from './routes/mock.routes';

const app = express();

app.use(express.json());
//to understand the JSON data sent

app.get('/', (req, res) => {
  res.status(200).send('Elite Care Project0 API is running!');
});
//to check if the api is working

app.use('/api/mock', mockRoutes);
//to get the data

app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});
//in case of an error

export default app;