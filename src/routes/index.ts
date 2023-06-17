import { Router, Request, Response } from 'express';

const route: Router = Router()

route.get('/', (req: Request, res: Response) => {
    res.send("Olá Mundo")
})

export {route};