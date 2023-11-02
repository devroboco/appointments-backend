const dataBase = [
  {
    date: new Date("2023-11-02T12:27:38.684Z"),
    doctor: "Ricardo",
    patient: "Gabriel",
  },
  {
    date: new Date("2023-11-03T12:27:38.684Z"),
    doctor: "Ivan",
    patient: "Isadora",
  },
];

export class AppointmentsService {
  async findAll() {
    const appointments = dataBase;
    if (!appointments || !appointments.length) {
      return [];
    }
    return appointments;
  }

  async createAppointment(appointment) {
    const tryFindDate = dataBase.find((ap) => {
      return (
        new Date(ap.date).getTime() === new Date(appointment.date).getTime()
      );
    });

    if (tryFindDate) {
      return { message: "alredy exists a equal date" };
    }

    const currentDate = new Date().getTime();

    if (new Date(appointment.date).getTime() < currentDate) {
      return { message: "Cannot create a appointment before the current time" };
    }

    const newAppointment = {
      date: appointment.date,
      doctor: appointment.doctor,
      patient: appointment.patient,
    };

    dataBase.push(newAppointment);
    return newAppointment;
  }
}
