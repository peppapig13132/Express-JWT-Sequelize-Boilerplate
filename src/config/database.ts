import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const dbHost = process.env.DB_HOST || 'localhost';
const dbName = process.env.DB_NAME || 'express_boilerplate';
const dbAdmin = process.env.DB_ADMIN || 'postgres';
const dbPassword = process.env.DB_PASSWORD || '';

const sequelize: Sequelize  = new Sequelize(dbName, dbAdmin, dbPassword, {
  host: dbHost,
  dialect: 'postgres'
});

sequelize.authenticate().then(() => {
  console.log(`Database connected. DB_HOST: ${dbHost}, DB_NAME: ${dbName}`);
}).catch((error) => {
  console.log('Database connection failed', error);
})

const syncDatabase: () => Promise<void> = async () => {
  if (process.env.DB_SYNC === 'true') {
    try {
      sequelize.sync({ force: true });
      console.log('Models synchronized with database.');
    } catch(error) {
      console.error('Models synchronizing failed:', error);
    }
  }
};

syncDatabase();

export default sequelize;