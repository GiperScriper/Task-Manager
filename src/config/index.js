const domain = 'http://192.168.1.218:3000';
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
