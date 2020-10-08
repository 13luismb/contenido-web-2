import { getUserByUsername, comparePassword } from '@helpers/auth';
import { Strategy as Local } from 'passport-local';
import { Strategy as JWT, ExtractJwt } from 'passport-jwt';
import { encode } from 'jwt-simple';

const localOptions = {
  usernameField: 'username',
  passwordField: 'password',
};

const LocalStrategy = new Local(localOptions, async (username, password, done) => {
  try {
    const user = await getUserByUsername(username);
    if (!user) return done(null, false);
    const isMatch = await comparePassword(password, user.password);
    return isMatch ? done(null, { ...user, password: undefined }) : done(null, false);
  } catch (e) {
    return done(null, false);
  }
});

const optJwt = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET || 'moviles',
};

const JwtStrategy = new JWT(optJwt, async (payload, done) => {
  return done(null, payload.sub);
});

const generateToken = (user: any) => {
  const timestamp = new Date().getTime();
  return encode({ sub: user, iat: timestamp }, process.env.JWT_SECRET || 'not a secret');
};

export { LocalStrategy, JwtStrategy, generateToken };
