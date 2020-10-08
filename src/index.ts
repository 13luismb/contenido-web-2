import './config/aliases';
import express from 'express';
import session from 'express-session';
import passport from 'passport';
import cors from 'cors';
import { LocalStrategy, JwtStrategy } from '@utils/Strategies';
import router from './routes';

const app = express();

app.use('/views', express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  session({
    secret: process.env.SESSION_SECRET || 'octocat',
    resave: true,
    saveUninitialized: true,
  })
);

app.get('/', (req: any, res: any) => {
  res.redirect('views/index.html');
});

passport.use('jwt', JwtStrategy);
passport.use(LocalStrategy);

passport.serializeUser((user, done) => {
  done(null, JSON.stringify(user));
});

passport.deserializeUser((user: string, done) => {
  done(null, JSON.parse(user));
});

app.use(passport.initialize());
app.use(passport.session());

app.use(
  cors({
    origin: true,
    credentials: true,
    methods: 'POST, PUT, GET, DELETE, OPTIONS, PATCH',
    allowedHeaders: 'Accept, Content-Type, Accept-Encoding, Content-Length, Authorization',
  })
);

app.use('/', router);

export default app;
