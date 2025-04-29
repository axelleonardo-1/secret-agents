import express from 'express';
import { join } from 'path';
import { engine } from 'express-handlebars';
import { connect } from 'mongoose';
import { config } from 'dotenv';
config();

import routes from './routes/index';

const port = process.env.PORT || 3000;

const app = express();
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './src/views');


const publicPath = join(__dirname, '..', 'public');
app.use('/assets', express.static(publicPath));

app.use(routes);

const uri = process.env.MONGO_URI;

if (uri) {
    connect(uri).then(() => {
        app.listen(port, () => {
            console.log(`app is running in port ${port}`);
        });
    }).catch(e => {
        console.log('Failed to connect to mongodb', e);
    })
} else {
    app.listen(port, () => {
        console.log(`app is running in port ${port} without database`);
    });
}

