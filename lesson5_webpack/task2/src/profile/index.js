import { fetchUser } from './gateway.js';
import printProfile from './printprofile.js';

fetchUser('github').then(({ name, location }) =>
  printProfile({
    name,
    location,
  })
);
