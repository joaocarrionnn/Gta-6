class ChatbotGTA {
    constructor() {
      this.chatMessages = document.getElementById('chat-messages');
      this.userInput = document.getElementById('user-input');
      this.sendBtn = document.getElementById('send-btn');
      this.loadingSpinner = document.getElementById('loading-spinner');
      this.sendIcon = document.getElementById('send-icon');
      
      this.initEvents();
    }
  
    initEvents() {
      this.sendBtn.addEventListener('click', () => this.sendMessage());
      this.userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') this.sendMessage();
      });
    }
  
    async sendMessage() {
      const message = this.userInput.value.trim();
      if (!message) return;
  
      this.addMessage(message, 'user');
      this.userInput.value = '';
      this.toggleLoading(true);
  
      try {
        const response = await fetch('http://localhost:4091/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ message })
        });
  
        if (!response.ok) throw new Error('Erro na API');
        
        const data = await response.json();
        console.log(data)
        this.addMessage(data.reply || "Não entendi sua pergunta", 'bot');
        
      } catch (error) {
        console.error("Chat error:", error);
        this.addMessage("Desculpe, o assistente está offline. Tente novamente mais tarde.", 'bot');
      } finally {
        this.toggleLoading(false);
      }
    }
  
    addMessage(text, sender) {
      const bubbleClass = sender === 'user' 
        ? 'bg-red-600 text-white chat-end' 
        : 'bg-gray-700 text-white chat-start';
      
      this.chatMessages.innerHTML += `
        <div class="chat ${bubbleClass}">
          <div class="chat-bubble">${text}</div>
        </div>
      `;
      this.chatMessages.scrollTop = this.chatMessages.scrollHeight;
    }
  
    toggleLoading(show) {
      if (show) {
        this.loadingSpinner.classList.remove('hidden');
        this.sendIcon.classList.add('hidden');
      } else {
        this.loadingSpinner.classList.add('hidden');
        this.sendIcon.classList.remove('hidden');
      }
    }
  }
  
  // Inicializa quando o DOM estiver pronto
  document.addEventListener('DOMContentLoaded', () => {
    new ChatbotGTA();
  });