import express from "express"
import { createTodo, deleteTodo, getTodo, updateTodo } from "../controller/todo.js";

const router = express.Router();

router.post("/get",getTodo)
router.post("/create",createTodo)
router.post("/id",updateTodo)
router.post("/delete",deleteTodo)


export default router;