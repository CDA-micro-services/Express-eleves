import EleveService from "./Eleve.service";
import express, {Request, Response} from "express";

class EleveController {
  private service: EleveService;

  constructor(service: EleveService) {
    this.service = service;
  }

  public getAll = async (req: Request, res: Response) => {
    const data = await this.service.getAll().then((data: any) => data);
    res.send(data);
  };

  public post = async (req: Request, res: Response) => {
    const eleve = req.body;
    const data = await this.service.saveEleve(eleve).then((eleve: any) => eleve);
    res.send(data);
  };

  public delete = async (req: Request, res: Response) => {
    const id = req.params.id;
    const data = await this.service.deleteEleve(id).then((data: any) => data);
    res.send(data);
  };

  public getById = async (req: Request, res: Response) => {
    const id = req.params.id;
    const data = await this.service.getById(id).then((data) => data);
    res.send(data);
  };

  public getByClass = async (req: Request, res: Response) => {
    const idClasse = req.params.idClasse;
    const data = await this.service.getByClasse(idClasse).then((data) => {
      console.log("c'est data", data);
      return data;
    });

    res.send(data);
  };

  // DOESNT WORK
  public deleteById = async (req: Request, res: Response) => {
    const id = req.params.id;
    const data = await this.service.deleteById(id).then((data) => data);
    if (data) {
      res.send(`Element d'id ${id} a été supprimé`);
    } else {
      res.send("id introuvable");
    }
  };

  public update = async (req: Request, res: Response) => {
    const idEleve = req.params.id;
    const data = await this.service.update(idEleve, req.body).then((data) => data);
    res.send(data);
  };
}

export default EleveController;
