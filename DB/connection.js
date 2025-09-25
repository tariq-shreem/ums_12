import { Sequelize } from "sequelize";

export const sequelize = new Sequelize('freedb_UMSFREE', 'freedb_tariq123', 'Ten&5cE2N!$SAu?', {
  host: '130.162.54.212',
  port: 3306,
  dialect: 'mysql',

});

export const connectDB = () => {
  sequelize.sync()
    .then(() => {
      console.log("connection established");
    })
    .catch((error) => {
      console.log("error to connect to database" + error);
    })
    ;
}