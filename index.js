const mongoose = require('mongoose');
const startServer = require('./server');
const seedCountries = require('./api/seed/seedCountries');

const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb+srv://Andrey:Bbov2mDoX65xH3Jr@cluster0.spx7etj.mongodb.net/';

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');

  // Opcional: poblar la base de datos con datos de países
  // seedCountries();

  // Iniciar el servidor
  startServer(PORT);
});
