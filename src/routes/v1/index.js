const express = require('express');
const authRoute = require('./auth.route');
const userRoute = require('./user.route');
const doctorRoute = require('./doctor.route');
const heartPatientRoute = require('./heartPatient.route');
const lungPatientRoute = require('./lungPatient.route');
const config = require('../../config/config');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/auth',
    route: authRoute,
  },
  {
    path: '/users',
    route: userRoute,
  },
  {
    path: '/heart-patients',
    route: heartPatientRoute,
  },
  {
    path: '/lung-patients',
    route: lungPatientRoute,
  },
  {
    path: '/doctors',
    route: doctorRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

/* istanbul ignore next */
// if (config.env === 'development') {
//   devRoutes.forEach((route) => {
//     router.use(route.path, route.route);
//   });
// }

module.exports = router;
