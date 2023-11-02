const dataBase = [
  {
    description: "Consulta com o Doutor Ricardo",
    date: new Date("2023-11-02T12:27:38.684Z"),
  },
  {
    description: "Consulta com o Doutor Douglas",
    date: new Date("2023-11-03T12:27:38.684Z"),
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

    const newAppointment = {
      description: appointment.description,
      date: appointment.date,
    };

    dataBase.push(newAppointment);
    return newAppointment;
  }
}
