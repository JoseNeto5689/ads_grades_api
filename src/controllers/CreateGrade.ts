import { Request, Response } from "express";
import prismaClient from "../database";

export class CreateGradeController {
    async handle(request: Request, response: Response) {
        const { description, period_id, teacher_id } = request.body;
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

