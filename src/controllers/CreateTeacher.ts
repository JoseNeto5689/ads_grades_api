import { Request, Response } from "express";
import prismaClient from "../database";

export class CreateTeacherController {
    async handle(request: Request, response: Response) {
        const { name } = request.body;

        const product = await prismaClient.teacher.create({
            data: {
                name
            }
        })

        return response.json(product)
    }
}

