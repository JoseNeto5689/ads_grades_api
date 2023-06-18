import { Router, Request, Response } from 'express';
import { CreateTeacherController } from '../controllers/CreateTeacher';
import { CreateGradeController } from '../controllers/CreateGrade';

const router: Router = Router()
const createTeacher = new CreateTeacherController()
const createGrade = new CreateGradeController()

router.get('/', (req: Request, res: Response) => {
    res.send("Server working")
})

router.post("/teacher", createTeacher.handle)
router.post("/grade", createGrade.handle)

export { router };