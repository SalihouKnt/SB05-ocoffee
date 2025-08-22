import express from 'express';
import { router } from './routers/main.router.js';

// Create Express app
const app = express();
const PORT = process.env.PORT || 3000;

// Configure view engine
app.set('view engine', 'ejs');
app.set('views', './views');

// Configure assets routes (static folder)
app.use(express.static('./public'));

// Favicon static route
app.use('/favicon.ico', express.static('./public/images/logo.svg'));

// Use router
app.use(router);

// Start server
app.listen(PORT, () => {
  console.log(`app is running on http://localhost:${PORT}`);
});
