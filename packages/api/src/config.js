require('dotenv').config();

const db = {
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  name: process.env.DATABASE_NAME,
  user: process.env.DATABASE_USER,
  pass: process.env.DATABASE_PASS,
  atlas: process.env.NODE_ENV === 'production' ? '+srv' : '',
};

const config = {
  app: {
    port: process.env.PORT,
  },
  mongodb: {
    uri: `mongodb${db.atlas}://${db.host}/${db.name}?retryWrites=true&w=majority`,
    options: {
      user: db.user,
      pass: db.pass,
      useUnifiedTopology: true,
      useNewUrlParser: true,
    },
  },
};

module.exports = config;
