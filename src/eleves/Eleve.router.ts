import express from "express";
import eleveConnector from "./Eleve.repository";
import EleveService from "./Eleve.service";
import EleveController from "./Eleve.controller";

const service = new EleveService(eleveConnector);
const controller = new EleveController(service);

const router = express.Router();

router.get("/", controller.getAll);
router.get("/classe/:idClasse", controller.getByClass);
router.get("/:id", controller.getById);
router.post("/", controller.post);
router.delete("/:id", controller.delete);
router.put("/:id", controller.update);

export default router;
