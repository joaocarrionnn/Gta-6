# 📜 **GTA 6 - Assistente Virtual com IA Gemini**



Um portal interativo para fãs de GTA 6 com chatbot integrado à inteligência artificial do Google Gemini.

## 🚀 **Recursos Principais**

- **Chatbot IA** integrado com Gemini API
- **Design responsivo** com Tailwind CSS + DaisyUI
- **Tema GTA 6** personalizado (cores, elementos visuais)
- **Sistema MVC** com Express.js e EJS
- **Barra de scroll customizada** no chat

## 🛠️ **Tecnologias Utilizadas**

| Tecnologia       | Descrição                          |
|------------------|-----------------------------------|
| `Express.js`     | Backend em Node.js                |
| `EJS`            | Template engine para views        |
| `Tailwind CSS`   | Framework CSS utilitário          |
| `DaisyUI`        | Componentes para Tailwind         |
| `Google Gemini`  | IA para respostas do assistente   |
| `Font Awesome`   | Ícones                            |

## 📂 **Estrutura de Arquivos**

```
gtavi-portal/
├── index.js               # Ponto de entrada do servidor
├── mvc/
│   └── views/
│       ├── index.ejs      # Página principal
│       └── partials/      # Componentes reutilizáveis
│           ├── navbar.ejs
│           └── chatbot.ejs
├── public/
│   ├── css/              # Estilos personalizados
│   │   └── chatbot.css
│   ├── js/               # Scripts JavaScript
│   │   ├── chatbot.js
│   │   └── main.js
│   └── images/           # Assets visuais
│       ├── gta6-bg.jpg
│       ├── gta6-logo.png
│       └── characters/
├── package.json
└── README.md
```

## 🖥️ **Como Executar**

1. **Clone o repositório**
   ```bash
   git clone https://github.com/seu-usuario/gtavi-portal.git
   cd gtavi-portal
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Configure a API Key do Gemini**
   Crie um arquivo `.env` na raiz:
   ```env
   GEMINI_API_KEY=sua_chave_aqui
   ```

4. **Inicie o servidor**
   ```bash
   node index.js
   ```

5. **Acesse no navegador**
   ```
   http://localhost:4091
   ```

## ✏️ **Personalização**

### **Cores do Tema**
Edite em `public/css/chatbot.css`:
```css
:root {
  --primary: #dc2626;  /* Vermelho GTA */
  --secondary: #1f2937; /* Fundo escuro */
}
```

### **Personagens**
Adicione novas imagens em:
```
public/images/characters/
```
e atualize o `index.ejs`.

## 🤖 **Sobre o Assistente Virtual**

O chatbot utiliza:
- **Modelo Gemini Pro** para respostas contextualizadas
- **Prompt engineering** para manter o tema GTA 6
- **Design responsivo** que funciona em mobile

Exemplo de interação:
```
Usuário: Quais veículos novos terá no GTA 6?
Assistente: Segundo os vazamentos, esperamos o novo "Virtue" (elétrico super rápido) e o "Panto 2.0" com modificações especiais...
```

## 📜 **Licença**
MIT License - Projeto para fins educacionais e demonstrativos.

## ✉️ **Contato**
Desenvolvido por João Carrion 😎 
Email: Joaomiguelcg54@gmail.com
GitHub: @joaocarrionnn

---

**Nota**: Este projeto não tem afiliação com a Rockstar Games. Todos os assets visuais são para demonstração apenas.

💡 **Dica**: Para uma experiência completa, recomenda-se usar Node.js v18+ e uma chave válida da API Gemini.
