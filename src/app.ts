import express, {Request, Response} from "express";
import "dotenv/config";
import * as mongoose from "mongoose";
import EleveService from "./eleves/Eleve.service";
import eleveConnector from "./eleves/Eleve.repository";
import router from "./eleves/Eleve.router";

// la connexion avec la base de donnée se fait dans le main ( le entry point de l'application ) et non dans le repo
// on va donc définir la connexion à cette endroit
// pas besoin de stocker dans une variable demande juste de lancer la connection
mongoose.connect(`${process.env.mongoURI}`);
// c'est (déprecate ils demandent de le mettre sur false
mongoose.set("strictQuery", false);

const app = express();
const port = process.env.PORT;

// middleware
// vont s'exécuter avant le reste des fonction de l'application
// dit que si recup du json, il doit pouvoir le lire et l'envoyer

// express.json() is a built in middleware function in Express starting from v4.16.0.
// It parses incoming JSON requests and puts the parsed data in req.body.
app.use(express.json());
app.use(express.urlencoded());
app.use(router);

// ===============================================================
// le listen est important et ce qui permet de lancer le server
app.listen(port, () => {
  console.log("je suis connecté sur le port", port);
});
