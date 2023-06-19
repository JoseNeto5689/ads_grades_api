import { Request, Response } from "express";
import prismaClient from "../database";

type IGrade = {
    description: object,
    period_id: number,
    teacher_id: number
}

export class CreateGradeController {
    async handle(request: Request, response: Response) {
        const { description, period_id, teacher_id } = <IGrade>request.body;
        try {
            await prismaClient.grade.create({
                data: {
                    description,
                    periodId: period_id,
                    teacherId: teacher_id
                }
            })
            return response.json({ status: "success" })
        }
        catch (error) {
            return response.status(400).json({ status: "error", error })
        }

    }
}

