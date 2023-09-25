import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import postRoutes from './routes/posts.js';

const app = express();

app.use('/posts', postRoutes);

app.use(bodyParser.json({ limit: "30mb", extended: true} ));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true} ));
app.use(cors());

const CONNECTION_URL = 'mongodb+srv://SarahSharroufna:1234567890@cluster0.bvympnm.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp';
const PORT = process.env.PORT || 5010;


mongoose.connect(CONNECTION_URL, {UseNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error)=> console.log(error.message));

 