import { Request, Response } from "express";
import prismaClient from "../database";

export class ListTeachersController {
    async handle(request: Request, response: Response) {
        try {
            const teachers = await prismaClient.teacher.findMany()
            return response.json(teachers)
        }
        catch (error) {
            return response.status(400).json({ status: "error", error })
        }
    }
}
