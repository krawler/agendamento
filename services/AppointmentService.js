const appointment = require('../models/Appointment');
const mongoose = require('mongoose');

const Appointment = mongoose.model('Appointment',appointment);

class AppointmentService {

    async create(name, email, description, cpf, date, time){    
        
        const newAppointment = new Appointment(name, email, description, cpf, date, time);

        try {
            await newAppointment.save();
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

}

module.exports = new AppointmentService();