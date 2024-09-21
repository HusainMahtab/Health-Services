import express from "express"

const Router=express()
import {
    getAllServices,
    newService,
    updateService,
    deleteService
} from "../controllers/service.controller.js"

Router.route("/").get(getAllServices)
Router.route("/create-service").post( newService)
Router.route("/update-service/:_id").put( updateService)
Router.route("/delete-service/:_id").delete(deleteService)


export default Router