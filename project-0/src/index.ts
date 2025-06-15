import app from './app';
import dotenv from 'dotenv';

dotenv.config();
const port = process.env.PORT || 3000;

//The main entry point.
app.listen(port, () => {
  console.log(`Elite Care Mock API is running at http://localhost:${port}/api/mock/mockData`);
  console.log(`Health check at http://localhost:${port}/`);
});