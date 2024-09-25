// src/sections/Application.js
import React from 'react';

function Application() {
  return (
    <section id="application" className="section">
      <div className="application-container">
        <h1 className="application-title">Aplicação Prática em Interfaces de Saúde</h1>
        <p className="application-subtitle">
          Veja como a escolha correta das cores pode melhorar a usabilidade e a experiência dos usuários em plataformas de saúde.
        </p>

        <div className="application-examples">
          <div className="application-example">
            <h2>Design de Botões e Chamadas para Ação</h2>
            <p>
              Botões de ação, como "Marcar Consulta" ou "Confirmar Prescrição", devem utilizar cores que incentivem a ação, como o <span className="color-sample blue-sample">azul</span> ou <span className="color-sample green-sample">verde</span>. Eles devem ser visualmente distintos dos botões secundários, que podem ter cores neutras.
            </p>
          </div>

          <div className="application-example">
            <h2>Uso de Cores para Feedback Visual</h2>
            <p>
              Mensagens de erro e sucesso em formulários devem ser claramente destacadas. Erros em <span className="color-sample red-sample">vermelho</span> e confirmações em <span className="color-sample green-sample">verde</span> ajudam o usuário a identificar rapidamente o status da ação.
            </p>
          </div>
          <div className="application-examples2">
            <div className="application-example">
              <h2>Atenção aos Detalhes nos Alertas Médicos</h2>
              <p>
                Alertas de lembrete de medicação ou consulta podem usar <span className="color-sample yellow-sample">amarelo</span> para chamar atenção, mas sem causar alarme. Já os alertas de emergência devem usar <span className="color-sample red-sample">vermelho</span> para indicar urgência.
              </p>
            </div>

            <div className="application-example">
              <h2>Paleta de Cores para Diferentes Contextos</h2>
              <p>
                Em dashboards de análise de dados de saúde, use uma paleta de cores consistente para representar diferentes tipos de dados, como <span className="color-sample green-sample">verde</span> para positivos, <span className="color-sample red-sample">vermelho</span> para negativos e <span className="color-sample blue-sample">azul</span> para neutros.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Application;
