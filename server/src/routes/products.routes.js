import { Router } from "express";

const router = Router();

router.get("/",(req,res)=>{
  res.send({messager:"Api creada por Rodrigo Marure"})
})

export default router;