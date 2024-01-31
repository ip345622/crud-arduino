import { Arduino } from "../models/arduino.schema.js";
import { Sequelize } from "sequelize";

export const createArduino = async (req, res) => {
  try {
    const { Tipo_Sensor, Lectura_Sensor, led,Tipo_Medicion } = req.body;
    const newArduino = await Arduino.create({
      Tipo_Sensor,
      Lectura_Sensor,
      Tipo_Medicion,
      led,
    });
    res.json(newArduino);
  } catch (error) {
    console.error("Error creating Arduino:", error);
    res.status(500).send("Internal Server Error");
  }
};

// Obtener todos los arduinos
export const getArduinos = async (req, res) => {
  try {
    const Arduinos = await Arduino.findAll();
    return res.json(Arduinos);
  } catch (error) {
    console.error("Error fetching Arduinos:", error);
    res.status(500).send("Internal Server Error");
  }
};

// // Obtener todos los arduinos por rango
export const getArduinosRange = async (req, res) => {
  const { rangeMin, rangeMax } = req.body;

  try {
    const arduinosInRange = await Arduino.findAll({
      where: {
        Lectura_Sensor: {
          [Sequelize.Op.between]: [rangeMin, rangeMax],
        },
      },
    });

    return res.json(arduinosInRange);
 
  } catch (error) {
    console.error("Error fetching Arduinos:", error);
    res.status(500).send("Internal Server Error");
  }
};

// Obtener un arduino por ID
export const getArduino = async (req, res) => {
  try {
    const IdSensor = req.params.id;
    const arduino = await Arduino.findByPk(IdSensor);
    if (arduino) {
      res.json(arduino);
    } else {
      res.status(404).send("User not found");
    }
  } catch (error) {
    console.error("Error fetching arduino by ID:", error);
    res.status(500).send("Internal Server Error");
  }
};

// Actualizar un arduino por ID
export const updateArduino = async (req, res) => {
  try {
    const IdSensor = req.params.id;
    const { Tipo_Sensor, Lectura_Sensor, led } = req.body;
    const updated = await Arduino.update(
      { Tipo_Sensor, Lectura_Sensor, led },
      { where: { id: IdSensor } }
    );
    res.json(updated);
  } catch (error) {
    console.error("Error updating arduino:", error);
    res.status(500).send("Internal Server Error");
  }
};

// Eliminar un arduino por ID
export const deleteArduino = async (req, res) => {
  try {
    const IdSensor = req.params.id;
    await Arduino.destroy({ where: { id: IdSensor } });
    res.send("Arduino deleted successfully");
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).send("Internal Server Error");
  }
};
