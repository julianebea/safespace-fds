import express from 'express';
import mongoose from 'mongoose';

const app = express();
mongoose.connect(
    'mongodb://192.168.99.100:27017/safeapp',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    }
);