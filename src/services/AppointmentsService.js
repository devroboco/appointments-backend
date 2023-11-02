const dataBase = [
  {
    description: "Consulta com o Doutor Ricardo",
    date: new Date("10/20/2010"),
  },
  {
    description: "Consulta com o Doutor Douglas",
    date: new Date("08/12/2012"),
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
}
