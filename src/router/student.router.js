import express from 'express'
import login from "../controller/student.controller.js";

const server = express.Router()


server.post("/login",login)


export default server
