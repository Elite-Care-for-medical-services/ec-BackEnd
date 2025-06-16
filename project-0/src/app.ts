import express from 'express';
import router from './routers/team.routes';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).send('Elite Care Project0 API is running!');
});

app.use('/teams', router);

export default app;