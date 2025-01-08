document.querySelector('.send-button').addEventListener('click', () => {
    const input = document.querySelector('footer input');
    const chat = document.querySelector('.chat');
  
    if (input.value.trim() !== '') {
      const message = document.createElement('div');
      message.classList.add('message');
      message.innerHTML = `<span class="username">Tú:</span> ${input.value}`;
      chat.appendChild(message);
      input.value = '';
      chat.scrollTop = chat.scrollHeight; // Desplazar hacia abajo
    }
  });
  