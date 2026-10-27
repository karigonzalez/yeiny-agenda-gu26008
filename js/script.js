// Datos de la Agenda Semanal (Prácticas Simuladas)
const weekScheduleData = [
    {
        day: "Lunes",
        title: "Lunes - Control de Reservas & Citas",
        status: "3 Citas Programadas | 100% Confirmadas",
        emailSample: `"Estimado(a) Cliente, le recordamos su reserva agendada para hoy a las 09:00 AM vía Google Meet. Agradecemos su puntualidad. Si requiere reprogramar, por favor responda a este correo."`,
        slots: [
            { time: "09:00 AM", title: "Reserva de Asesoría de Servicio", client: "Cliente: Roberto Gómez", status: "Confirmado - Recordatorio Enviado" },
            { time: "11:30 AM", title: "Coordinación de Espacio / Sesión Virtual", client: "Cliente: Mariana Silva", status: "Confirmado - Disponibilidad Sincronizada" },
            { time: "03:00 PM", title: "Reunión de Revisión de Agenda Exec.", client: "Interno: Dirección de Operaciones", status: "Confirmado" }
        ]
    },
    {
        day: "Martes",
        title: "Martes - Programación & Actualización de Calendario",
        status: "2 Citas Programadas | 1 Bloqueo de Mantenimiento",
        emailSample: `"Hola Carlos, confirmamos la actualización de tu reserva para este Martes a las 10:00 AM. El enlace de acceso y la agenda detallada ya están sincronizados en tu Google Calendar."`,
        slots: [
            { time: "10:00 AM", title: "Reserva de Consultoría B2B", client: "Cliente: Carlos Mendoza", status: "Confirmado - Link de Calendar Enviado" },
            { time: "02:00 PM", title: "Bloqueo de Agenda (Actualización Sistema)", client: "Interno: Gestión de Disponibilidad", status: "Bloqueado en Calendar" },
            { time: "04:30 PM", title: "Sesión de Confirmación de Asistencia", client: "Cliente: Patricia Ruiz", status: "Recordatorio Programado" }
        ]
    },
    {
        day: "Miércoles",
        title: "Miércoles - Gestión de Reprogramaciones",
        status: "4 Citas Programadas | 1 Reprogramada sin Cruces",
        emailSample: `"Estimada Lucía, hemos procesado tu cambio de horario con éxito. Tu nueva cita quedó agendada para el Miércoles a las 02:00 PM sin solapamientos."`,
        slots: [
            { time: "08:30 AM", title: "Reserva de Inducción Temprana", client: "Cliente: Fernando Torres", status: "Confirmado" },
            { time: "11:00 AM", title: "Cita de Seguimiento Administrativo", client: "Cliente: Andrea Ríos", status: "Confirmado" },
            { time: "02:00 PM", title: "Reserva Reprogramada (Ajuste Solicitado)", client: "Cliente: Lucía Paredes", status: "Reprogramado Exitosamente" },
            { time: "05:00 PM", title: "Cierre de Agenda Diaria & Reporte", client: "Interno: Control de Registros", status: "Completado" }
        ]
    },
    {
        day: "Jueves",
        title: "Jueves - Envío Masivo de Recordatorios 24h",
        status: "3 Citas Programadas | Recordatorios 24h Enviados",
        emailSample: `"Estimados clientes, sus reservas agendadas para mañana Viernes han sido notificadas con sus respectivas instrucciones de acceso. Quedamos a su disposición."`,
        slots: [
            { time: "09:30 AM", title: "Reserva de Presentación de Servicio", client: "Cliente: Gabriel Castro", status: "Confirmado" },
            { time: "01:30 PM", title: "Coordinación de Logística de Espacios", client: "Cliente: Sofía Morales", status: "Confirmado" },
            { time: "04:00 PM", title: "Auditoría de Registros en Sheets", client: "Interno: Verificación de Precisión", status: "98% Precisión Validada" }
        ]
    },
    {
        day: "Viernes",
        title: "Viernes - Cierre Semanal & Bloqueo de Fin de Semana",
        status: "2 Citas Programadas | Agenda Semanal Finalizada",
        emailSample: `"Estimado equipo, la disponibilidad para la próxima semana ya se encuentra configurada en Google Calendar y lista para recibir nuevas reservas."`,
        slots: [
            { time: "10:00 AM", title: "Reserva de Evaluación Semanal", client: "Cliente: Diego Valdés", status: "Confirmado" },
            { time: "03:00 PM", title: "Sincronización de Agenda Semanal Próxima", client: "Interno: Coordinación General", status: "Completado & Sincronizado" }
        ]
    }
];

// Función para cargar las citas según el día seleccionado
function loadAgendaDay(index) {
    const data = weekScheduleData[index];
    
    // Actualizar botones de pestaña
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach((btn, idx) => {
        if(idx === index) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    // Actualizar encabezado del simulador
    document.getElementById('agenda-day-title').textContent = data.title;
    document.getElementById('agenda-day-status').textContent = data.status;
    document.getElementById('email-sample-text').textContent = data.emailSample;

    // Renderizar las citas
    const container = document.getElementById('schedule-container');
    container.innerHTML = '';

    data.slots.forEach(slot => {
        const card = document.createElement('div');
        card.className = 'schedule-card';
        card.innerHTML = `
            <div class="schedule-time"><i class="fa-regular fa-clock"></i> ${slot.time}</div>
            <div class="schedule-details">
                <div class="schedule-title">${slot.title}</div>
                <div class="schedule-meta">${slot.client} | <strong>Estado:</strong> ${slot.status}</div>
            </div>
        `;
        container.appendChild(card);
    });
}

// Carga inicial
document.addEventListener('DOMContentLoaded', () => {
    loadAgendaDay(0);

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if(target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});