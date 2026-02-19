import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';
/**
 * Função auxiliar que gera um nome aleatório para o relógio
 * Extrai os últimos 4 dígitos do timestamp atual (Date.now())
 * Exemplo: Se Date.now() = 1699564123456, slice(-4) retorna "3456"
 * Resultado final: "Clock-3456"
 */
function getRandomName(): string {
  // Converte o timestamp atual para string
  const value = Date.now().toString().slice(-4);

  // Retorna o nome formatado com o prefixo "Clock-"
  return `Clock-${value}`;
}

/**
 * Define o tipo de estado (State) do componente App
 * hasClock: boolean - controla se o relógio está visível ou não
 * clockName: string - armazena o nome atual do relógio
 */
type State = {
  hasClock: boolean;
  clockName: string;
};
/**
 * Componente principal App
 * Estende React.Component com tipos genéricos:
 * - {} = sem props (primeiro parâmetro genérico)
 * - State = tipo do estado (segundo parâmetro genérico)
 */
export class App extends React.Component<{}, State> {
  /**
   * Estado inicial do componente
   * hasClock: true - o relógio começa visível
   * clockName: 'Clock-0' - nome padrão inicial
   */
  state: State = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  /**
   * Propriedade para armazenar o ID do intervalo (setInterval)
   * Necessária para poder limpar o intervalo depois (clearInterval)
   * Inicializado como 0 (valor padrão)
   */
  nameTimerId = 0;

  /**
   * CICLO DE VIDA: componentDidMount
   * Executado APENAS UMA VEZ, logo após o componente ser montado no DOM
   *
   * Propósito:
   * - Adicionar event listeners (ouvintes de eventos)
   * - Inicializar timers/intervalos
   * - Fazer requisições HTTP
   * - Configurar recursos que precisam ser limpos depois
   */
  componentDidMount() {
    /**
     * Adiciona listener para o evento 'contextmenu' (clique direito)
     * Quando o usuário clicar com o botão direito, handleRightClick será chamado
     * 'this' refere-se à instância do componente
     */
    document.addEventListener('contextmenu', this.handleRightClick);
    /**
     * Adiciona listener para o evento 'click' (clique esquerdo)
     * Quando o usuário clicar com o botão esquerdo, handleLeftClick será chamado
     */
    document.addEventListener('click', this.handleLeftClick);
    /**
     * Cria um intervalo que executa a função a cada 3300 milissegundos (3.3 segundos)
     * window.setInterval retorna um ID que é armazenado em this.nameTimerId
     * Este ID é necessário para parar o intervalo depois usando clearInterval
     *
     * A cada execução:
     * - Chama getRandomName() para gerar um novo nome
     * - Atualiza o estado com setState({ clockName: novoNome })
     * - Isso causa uma re-renderização do componente
     */
    this.nameTimerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  /**
   * CICLO DE VIDA: componentWillUnmount
   * Executado APENAS UMA VEZ, logo antes do componente ser removido do DOM
   *
   * Propósito: LIMPEZA DE RECURSOS
   * - Remover event listeners (evita memory leaks)
   * - Parar timers/intervalos (evita código executando em componentes inexistentes)
   * - Cancelar requisições HTTP pendentes
   *
   * ⚠️ IMPORTANTE: Se não remover listeners e intervalos, causará memory leaks!
   */
  componentWillUnmount() {
    /**
     * Remove o listener do evento 'contextmenu'
     * DEVE ser idêntico ao addEventListener (mesmo evento, mesma função)
     * Sem isso, o listener continuaria ativo mesmo após o componente ser removido
     */
    document.removeEventListener('contextmenu', this.handleRightClick);
    /**
     * Remove o listener do evento 'click'
     * Mesmo princípio: deve corresponder exatamente ao addEventListener
     */
    document.removeEventListener('click', this.handleLeftClick);
    /**
     * Para o intervalo usando o ID armazenado em this.nameTimerId
     * Isso impede que a função continue sendo executada a cada 3300ms
     * CRÍTICO: sem isso, setState seria chamado em um componente não-montado!
     */
    window.clearInterval(this.nameTimerId);
  }

  /**
   * MÉTODO DE EVENTO: handleRightClick
   * Executado quando o usuário clica com o botão direito (contextmenu)
   *
   * Sintaxe arrow function (=>) garante que 'this' sempre refira ao componente
   * Se fosse uma função normal, 'this' seria undefined
   *
   * Parâmetro: event - objeto MouseEvent contém informações do clique
   */
  handleRightClick = (event: MouseEvent) => {
    /**
     * preventDefault() impede o comportamento padrão do navegador
     * Sem isso, o menu de contexto (clique direito) apareceria na tela
     */
    event.preventDefault();
    /**
     * Atualiza o estado: hasClock = false
     * Isso faz o relógio desaparecer (veja no render: {hasClock && <Clock />})
     * setState causa uma re-renderização do componente
     */
    this.setState({ hasClock: false });
  };

  /**
   * MÉTODO DE EVENTO: handleLeftClick
   * Executado quando o usuário clica com o botão esquerdo (click)
   *
   * Sintaxe arrow function (=>) garante que 'this' sempre refira ao componente
   *
   * Nota: Este método não recebe parâmetros (não precisa do event)
   */
  handleLeftClick = () => {
    /**
     * Atualiza o estado: hasClock = true
     * Isso faz o relógio reaparecer
     * setState causa uma re-renderização do componente
     */
    this.setState({ hasClock: true });
  };

  /**
   * MÉTODO: render
   * Obrigatório em componentes de classe
   * Retorna a estrutura JSX que será exibida na tela
   * Executado sempre que o estado ou props mudam
   */
  render() {
    /**
     * Desestruturação do estado
     * Extrai hasClock e clockName do this.state para variáveis locais
     * Facilita a leitura e reduz repetição de código
     */
    const { hasClock, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {/**
         * Renderização condicional usando operador &&
         * Se hasClock for true: renderiza o componente <Clock />
         * Se hasClock for false: não renderiza nada (null)
         *
         * Passa clockName como prop para o componente Clock
         * O Clock usará este nome para exibir na tela
         */}
        {hasClock && <Clock name={clockName} />}
      </div>
    );
  }
}
