import { Request, Response } from "express";
import prismaClient from "../database";

export class ListGradesController {
    async handle(request: Request, response: Response) {
        try {
            const grades = await prismaClient.grade.findMany()
            return response.json(grades)
        }
        catch {
            response.status(400).send("Error")
        }
    }
}

