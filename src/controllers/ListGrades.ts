import { Request, Response } from "express";
import prismaClient from "../database";

export class ListGradesController {
    async handle(request: Request, response: Response) {
        try {
            const grades = await prismaClient.grade.findMany({
                select: {
                    description: true,
                    periodId: true,
                    Teacher: true
                },
            })
            return response.json(grades)
        }
        catch (error) {
            return response.status(400).json({ status: "error", error })
        }
    }
}

