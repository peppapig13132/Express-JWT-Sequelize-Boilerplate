import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';

class User extends Model {};

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
    }
  },
  {
    sequelize,
    modelName: 'User',
  }
);

export default User;