import express from 'express';
import mongoose from 'mongoose';
import routes from './Routes';

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
    mongoose.connect('mongodb://192.168.99.100:27017/safeapp', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    });
  }

  middlewares() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
