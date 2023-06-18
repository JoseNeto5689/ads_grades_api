import { Request, Response } from "express";
import prismaClient from "../database";

export class FindGradePeriodController {
    async handle(request: Request, response: Response) {
        const id = request.params.id;
        const grades = await prismaClient.grade.findMany({
            where: {
                periodId: parseInt(id)
            },
        })

        return response.json(grades)
    }
}

