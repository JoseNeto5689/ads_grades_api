import { Request, Response } from "express";
import prismaClient from "../database";
import { error } from "console";

export class FindGradeController {
    async handle(request: Request, response: Response) {
        try {
            const { id } = request.params;
            const grade = await prismaClient.grade.findFirst({
                where: {
                    id: parseInt(id)
                }
            })

            return response.json(grade)
        }
        catch {
            response.status(400).send("Error")
        }
    }
}

