# Bot de Notificação de Clima

Um bot em Node.js que monitora a previsão do tempo periodicamente e envia 
notificações no desktop quando condições específicas são atingidas (chance 
alta de chuva ou calor extremo).

## Funcionalidades

- 🌦️ Consulta a previsão do tempo automaticamente a cada hora
- ☔ Notificação de alerta quando a chance de chuva ultrapassa um limite
- 🌡️ Notificação de alerta quando a temperatura ultrapassa um limite
- 🖥️ Roda em segundo plano com PM2, incluindo reinício automático com o Windows
- 💸 100% gratuito — usa a API pública Open-Meteo, sem necessidade de chave/cadastro

## Tecnologias

- Node.js
- [node-cron](https://www.npmjs.com/package/node-cron) — agendamento de tarefas
- [node-notifier](https://www.npmjs.com/package/node-notifier) — notificações nativas do sistema
- [Open-Meteo API](https://open-meteo.com) — dados de previsão do tempo

## Como rodar

### Pré-requisitos
- Node.js instalado

### Passos

1. Clone o repositório:
```bash
git clone https://github.com/Nateranzy/bot-clima.git
cd bot-clima
```

2. Instale as dependências:
```bash
npm install
```

3. Ajuste as coordenadas e limites no topo do `index.js` conforme sua cidade:
```javascript
const LATITUDE = -7.2342;
const LONGITUDE = -39.4092;
const NOME_CIDADE = "Crato, CE";
const CHANCE_CHUVA_MINIMA = 60; // %
const TEMP_MAXIMA_ALERTA = 35;  // °C
```

4. Rode o bot:
```bash
node index.js
```

### Rodando em segundo plano (opcional)

Para manter o bot rodando continuamente, mesmo após fechar o terminal:

```bash
npm install -g pm2
pm2 start index.js --name bot-clima
```

Para iniciar automaticamente com o sistema:
```bash
npm install -g pm2-windows-startup
pm2-startup install
pm2 save
```

## Estrutura do projeto


# Bot de Notificação de Clima

Um bot em Node.js que monitora a previsão do tempo periodicamente e envia 
notificações no desktop quando condições específicas são atingidas (chance 
alta de chuva ou calor extremo).

## Funcionalidades

- 🌦️ Consulta a previsão do tempo automaticamente a cada hora
- ☔ Notificação de alerta quando a chance de chuva ultrapassa um limite
- 🌡️ Notificação de alerta quando a temperatura ultrapassa um limite
- 🖥️ Roda em segundo plano com PM2, incluindo reinício automático com o Windows
- 💸 100% gratuito — usa a API pública Open-Meteo, sem necessidade de chave/cadastro

## Tecnologias

- Node.js
- [node-cron](https://www.npmjs.com/package/node-cron) — agendamento de tarefas
- [node-notifier](https://www.npmjs.com/package/node-notifier) — notificações nativas do sistema
- [Open-Meteo API](https://open-meteo.com) — dados de previsão do tempo

## Como rodar

### Pré-requisitos
- Node.js instalado

### Passos

1. Clone o repositório:
```bash
git clone https://github.com/Nateranzy/bot-clima.git
cd bot-clima
```

2. Instale as dependências:
```bash
npm install
```

3. Ajuste as coordenadas e limites no topo do `index.js` conforme sua cidade:
```javascript
const LATITUDE = -7.2342;
const LONGITUDE = -39.4092;
const NOME_CIDADE = "Crato, CE";
const CHANCE_CHUVA_MINIMA = 60; // %
const TEMP_MAXIMA_ALERTA = 35;  // °C
```

4. Rode o bot:
```bash
node index.js
```

### Rodando em segundo plano (opcional)

Para manter o bot rodando continuamente, mesmo após fechar o terminal:

```bash
npm install -g pm2
pm2 start index.js --name bot-clima
```

Para iniciar automaticamente com o sistema:
```bash
npm install -g pm2-windows-startup
pm2-startup install
pm2 save
```

## Estrutura do projeto