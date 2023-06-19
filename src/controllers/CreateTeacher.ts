import { Request, Response } from "express";
import prismaClient from "../database";

export class CreateTeacherController {
    async handle(request: Request, response: Response) {
        const { name } = request.body;
        try {
            await prismaClient.teacher.create({
                data: {
                    name
                }
            })
            return response.json({ status: "success" })
        }
        catch (error) {
            return response.status(400).json({ status: "error", error })
        }



    }
}

