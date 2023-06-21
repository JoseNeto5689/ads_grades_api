import { Request, Response } from "express";
import prismaClient from "../database";

export class FindGradeController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;
        try {
            const grade = await prismaClient.grade.findFirst({
                where: {
                    id: parseInt(id)
                },
                include: {
                    Teacher: true
                }
            })
            return response.json(grade)
        }
        catch (error) {
            return response.status(400).json({ status: "error", error })
        }
    }
}

