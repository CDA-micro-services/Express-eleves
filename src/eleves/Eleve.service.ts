import eleveConnector from "./Eleve.repository";
import {eleveType} from "./Eleve.dao";

export default class EleveService {
  private repo: any;

  constructor(repository: typeof eleveConnector) {
    this.repo = repository;
  }

  // Promose<eleveType[]>
  // si retourne pas promise use .then
  // sans promise pas de .then()
  public async getAll(): Promise<eleveType[]> {
    return await this.repo.find();

    //.then((t: any) => console.log(t));
    // recup une promise et quand la promise est fini il la log
  }

  // c'est du async donc le controler doit être en async aussi
  // await on attend que async soit fini pour le faire
  public async saveEleve(eleve: eleveType): Promise<eleveType> {
    return await this.repo.create(eleve);
  }

  public async getById(id: String): Promise<eleveType> {
    return await this.repo.findById(id);
  }

  // findOneById = supprime le premier element qui correspond au filtre renseigné {_id : id } _ nécessaire pour lui reconnaitre l'attribut
  public async deleteEleve(id: String) {
    return await this.repo.findByIdAndDelete(id);
  }

  public async deleteById(id: String) {
    return await this.repo.deleteById(id);
  }

  public async getByClasse(classe: String): Promise<eleveType[]> {
    return await this.repo.find({classe: classe});
  }

  public async update(id: String, eleve: eleveType): Promise<eleveType> {
    return await this.repo.findByIdAndUpdate(id, eleve);
  }
}
