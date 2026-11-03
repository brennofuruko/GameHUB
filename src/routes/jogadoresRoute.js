import { Router } from "express";
import * as jogadoresController from "../controllers/jogadoresController.js";
import validarId from "../middlewares/validarId";

const router = Router();

router.app.get("/", jogadoresController.listar);

router.app.get("/:id", validarId, jogadoresController.buscarPorId);

router.app.post("/", jogadoresController.criar);

router.app.put("/:id", validarId, jogadoresController.atualizar);

router.app.delete("/:id", validarId, jogadoresController.excluir);