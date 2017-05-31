const domain = 'http://localhost:3000';
const basePrefix = '/api/v1';
const urls = {
  users: '/users',
  currentUser: '/users/current',
  login: '/users/login',
  logout: '/users/logout',
  usersId: '/users/:id',
  projects: '/projects',
  projectsId: '/projects/:id',
};

Object.keys(urls).map((key) => {
  urls[key] = `${domain}${urls[key]}`;
});

export default urls;
