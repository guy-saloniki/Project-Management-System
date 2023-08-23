const express = require('express');
require('dotenv').config();
const { graphqlHTTP } = require('express-graphql');
const cors = require('cors');
const schema = require('./schema/schema');
const connectDB = require('./config/db');
const path = require('path');

const port = process.env.PORT || 5000;

const app = express();

// Connect DB
connectDB();

app.use(cors());

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development',
  })
);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../frontend/build')));

  app.get('*', (req, res) =>
    res.sendFile(__dirname, '../', 'frontend', 'build', 'index.html')
  );
}

app.listen(port, () => {
  console.log(`App is listening on port: ${port}`);
});
