import { Router } from "express";
import * as estudioController from "../controllers/estudioController.js";
import validarId from "../middlewares/validarId";

const router = Router();

router.app.get("/", estudioController.listar);

router.app.get("/:id", validarId, estudioController.buscarPorId);

router.app.post("/", estudioController.criar);

router.app.put("/:id", validarId, estudioController.atualizar);

router.app.delete("/:id", validarId, estudioController.excluir);