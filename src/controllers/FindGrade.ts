import { Request, Response } from "express";
import prismaClient from "../database";

export class FindGradeController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;
        try {
            const grade = await prismaClient.grade.findFirst({
                select: {
                    description: true,
                    periodId: true,
                    Teacher: true
                },
                where: {
                    id: parseInt(id),
                }
            })
            return response.json(grade)
        }
        catch (error) {
            return response.status(400).json({ status: "error", error })
        }
    }
}

