class AppointmentFactory{

    Build(simpleAppointment){

        const day = simpleAppointment.date.getDate() + 1;
        const month = simpleAppointment.date.getMonth();
        const year = simpleAppointment.date.getFullYear();
        const hour = Number.parseInt(simpleAppointment.time.split(":")[0]);
        const minutes = Number.parseInt(simpleAppointment.time.split(":")[1]);

        var appointment = {
            id : simpleAppointment._id,
            title : simpleAppointment.name + ' - ' + simpleAppointment.description,
            start : undefined,
            end : undefined,
        }

        return appointment;
    }
}

module.exports = new AppointmentFactory();