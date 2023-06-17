import express from 'express'

import { Router, Request, Response } from 'express';

const app = express();

const route = Router()

app.use(express.json())

route.get('/', (req: Request, res: Response) => {
  res.send("Olá Mundo")
})

app.use(route)


app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000")
})