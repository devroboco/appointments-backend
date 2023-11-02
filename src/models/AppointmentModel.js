import { sequelize } from "../dataBase/connection.js";
import { DataTypes } from "sequelize";
const AppointmentModel = sequelize.define("Appointment", {
  date: {
    type: DataTypes.DATE,
  },
  doctor: {
    type: DataTypes.STRING,
  },
  patient: {
    type: DataTypes.STRING,
  },
  status: {
    type: DataTypes.STRING,
  },
});

AppointmentModel.sync();

export { AppointmentModel };
