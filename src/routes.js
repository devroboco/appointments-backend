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

router.post("/appointments", async (request, response) => {
  const appointmentsService = new AppointmentsService();

  const appointment = request.body;

  if (!appointment || !appointment.description || !appointment.date) {
    return response.status(400).json({
      message: "required is falied because missing data or description",
    });
  }

  const newAppointment = await appointmentsService.createAppointment(
    appointment
  );

  if (newAppointment) {
    return response.json(newAppointment);
  }

  return response.status(500).json({ message: "internal error" });
});

export { router };
