import { Router, Request, Response } from 'express';
import { CreateTeacherController } from '../controllers/CreateTeacher';
import { CreateGradeController } from '../controllers/CreateGrade';
import { FindGradeController } from '../controllers/FindGrade';
import { FindGradePeriodController } from '../controllers/FindGradesPeriod';

const router: Router = Router()
const createTeacher = new CreateTeacherController()
const createGrade = new CreateGradeController()
const findGrade = new FindGradeController()
const findGradePeriod = new FindGradePeriodController()

router.get('/', (req: Request, res: Response) => {
    res.send("Server working")
})

router.post("/teacher", createTeacher.handle)
router.post("/grade", createGrade.handle)

router.get("/grade/:id", findGrade.handle)
router.get("/period/:id", findGradePeriod.handle)

export { router };