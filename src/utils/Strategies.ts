import { getUserByUsername, comparePassword } from '@helpers/auth';
import { Strategy as Local } from 'passport-local';

const LocalStrategy = new Local(
  {
    usernameField: 'username',
    passwordField: 'password',
  },
  async (username, password, done) => {
    try {
      const user = await getUserByUsername(username);
      if (!user) return done(null, false);
      const isMatch = await comparePassword(password, user.password);
      delete user.password;
      return isMatch ? done(null, user) : done(null, false);
    } catch (e) {
      return done(null, false);
    }
  }
);

export { LocalStrategy };
