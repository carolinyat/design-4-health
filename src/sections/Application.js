// src/sections/Application.js
import React from 'react';
import FlippableCard from '../components/FlippableCard';
import LineChart from '../components/LineChart';
import uxUi from '../assets/images/UI-UX-1.png';

function Application() {
  return (
    <section id="application" className="section">
      <div className="application-container">
        <h1 className="application-title">Aplicação Prática em Interfaces de Saúde</h1>
        <p className="application-subtitle">
          Como a escolha correta das cores pode melhorar a usabilidade e a experiência dos usuários em plataformas de saúde?
        </p>

        <div className="application-examples">
          <FlippableCard
            frontContent={
              <>
                <h2>Design de Botões e Chamadas para Ação</h2>
                <p>
                  Botões de ação, como "Marcar Consulta" ou "Confirmar Prescrição", devem utilizar cores que incentivem a ação, como o <span className="color-sample blue-sample">azul</span> ou <span className="color-sample green-sample">verde</span>.
                </p>
              </>
            }
            backContent={
              <div className="card-back">
                <h2>Exemplo de Botões</h2>
                <div className="button-examples">
                  <div className="button-example correct">
                    <p style={{ color: 'green' }}>✔</p>
                    <button className="correct-button">Marcar Consulta</button>
                  </div>
                  <div className="button-example incorrect">
                    <p style={{ color: 'red' }}>✖</p>
                    <button className="incorrect-button">Marcar Consulta</button>
                  </div>
                </div>
              </div>
            }
          />

          <FlippableCard
            frontContent={
              <>
                <h2>Uso de Cores para Feedback Visual</h2>
                <p>
                  Mensagens de erro e sucesso em formulários devem ser claramente destacadas. Erros em <span className="color-sample red-sample">vermelho</span> e confirmações em <span className="color-sample green-sample">verde</span> ajudam o usuário a identificar rapidamente o status da ação.
                </p>
              </>
            }
            backContent={
              <div>
                <h2>Exemplo de Mensagens</h2>
                <p style={{ color: 'green' }}>✔ Ação concluída com sucesso</p>
                <p style={{ color: 'red' }}>✖ Erro na conclusão da ação</p>
              </div>
            }
          />
        </div>

        <div className="application-examples2">
          <FlippableCard
            frontContent={
              <>
                <h2>Atenção aos Detalhes nos Alertas Médicos</h2>
                <p>
                  Alertas de lembrete de medicação ou consulta podem usar <span className="color-sample yellow-sample">amarelo</span> para chamar atenção, mas sem causar alarme. Já os alertas de emergência devem usar <span className="color-sample red-sample">vermelho</span> para indicar urgência.
                </p>
              </>
            }
            backContent={
              <div>
                <h2>Exemplo de Alertas</h2>
                <p className='mensagem-alerta'>Cuidado! Seus hábitos alimentares precisam melhorar.</p>
                <p className='mensagem-cuidado'>Atenção! Possíveis sintomas de infarto! Procure o hospital mais próximo.</p>
              </div>
            }
          />

          <FlippableCard
            frontContent={
              <>
                <h2>Paleta de Cores para Diferentes Contextos</h2>
                <p>
                  Em dashboards de análise de dados de saúde, use uma paleta de cores consistente para representar diferentes tipos de dados, como <span className="color-sample green-sample">verde</span> para positivos, <span className="color-sample red-sample">vermelho</span> para negativos e <span className="color-sample blue-sample">azul</span> para neutros.
                </p>
              </>
            }
            backContent={
              <div>
                <h2>Exemplo de Dashboard</h2>
                <LineChart />
              </div>
            }
          />
        </div>
        {/* <img className="ux-ui" src={uxUi} alt="" /> */}
      </div>
    </section>
  );
}

export default Application;
