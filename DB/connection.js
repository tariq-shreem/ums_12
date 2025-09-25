import { Sequelize } from "sequelize";

export const sequelize = new Sequelize('freedb_UMSFREE', 'freedb_tariq123', 'Ten&5cE2N!$SAu?', {
  host: 'sql.freedb.tech',
  port: 3306,
  dialect: 'mysql',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  }
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