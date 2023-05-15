// Seleccionar elementos del DOM
const form = document.querySelector('form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');

// Función para validar el formulario
function validateForm() {
  // Verificar si los campos están vacíos
  if (nameInput.value.trim() === '') {
    alert('Por favor ingresa tu nombre');
    return false;
  }

  if (emailInput.value.trim() === '') {
    alert('Por favor ingresa tu correo electrónico');
    return false;
  }

  if (messageInput.value.trim() === '') {
    alert('Por favor ingresa un mensaje');
    return false;
  }

  return true;
}

// Manejador de eventos para enviar el formulario
function submitForm(e) {
  e.preventDefault();
  if (validateForm()) {
    alert('Formulario enviado exitosamente');
    form.reset();
  }
}

// Agregar evento al formulario
form.addEventListener('submit', submitForm);
