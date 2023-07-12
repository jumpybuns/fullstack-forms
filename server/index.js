import express from 'express';
import ViteExpress from 'vite-express';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/message', (req, _res) => {
  console.log('CONSOLE', req.body);
});

ViteExpress.listen(app, 3001, () => {
  console.log('Big Bro is listening');
});
