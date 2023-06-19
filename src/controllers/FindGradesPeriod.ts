import { Request, Response } from "express";
import prismaClient from "../database";

export class FindGradePeriodController {
    async handle(request: Request, response: Response) {
        const id = request.params.id;
        try {
            const grades = await prismaClient.grade.findMany({
                where: {
                    periodId: parseInt(id)
                },
            })
            return response.json(grades)
        }
        catch (error) {
            return response.status(400).json({ status: "error", error })
        }
    }
}

