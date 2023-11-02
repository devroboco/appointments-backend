import { Router } from "express";
import { AppointmentsService } from "./services/AppointmentsService.js";
const router = Router();

router.get("/", (request, response) => {
  return response.json({
    Mensage: "Hello World",
  });
});

router.get("/appointments", async (request, response) => {
  const appointmentsService = new AppointmentsService();

  const appointments = await appointmentsService.findAll();

  return response.json(appointments);
});

export { router };
