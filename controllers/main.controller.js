import { coffeeDataMapper } from '../datamappers/coffee.datamapper.js';

// country coordinates for the map
const countryCoordinates = {
  'Italie': { lat: 41.8719, lng: 12.5674 },
  'Colombie': { lat: 4.5709, lng: -74.2973 },
  'Éthiopie': { lat: 9.1450, lng: 40.4897 },
  'Brésil': { lat: -14.2350, lng: -51.9253 },
  'Guatemala': { lat: 15.7835, lng: -90.2308 },
  'Kenya': { lat: -0.0236, lng: 37.9062 },
  'Indonésie': { lat: -0.7893, lng: 113.9213 },
  'Costa Rica': { lat: 9.7489, lng: -83.7534 },
  'Vietnam': { lat: 14.0583, lng: 108.2772 },
  'Tanzanie': { lat: -6.3690, lng: 34.8888 },
  'Jamaïque': { lat: 18.1096, lng: -77.2975 },
  'Rwanda': { lat: -1.9403, lng: 29.8739 },
  'Panama': { lat: 8.5380, lng: -80.7821 },
  'Pérou': { lat: -9.1900, lng: -75.0152 },
  'Hawaï': { lat: 20.7967, lng: -156.3319 },
  'Nicaragua': { lat: 12.8654, lng: -85.2072 }
};

export const mainController = {

  // home page
  async home(req, res) {
    // Get latest 3 coffees
    const coffees = await coffeeDataMapper.findLatest(3);

    res.locals.style = 'home';
    res.render('home', { coffees });
  },

  // catalog page
  async catalog(req, res) {
    // Get all coffees
    const coffees = await coffeeDataMapper.findAllWithCategories();

    res.locals.style = 'catalog';
    res.render('catalog', { coffees });
  },

  // coffee details page
  async coffeeDetails(req, res, next) {
    const { id } = req.params;

    // Get coffee by id
    const coffee = await coffeeDataMapper.findById(id);

    // If coffee not found, pass to next middleware
    if (!coffee) {
      return next();
    }

    // Get coordinates for the coffee's origin
    const origin = coffee.origin;
    const coordinates = countryCoordinates[origin];

    res.locals.style = 'detail';
    res.render('detail', { coffee, coordinates });
  },

  // about page
  about(req, res) {
    res.locals.style = 'about';
    res.render('about');
  },

};