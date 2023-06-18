import { Request, Response } from "express";
import prismaClient from "../database";

export class FindGradeController {
    async handle(request: Request, response: Response) {

        const { id } = request.params;
        const grade = await prismaClient.grade.findFirst({
            where: {
                id: parseInt(id)
            }
        })

        return response.json(grade)
    }
}

