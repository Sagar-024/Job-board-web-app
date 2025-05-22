
import express from 'express'
import {createjob , getalljob , updatejob , deletejob , getjob} from '../Controller.js/job.js'

const router = express.Router();





router.post('/' , createjob);
router.get('/', getalljob)
router.get('/:id' , getjob)
router.patch('/:id' , updatejob)
router.delete('/:id' ,deletejob)

export default router ;