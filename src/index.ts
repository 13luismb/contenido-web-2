import express from 'express';
import router from './routes';
const app = express();

app.use('/views', express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.get('/', (req: any, res: any) => {
  res.redirect('views/index.html');
});
app.use('/', router);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

export default app;
