const cron = require("node-cron");
const notifier = require("node-notifier");

// Coordenadas de Crato, CE (pode trocar pela sua cidade)
const LATITUDE = -7.2342;
const LONGITUDE = -39.4092;
const NOME_CIDADE = "Crato, CE";

// Limites que disparam notificação (ajuste como quiser)
const CHANCE_CHUVA_MINIMA = 00; // %
const TEMP_MAXIMA_ALERTA = 00;  // °C

async function verificarClima() {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${LATITUDE}&longitude=${LONGITUDE}&current=temperature_2m,precipitation_probability&hourly=precipitation_probability&timezone=America%2FSao_Paulo`;

  try {
    const resposta = await fetch(url);
    const dados = await resposta.json();

    const tempAtual = dados.current.temperature_2m;
    const chanceChuvaAtual = dados.current.precipitation_probability;

    console.log(`[${new Date().toLocaleString("pt-BR")}] ${NOME_CIDADE}: ${tempAtual}°C, ${chanceChuvaAtual}% chance de chuva`);

    if (chanceChuvaAtual >= CHANCE_CHUVA_MINIMA) {
      notifier.notify({
        title: "☔ Alerta de Chuva",
        message: `${chanceChuvaAtual}% de chance de chuva agora em ${NOME_CIDADE}. Leva um guarda-chuva!`,
        sound: true,
      });
    }

    if (tempAtual >= TEMP_MAXIMA_ALERTA) {
      notifier.notify({
        title: "🌡️ Alerta de Calor",
        message: `${tempAtual}°C em ${NOME_CIDADE}. Se hidrate!`,
        sound: true,
      });
    }
  } catch (erro) {
    console.error("Erro ao buscar previsão do tempo:", erro.message);
  }
}

// Roda imediatamente ao iniciar
verificarClima();

// Agenda para rodar a cada 1 hora (formato cron: minuto hora dia mês dia-da-semana)
cron.schedule("0 * * * *", verificarClima);

console.log("Bot de clima iniciado. Verificando a cada hora...");