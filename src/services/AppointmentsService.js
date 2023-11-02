import { AppointmentModel } from "../models/AppointmentModel.js";

export class AppointmentsService {
  async findAll() {
    const appointments = await AppointmentModel.findAll({
      where: {
        status: "marked",
      },
    });
    if (!appointments || !appointments.length) {
      return [];
    }
    return appointments;
  }

  async createAppointment(appointment) {
    const tryFindByDate = await AppointmentModel.findOne({
      where: {
        date: new Date(appointment.date),
      },
    });

    if (tryFindByDate) {
      return { message: "alredy exists a equal date" };
    }

    const currentDate = new Date().getTime();

    if (new Date(appointment.date).getTime() < currentDate) {
      return { message: "Cannot create a appointment before the current time" };
    }

    const newAppointment = await AppointmentModel.create({
      date: appointment.date,
      doctor: appointment.doctor,
      patient: appointment.patient,
      status: appointment.status,
    });

    return newAppointment;
  }

  async cancelAppointment(appointmentId) {
    const appointment = await AppointmentModel.findOne({
      where: {
        id: appointmentId,
      },
    });

    if (!appointment) {
      return { message: "Cannot find this appointment" };
    }

    const tryUpdate = await AppointmentModel.update(
      { status: "cancel" },
      {
        where: {
          id: appointmentId,
        },
      }
    );

    if (!tryUpdate) {
      return { message: "Cannot update this appointment" };
    }
    return {
      message: "This appointment was canceled",
    };
  }
}
