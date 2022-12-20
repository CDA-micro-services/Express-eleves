import * as mongoose from "mongoose";

/*
    mongoose ORM = outils se mettre entre application et base de donnée pour faire les requetes ( pas à la main )
    et l'intérêt c'est que c'est sécursié
    On défini par le code la base de donnée 
*/

type eleveType = {
  nom: String;
  prenom: String;
  classe: String;
};

// sur mongoose les attributs sont déclaré à la création du schema
const eleveSchema = new mongoose.Schema({
  nom: String,
  prenom: String,
  classe: String,
});

export {eleveSchema, eleveType};
