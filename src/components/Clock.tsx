// Importa a biblioteca React e seus tipos
import React from 'react';
/**
 * DEFINIÇÃO DE TIPOS (Props)
 *
 * Props são propriedades que um componente recebe de seu componente pai
 * Este tipo define quais props o componente Clock espera receber
 */
type Props = {
  // 'name' é uma string que será exibida como identificador do relógio
  // Exemplo: "Clock-0", "Clock-1234", etc.
  name: string;
};
/**
 * DEFINIÇÃO DE TIPOS (State)
 *
 * State é o estado interno do componente que pode mudar ao longo do tempo
 * Quando o state muda, o componente é re-renderizado automaticamente
 */
type State = {
  // 'time' armazena a data/hora atual como um objeto Date
  // Este valor é atualizado a cada segundo
  time: Date;
};
/**
 * CLASSE CLOCK - Componente de Classe React
 *
 * Estende React.Component com dois parâmetros genéricos:
 * - Props: define as propriedades que o componente recebe
 * - State: define o estado interno do componente
 *
 * Um componente de classe permite usar ciclos de vida (lifecycle methods)
 * como componentDidMount, componentDidUpdate e componentWillUnmount
 */
export class Clock extends React.Component<Props, State> {
  /**
   * INICIALIZAÇÃO DO STATE
   *
   * Define o estado inicial do componente
   * 'new Date()' cria um objeto Date com a data/hora atual
   * Este state será atualizado a cada segundo pelo setInterval
   */
  state: State = {
    time: new Date(),
  };

  /**
   * ARMAZENAMENTO DO ID DO INTERVALO
   *
   * 'timerId' armazena o ID retornado por window.setInterval
   * Este ID é necessário para parar o intervalo depois usando clearInterval
   * Inicializado como 0 (valor padrão que significa "nenhum intervalo ativo")
   */
  timerId = 0;

  /**
   * CICLO DE VIDA: componentDidMount
   *
   * Este método é chamado APENAS UMA VEZ, logo após o componente ser
   * inserido no DOM (Document Object Model - a página HTML)
   *
   * É o lugar ideal para:
   * - Iniciar timers/intervalos
   * - Fazer requisições HTTP
   * - Adicionar event listeners
   * - Configurar recursos que precisam ser limpos depois
   */
  componentDidMount() {
    /**
     * window.setInterval executa uma função repetidamente a cada intervalo de tempo
     * Aqui: a cada 1000 milissegundos (1 segundo)
     *
     * Retorna um ID que é armazenado em this.timerId
     * Este ID será usado depois para parar o intervalo
     */
    this.timerId = window.setInterval(() => {
      /**
       * Cria um novo objeto Date com a hora atual
       * Isto captura o momento exato em que o intervalo executa
       */
      const currentTime = new Date();

      /**
       * setState atualiza o estado do componente
       * Quando o state muda, React automaticamente re-renderiza o componente
       * Isto causa uma atualização visual da hora na tela
       */
      this.setState({ time: currentTime });
      /**
       * EXPLICAÇÃO DO console.log:
       *
       * currentTime.toUTCString() converte a data para string no formato UTC
       * Exemplo: "Mon Sep 25 2023 09:32:31 GMT+0000 (Coordinated Universal Time)"
       *
       * .slice(-12, -4) extrai apenas a hora (HH:MM:SS)
       * - slice(-12, -4) significa: "pega do 12º caractere do final até o 4º do final"
       * - Resultado: "09:32:31"
       *
       * Este console.log imprime a hora no console do navegador (DevTools)
       * Útil para debugging e verificar se o relógio está funcionando
       */
      // eslint-disable-next-line no-console
      console.log(currentTime.toUTCString().slice(-12, -4));
    }, 1000); // 1000 milissegundos = 1 segundo
  }

  /**
   * CICLO DE VIDA: componentDidUpdate
   *
   * Este método é chamado TODA VEZ que o componente é atualizado
   * (quando props ou state mudam)
   *
   * Recebe as props anteriores como parâmetro para comparação
   * Útil para detectar mudanças nas props
   */
  componentDidUpdate(prevProps: Readonly<Props>) {
    /**
     * Compara a prop 'name' anterior com a atual
     * Se forem diferentes, significa que o nome foi alterado
     */
    if (prevProps.name !== this.props.name) {
      /**
       * console.warn imprime um aviso no console
       * Mostra a mudança de nome: "Renamed from Clock-0 to Clock-1234"
       *
       * Template literal (backticks) permite inserir variáveis com ${variável}
       */
      // eslint-disable-next-line no-console
      console.warn(`Renamed from ${prevProps.name} to ${this.props.name}`);
    }
  }

  /**
   * CICLO DE VIDA: componentWillUnmount
   *
   * Este método é chamado APENAS UMA VEZ, logo antes do componente
   * ser removido do DOM
   *
   * É o lugar ideal para LIMPEZA DE RECURSOS:
   * - Parar timers/intervalos (evita código executando em componentes inexistentes)
   * - Remover event listeners (evita memory leaks)
   * - Cancelar requisições HTTP pendentes
   *
   * Se não limparmos recursos, podem ocorrer erros e vazamento de memória
   */
  componentWillUnmount() {
    /**
     * window.clearInterval para o intervalo que foi criado em componentDidMount
     * Usa o ID armazenado em this.timerId para identificar qual intervalo parar
     *
     * Isto é CRÍTICO: sem isto, o setInterval continuaria executando
     * mesmo depois que o componente fosse removido da página
     */
    window.clearInterval(this.timerId);
  }

  /**
   * MÉTODO RENDER
   *
   * Este método é obrigatório em componentes de classe
   * Retorna o JSX (HTML + JavaScript) que será exibido na tela
   *
   * É chamado:
   * - Uma vez quando o componente é criado
   * - Toda vez que o state ou props mudam
   */
  render() {
    /**
     * Desestruturação de props
     * Extrai a prop 'name' de this.props para usar mais facilmente
     * Equivalente a: const name = this.props.name;
     */
    const { name } = this.props;
    /**
     * Desestruturação de state
     * Extrai o state 'time' de this.state para usar mais facilmente
     * Equivalente a: const time = this.state.time;
     */
    const { time } = this.state;

    /**
     * RETORNO DO JSX
     *
     * JSX é uma sintaxe que mistura HTML com JavaScript
     * Parece HTML, mas é transformado em chamadas JavaScript
     */
    return (
      // Div principal com classe CSS 'Clock'
      <div className="Clock">
        {/*
          Elemento strong que exibe o nome do relógio
          className é usado em React (em HTML seria 'class')
          Classe CSS 'Clock__name' para estilização
        */}
        <strong className="Clock__name">{name}</strong>
        {/* Texto simples entre as chaves */}
        {' time is '}
        {/*
          Span que exibe a hora atual
          .toUTCString().slice(-12, -4) extrai apenas HH:MM:SS
          Exemplo: "09:32:31"

          Este valor é atualizado a cada segundo porque:
          1. O setInterval em componentDidMount executa a cada 1s
          2. Chama setState({ time: currentTime })
          3. setState causa uma re-renderização
          4. render() é chamado novamente com o novo 'time'
          5. A tela é atualizada com a nova hora
        */}
        <span className="Clock__time">{time.toUTCString().slice(-12, -4)}</span>
      </div>
    );
  }
}
