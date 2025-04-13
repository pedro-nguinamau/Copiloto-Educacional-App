import { Link } from 'react-router-dom';
import '../assets/css/Home.css';

const Home = () => {
    return (
        <div className="home-container">
            <header className="header">
                <h1 className="title">Copiloto Educacional</h1>
                {/* <h2 className="subtitle">Inteligência Artificial para Transformar sua Aprendizagem</h2> */}
                
                <div className="button-group">
                        <Link to='/signUp' className="btn btn-primary">Registrar-me</Link>
                        <Link to='/signIn' className="btn btn-secondary">Entrar</Link>
                    </div>
            </header>
            
            <main className="main-content">
                <section className="content-section">
                    <article className="text-block">
                        <p className="paragraph">
                            A palavra <span className="highlight">"inteligência"</span>, derivada do Latim "intelligentia", que se origina de "intelligere" (entre + escolher), pode ser definida como a capacidade de tomar boas decisões. A Inteligência Artificial (IA), por sua vez, é uma criação humana, construída com o intuito de emular essas capacidades humanas de escolha e decisão.
                        </p>
                        
                        <p className="paragraph">
                            Ao contrário de processos naturais ou divinos, a IA é um produto da invenção humana, concebida para resolver problemas complexos com base em conhecimentos adquiridos e manipulados. A principal característica da IA é sua habilidade de realizar tarefas tipicamente humanas, como classificação, predição e otimização, de forma precisa, rápida e com grande capacidade de armazenamento de dados.
                        </p>
                    </article>
                </section>

                <section className="content-section">
                    <h2 className="section-title">1.2. Definição de Inteligência Artificial</h2>
                    <article className="text-block">
                        <p className="paragraph">
                            Embora ainda não exista um consenso absoluto sobre o conceito de Inteligência Artificial, diferentes definições ajudam a esclarecer o escopo dessa área. A IA é frequentemente descrita como uma ciência multidisciplinar voltada para dotar as máquinas de habilidades humanas, como inteligência, criatividade e capacidade de resolver problemas complexos.
                        </p>
                        
                        <div className="quote-block">
                            <p>"A IA é o estudo de como fazer com que os computadores realizem tarefas que, atualmente, os seres humanos executam com maior eficiência."</p>
                            <cite>- Richt & Knight (1994)</cite>
                        </div>

                        <div className="quote-block">
                            <p>"A IA é a busca por modelos computacionais que representem os processos cognitivos humanos inteligentes."</p>
                            <cite>- Keller (1991)</cite>
                        </div>

                        <p className="paragraph">
                            A Inteligência Artificial busca transformar as máquinas em ferramentas capazes de oferecer soluções inovadoras e eficientes para problemas que seriam difíceis de serem resolvidos apenas por seres humanos, aprimorando a forma como interagimos com a tecnologia.
                        </p>
                    </article>
                </section>

                <section className="content-section">
                    <h2 className="section-title">1.3. Conceito de Copiloto</h2>
                    <article className="text-block">
                        <p className="paragraph">
                            O conceito de copiloto, embora inicialmente associado ao auxílio em tarefas de navegação, foi expandido por grandes empresas de tecnologia para se aplicar a diversos contextos, incluindo o corporativo e o educacional. Empresas como Microsoft, Samsung, Google e Apple têm investido pesadamente no desenvolvimento de assistentes digitais e copilotos.
                        </p>
                        
                        <div className="feature-list">
                            <div className="feature-item">
                                <h3>Microsoft Copilot</h3>
                                <p>Integrado com produtos como Word, Excel e Teams para ajudar a gerenciar tarefas e analisar dados</p>
                            </div>
                            <div className="feature-item">
                                <h3>Samsung Bixby</h3>
                                <p>Assistente virtual com funcionalidades de copiloto no ecossistema Samsung</p>
                            </div>
                        </div>

                        <p className="paragraph">
                            Nosso Copiloto Educacional diferencia-se por focar nas necessidades específicas dos estudantes, oferecendo funcionalidades como organização de tarefas, sugestões de fontes de pesquisa e ajuda com dificuldades de aprendizagem.
                        </p>
                    </article>
                </section>

                <section className="content-section">
                    <h2 className="section-title">1.4. Comparação entre Copilotos</h2>
                    <article className="text-block">
                        <div className="comparison-table">
                            <div className="comparison-header">
                                <div></div>
                                <div>Comerciais</div>
                                <div>Educacionais</div>
                            </div>
                            <div className="comparison-row">
                                <div>Foco</div>
                                <div>Produtividade empresarial</div>
                                <div>Desempenho acadêmico</div>
                            </div>
                            <div className="comparison-row">
                                <div>Público</div>
                                <div>Generalista</div>
                                <div>Estudantes</div>
                            </div>
                            <div className="comparison-row">
                                <div>Funcionalidades</div>
                                <div>Relatórios, reuniões, análise de dados</div>
                                <div>Organização de tarefas, suporte ao aprendizado</div>
                            </div>
                        </div>
                    </article>
                </section>

                <section className="content-section">
                    <h2 className="section-title">1.5. Modelo GPT integrado</h2>
                    <article className="text-block">
                        <p className="paragraph">
                            A OpenAI desenvolveu o GPT (Generative Pre-trained Transformer), uma série de modelos de linguagem que revolucionaram a interação com a tecnologia. Nosso Copiloto Educacional utiliza essa tecnologia para oferecer suporte acadêmico inteligente.
                        </p>
                        
                        <div className="feature-cards">
                            <div className="card">
                                <h3>Compreensão de Texto</h3>
                                <p>Capacidade de analisar e interpretar materiais acadêmicos</p>
                            </div>
                            <div className="card">
                                <h3>Geração de Respostas</h3>
                                <p>Produção de explicações e soluções para problemas acadêmicos</p>
                            </div>
                            <div className="card">
                                <h3>Aprendizado Contínuo</h3>
                                <p>Adapta-se às necessidades específicas do estudante</p>
                            </div>
                        </div>
                    </article>
                </section>

                <section className="content-section">
                    <h2 className="section-title">1.6. Como funciona uma IA?</h2>
                    <article className="text-block">
                        <ol className="process-list">
                            <li>
                                <strong>Arquitetura de Rede Neural:</strong> O GPT utiliza Transformers, com várias camadas que aprendem padrões complexos
                            </li>
                            <li>
                                <strong>Treinamento Supervisionado:</strong> O modelo aprende a prever a próxima palavra em vastos conjuntos de dados textuais
                            </li>
                            <li>
                                <strong>Aprendizado Não Supervisionado:</strong> Compreende relações semânticas e sintáticas complexas
                            </li>
                            <li>
                                <strong>Ajuste Fino:</strong> Especialização para tarefas acadêmicas específicas
                            </li>
                            <li>
                                <strong>Geração de Texto:</strong> Produz respostas coerentes e relevantes baseadas no contexto
                            </li>
                        </ol>
                    </article>
                </section>

                {/* <div className="cta-section">
                    <h3 className="cta-title">Comece sua jornada acadêmica agora</h3>
                    <div className="button-group">
                        <Link to='/signUp' className="btn btn-primary">Registrar-me</Link>
                        <Link to='/signIn' className="btn btn-secondary">Entrar</Link>
                    </div>
                </div> */}
            </main>
        </div>
    );
};

export default Home;