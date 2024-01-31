
import { Sequelize, DataTypes } from 'sequelize';
import { sequelize } from '../db.js';

// Define el modelo usando Sequelize
const Arduino = sequelize.define('tb_sensores', {
    Tipo_Sensor: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Lectura_Sensor: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    Tipo_Medicion:{
      type: DataTypes.STRING,
      allowNull: false, 
    },
    led:{
        type: DataTypes.STRING,
    },
    Fecha: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
  });
  
  // Sincroniza el modelo con la base de datos
  sequelize.sync()
    .then(() => {
      console.log('Database and tables created!');
    })
    .catch(err => console.error('Error syncing database:', err));
  

    export { Arduino, sequelize };
