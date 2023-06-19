import { Router, Request, Response } from 'express';
import { CreateTeacherController } from '../controllers/CreateTeacher';
import { CreateGradeController } from '../controllers/CreateGrade';
import { FindGradeController } from '../controllers/FindGrade';
import { FindGradePeriodController } from '../controllers/FindGradesPeriod';
import { ListTeachersController } from '../controllers/ListTeachers';
import { ListGradesController } from '../controllers/ListGrades';

const router: Router = Router()
const createTeacher = new CreateTeacherController()
const createGrade = new CreateGradeController()
const findGrade = new FindGradeController()
const findGradePeriod = new FindGradePeriodController()
const listTeachers = new ListTeachersController()
const listGrades = new ListGradesController()

router.get('/', (req: Request, res: Response) => {
    res.send("Server working")
})

router.post("/teacher", createTeacher.handle)
router.post("/grade", createGrade.handle)

router.get("/grade", listGrades.handle)
router.get("/teachers", listTeachers.handle)
router.get("/grade/:id", findGrade.handle)
router.get("/period/:id", findGradePeriod.handle)

export { router };