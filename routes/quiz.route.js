const { Router } = require("express")
const { addQuiz, getAllQuizzes, getQuizById, submitQuiz } = require("../controller/quiz.controller")
const QRoute=Router()

QRoute.post("/addQuiz",addQuiz)
QRoute.get("/getall",getAllQuizzes)
QRoute.get("/getone/:id",getQuizById)
QRoute.post('/:id/submit',  submitQuiz);

module.exports=QRoute