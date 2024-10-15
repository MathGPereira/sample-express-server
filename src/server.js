import { app } from './app.js';

const PORT = process.env.PORT || 8080;

app.listen(
  PORT,
  '0.0.0.0',
  () => process.env.NODE_ENV === 'development'
    ? console.log(`Server is running on http://localhost:${PORT}`)
    : ''
);
