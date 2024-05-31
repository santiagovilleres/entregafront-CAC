document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('form');
    const emailError = document.getElementById('error-email');
    const passError = document.getElementById('error-pass');
    const emailInput = document.getElementById('email');
    const passInput = document.getElementById('password');

    loginForm.addEventListener('submit', function(event) {
        let valid = true;

        // Limpiar mensajes de error
        emailError.textContent = '';
        passError.textContent = '';

        // Validar email
        if (emailInput.value.trim() === '') {
            emailError.textContent = 'Este campo es obligatorio';
            valid = false;
        }

        // Validar contraseña
        if (passInput.value.trim() === '') {
            passError.textContent = 'Este campo es obligatorio';
            valid = false;
        }

        emailError.classList.toggle('active', emailError.textContent !== '');
        passError.classList.toggle('active', passError.textContent !== '');

        // Si no es válido, prevenir el envío del formulario
        if (!valid) {
            event.preventDefault();
        }
    });
});

