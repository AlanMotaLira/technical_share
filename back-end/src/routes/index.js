import express from "express";
import appointments from "./appointmentsRoutes.js";
import images from "./imageRoutes.js";
import profiles from "./profileRoutes.js";
import skills from "./skillsRoutes.js";
import users from "./usersRoutes.js";

const routes = (app) => {
  app.use(express.json(), users, skills, images, profiles, appointments);
};

export default routes;
