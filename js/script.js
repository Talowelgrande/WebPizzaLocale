// Manejo del formulario de contacto con Formspree
const form = document.getElementById('contactForm');
const alertaExito = document.getElementById('alerta-exito');
const alertaError = document.getElementById('alerta-error');

if (form) {
    form.addEventListener('submit', async (e) => {
        e.preventDefault(); // Evita recargar la página
        const data = new FormData(form);

        try {
            const response = await fetch(form.action, {
                method: form.method,
                body: data,
                headers: { 'Accept': 'application/json' }
            });

            if (response.ok) {
                alertaExito.classList.remove('d-none');
                alertaError.classList.add('d-none');
                form.reset(); // limpia los campos
            } else {
                alertaError.classList.remove('d-none');
                alertaExito.classList.add('d-none');
            }
        } catch (error) {
            alertaError.classList.remove('d-none');
            alertaExito.classList.add('d-none');
        }
    });
}
