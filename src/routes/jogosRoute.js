import { Router } from "express";
import * as jogosController from "../controllers/jogosController.js";
import validarId from "../middlewares/validarId";

const router = Router();

router.app.get("/", jogosController.listar);

router.app.get("/:id", validarId, jogosController.buscarPorId);

router.app.post("/", jogosController.criar);

router.app.put("/:id", validarId, jogosController.atualizar);

router.app.delete("/:id", validarId, jogosController.excluir);