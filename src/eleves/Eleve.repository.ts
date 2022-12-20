import * as mongoose from "mongoose";
import {eleveSchema} from "./Eleve.dao";

// prend 3 choses : nom du modele et schema ( les deux premier sont des arguments obligatoire ),
// et le 3ieme si on renomme la collection ( par défaut prend le nom du premier argument avec une maj )
const eleveConnector = mongoose.model("eleve", eleveSchema, "eleves");
// connector qui permet de faire des requetes,

export default eleveConnector;

// on defini la connexion avec la base de donnée ( mongo et cette connection on le fait dans app.ts)
