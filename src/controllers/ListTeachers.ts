import { Request, Response } from "express";
import prismaClient from "../database";

export class ListTeachersController {
    async handle(request: Request, response: Response) {
        try {
            const teachers = await prismaClient.teacher.findMany()
            return response.json(teachers)
        }
        catch {
            response.status(400).send("Error")
        }
    }
}

