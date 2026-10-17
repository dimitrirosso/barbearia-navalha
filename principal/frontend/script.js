let servico = document.querySelector(".servico");
let corte = document.querySelector(".corte");
let barba = document.querySelector(".barba");
let spa = document.querySelector(".spa");
let acabamento = document.querySelector(".acabamento");
let servicoEscolhido = document.querySelector(".servico__escolhido");
let tempoEstimado = document.querySelector(".minutos__estimados");
let precoFinal = document.querySelector(".preco__resumo");
let horario = document.querySelector(".horario");
let data = document.querySelector(".data");
let horarioMarcado = document.querySelector(".data__escolhida");
let valorTotal = document.querySelector(".valor__total");

let barbeiros = document.querySelectorAll(".barbeiros");
let barbeiroEscolhido = document.querySelector(".barbeiro__escolhido");
let infoCliente = document.querySelector(".info__cliente");

let servicos = [servico, corte, barba, spa, acabamento];

let confirmarAgendamento = document.querySelector(".confirmar");
let nomeCliente = document.querySelector(".nome__cliente");
let contagemAgendamentos = document.querySelector(".contagem__agendamentos");

servicos.forEach((item) => {
  item.addEventListener("click", () => {
    servicos.forEach((servico) => {
      servico.classList.remove("ativo");
    });

    item.classList.add("ativo");
    if (servico.classList.contains("ativo")) {
      servicoEscolhido.innerHTML = `Combo Cabelo & Barba`;
      tempoEstimado.innerHTML = `60 minutos estimados`;
      precoFinal.innerHTML = `R$ 110`;
      valorTotal.innerHTML = `R$ 110,00`;
    } else if (corte.classList.contains("ativo")) {
      servicoEscolhido.innerHTML = `Corte Clássico`;
      tempoEstimado.innerHTML = `35 minutos estimados`;
      precoFinal.innerHTML = `R$ 65`;
      valorTotal.innerHTML = `R$ 65,00`;
    } else if (barba.classList.contains("ativo")) {
      servicoEscolhido.innerHTML = `Barba Terapia Tradicional`;
      tempoEstimado.innerHTML = `40 minutos estimados`;
      precoFinal.innerHTML = `R$ 55`;
      valorTotal.innerHTML = `R$ 55,00`;
    } else if (spa.classList.contains("ativo")) {
      servicoEscolhido.innerHTML = `Tratamento capilar & SPA`;
      tempoEstimado.innerHTML = `45 minutos estimados`;
      precoFinal.innerHTML = `R$ 80`;
      valorTotal.innerHTML = `R$ 80,00`;
    } else if (acabamento.classList.contains("ativo")) {
      servicoEscolhido.innerHTML = `Acabamento & Sobrancelha`;
      tempoEstimado.innerHTML = `20 minutos estimados`;
      precoFinal.innerHTML = `R$ 35`;
      valorTotal.innerHTML = `R$ 35,00`;
    }
  });
});

barbeiros.forEach((item) => {
  item.addEventListener("click", () => {
    barbeiros.forEach((servico) => {
      servico.classList.remove("ativo");
    });
    item.classList.add("ativo");
    let nome = item.querySelector(".nome__barbeiro").textContent;
    barbeiroEscolhido.innerHTML = `${nome}`;
  });
});

function atualizarData() {
  horarioMarcado.textContent = `${data.value} às ${horario.value}`;
}

horario.addEventListener("change", atualizarData);
data.addEventListener("change", atualizarData);

let contador = 0;

confirmarAgendamento.addEventListener("click", async () => {
  const agendamento = {
    nomeBarbeiro: barbeiroEscolhido.textContent,
    cliente: nomeCliente.value,
    servico: servicoEscolhido.textContent,
    preco: Number(
      precoFinal.textContent.replace("R$", "").trim().replace(",", "."),
    ),
    data_corte: data.value,
    horario_corte: horario.value,
    observacoes: infoCliente.value,
  };

  let container = document.querySelector(".principal__agendamento");
  let divi = document.createElement("div");

  divi.classList.add("card__agendamento");

  const resposta = await fetch(
    "https://barbearia-navalha.onrender.com/adicionar",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(agendamento),
    },
  );

  const dados = await resposta.json();
  divi.dataset.id = dados.id;

  contador++;
  divi.innerHTML = `
     <div class="info__container__agendamento">
            <div class="info__card">
              <p class="cliente__agendamento">${nomeCliente.value}</p>
              <p class="servico__agendamento">${servicoEscolhido.textContent} - ${precoFinal.textContent}</p>
            </div>
            <div class="confirmado">
              <p>CONFIRMADO</p>
            </div>
          </div>

          <div class="marcados__agendamento">
            <p class="relogio">
              <i class="fa-regular fa-clock"></i> ${data.value} - às ${horario.value}
            </p>

            <p class="tesoura">
              <i class="fa-solid fa-scissors"></i> ${barbeiroEscolhido.textContent}
            </p>
          </div>

          <div class="cancelar__container">
            <button class="cancelamento">X Cancelar</button>
          </div>
  `;

  contagemAgendamentos.innerHTML = `${contador} Ativos`;
  container.appendChild(divi);

  let cancelar = divi.querySelector(".cancelamento");

  cancelar.addEventListener("click", async () => {
    const id = divi.dataset.id;

    try {
      const resposta = await fetch(
        `https://barbearia-navalha.onrender.com/deletar/${id}`,
        {
          method: "DELETE",
        },
      );

      divi.remove();
      contador--;
      contagemAgendamentos.innerHTML = `${contador} Ativos`;
    } catch (error) {
      alert("Erro ao deletar");
      console.log(error);
    }
  });
});
