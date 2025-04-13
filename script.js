function addMessage(content, sender = 'bot') {
    const chatWindow = document.getElementById('chat-window');
    const message = document.createElement('div');
    message.className = `message ${sender}`;
    message.innerText = content;
    chatWindow.appendChild(message);
    chatWindow.scrollTop = chatWindow.scrollHeight;
  }
  
  function handleSend(event) {
    event.preventDefault();
    const input = document.getElementById('user-input');
    const text = input.value.trim();
    if (text !== "") {
      addMessage(text, 'user');
      generateResponse(text.toLowerCase());
      input.value = '';
    }
  }
  
  function clearChat() {
    document.getElementById('chat-window').innerHTML = '';
  }
  
  function sendResponse(key) {
    generateResponse(key);
  }
  
  function generateResponse(text) {
    let response = "";
  
    switch (text) {
      case 'alavancagem':
        response = "A alavancagem de marca consiste em aumentar sua visibilidade e reconhecimento, utilizando estratégias digitais como anúncios pagos e posicionamento de marca para atrair novos clientes.";
        break;
      case 'funil':
        response = "Um funil de vendas é uma jornada que transforma visitantes em clientes. Começamos atraindo a atenção, depois nutrimos com conteúdos estratégicos e por fim levamos à conversão. Tudo isso automatizado e mensurável.";
        break;
      case 'estrategia':
        response = "Desenhamos estratégias de vendas personalizadas, analisando seu público-alvo, comportamento e mercado. Ajudamos você a construir abordagens mais eficientes para vender mais e com menos esforço.";
        break;
      case 'criativos':
        response = "Criativos que convertem são peças gráficas, vídeos e textos pensados para atrair e convencer seu público. Com design atrativo, copywriting persuasivo e otimização para plataformas, aumentamos seu ROI.";
        break;
      case 'sites':
        response = "Desenvolvemos sites modernos, rápidos e otimizados para conversão. Do layout à programação, tudo é feito pensando em performance, navegação fluida e resultados concretos.";
        break;
      case 'programacao':
        response = "A programação entra como base técnica das suas soluções digitais. Automatizamos processos, criamos sistemas personalizados e integramos ferramentas para facilitar sua operação e escalar seus resultados.";
        break;
      case 'especialista':
        response = "Ótimo! Já vamos te direcionar para um especialista. Por favor, aguarde um momento enquanto preparamos o atendimento personalizado para você.";
        break;
      default:
        response = "Desculpe, não entendi. Por favor, escolha uma das opções acima ou fale com um especialista.";
    }
  
    addMessage(response, 'bot');
  }
  