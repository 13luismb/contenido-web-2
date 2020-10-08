import './config/aliases';
import express from 'express';
import session from 'express-session';
import passport from 'passport';
import cors from 'cors';
import { LocalStrategy } from '@utils/Strategies';
import router from './routes';

const app = express();

app.use('/views', express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  session({
    secret: 'keyboardcat',
    resave: false,
    saveUninitialized: false,
  })
);

app.use(
  cors({
    origin: true,
  })
);

app.get('/', (req: any, res: any) => {
  res.redirect('views/index.html');
});

passport.use(LocalStrategy);

passport.serializeUser((user, done) => {
  done(null, JSON.stringify(user));
});

passport.deserializeUser((user: string, done) => {
  done(null, JSON.parse(user));
});

app.use(passport.initialize());

app.use(passport.session());

app.use('/', router);

export default app;
