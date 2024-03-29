import { Router } from "express";
import {
    createArduino,
    getArduinos,
    getArduino,
    updateArduino,
    deleteArduino,
    getArduinosRange, 
  } from '../controller/arduino.controllers.js';

const router =  Router();


router.post('/arduinos', createArduino);
router.get('/arduinos', getArduinos);
router.get('/arduinosRange', getArduinosRange);
router.get('/arduinos/:id', getArduino);
router.put('/arduinos/:id', updateArduino);
router.delete('/arduinos/:id', deleteArduino);

export default router;