import React from "react";
import styles from './styles.module.css';

const Populares = () => {
    return (
        <section className={styles.populares}>
            <div className={styles.populares__itens}>
                <div className={styles.populares__info}>
                    <div className={styles.populares__cabecalho}>
                        <h4 className={styles.populares__titulo}>
                            Aplicativos populares
                        </h4>
                        <button className={styles.populares__botao}>
                            <i className="fas fa-th"></i>
                            Visualizar todos
                        </button>
                    </div>
                </div>
                <div className={styles.populares__conteudo}>
                    <div className={styles.populares__card}>
                        <img className={styles.populares__card___imagem} src="https://images7.alphacoders.com/941/941884.jpg" alt="img" />
                            <div className={styles.populares__card___corpo}>
                                <div className={styles.populares__card___cabecalho}>
                                    <h5 className={styles.populares__card___titulo}>Slack</h5>
                                    <time className={styles.populares__card___data} datetime="2013-08-01">08/2013</time>
                                </div>
                                <div className={styles.populares__card___descricao}>
                                    Traduzido do inglês-O Slack é um conjunto baseado em nuvem de ferramentas e serviços proprietários de colaboração em equipe, fundado por Stewart Butterfield. O Slack começou como uma ferramenta interna usada por sua empresa, Tiny Speck, no desenvolvimento do Glitch, um jogo online agora extinto.
                                </div>
                            </div>
                    </div>
                    <div className={styles.populares__card}>
                        <img className={styles.populares__card___imagem} src="https://images7.alphacoders.com/941/941884.jpg" alt="img" />
                            <div className={styles.populares__card___corpo}>
                                <div className={styles.populares__card___cabecalho}>
                                    <h5 className={styles.populares__card___titulo}>Whatsapp</h5>
                                    <time className={styles.populares__card___data} datetime="20090-01-01">2009</time>
                                </div>
                                <div className={styles.populares__card___descricao}>
                                    WhatsApp é um aplicativo multiplataforma de mensagens instantâneas e chamadas de voz para smartphones. Além de mensagens de texto, os usuários podem enviar imagens, vídeos e documentos em PDF, além de fazer ligações grátis por meio de uma conexão com a internet.
                                </div>
                            </div>
                    </div>
                    <div className={styles.populares__card}>
                        <img className={styles.populares__card___imagem} src="https://images7.alphacoders.com/941/941884.jpg" alt="img" />
                            <div className={styles.populares__card___corpo}>
                                <div className={styles.populares__card___cabecalho}>
                                    <h5 className={styles.populares__card___titulo}>Telegram</h5>
                                    <time className={styles.populares__card___data} datetime="2013-08-14">14/08/2013</time>
                                </div>
                                <div className={styles.populares__card___descricao}>
                                    O Telegram é um serviço de mensagens instantâneas baseado na nuvem. O Telegram está disponível para smartphones ou tablets, computadores e também como Aplicação web. Os usuários podem enviar mensagens e trocar fotos, vídeos, stickers e arquivos de qualquer tipo.
                                </div>
                            </div>
                    </div>
                    <div className={styles.populares__card}>
                        <img className={styles.populares__card___imagem} src="https://images7.alphacoders.com/941/941884.jpg" alt="img" />
                            <div className={styles.populares__card___corpo}>
                                <div className={styles.populares__card___cabecalho}>
                                    <h5 className={styles.populares__card___titulo}>Trello</h5>
                                    <time className={styles.populares__card___data} datetime="2011-01-01">2011</time>
                                </div>
                                <div className={styles.populares__card___descricao}>
                                    Trello é um aplicativo de gerenciamento de projeto baseado na web originalmente feito por Fog Creek Software em 2011. Em 2014 tornou-se uma empresa. Ele opera um modelo de negócio Freemium, no qual é disponibilizado a versão gratuita ou paga para o usuário.
                                </div>
                            </div>
                    </div>
                    <div className={styles.populares__card}>
                        <img className={styles.populares__card___imagem} src="https://images7.alphacoders.com/941/941884.jpg" alt="img" />
                            <div className={styles.populares__card___corpo}>
                                <div className={styles.populares__card___cabecalho}>
                                    <h5 className={styles.populares__card___titulo}>Skype</h5>
                                    <time className={styles.populares__card___data} datetime="2003-08-01">08/2003</time>
                                </div>
                                <div className={styles.populares__card___descricao}>
                                    Skype é um software que permite comunicação pela Internet através de conexões de voz e vídeo, criado por Janus Friis e Niklas Zennstrom. O Skype foi lançado no ano de 2003. Em 2005 foi vendido para a empresa eBay e pertence, desde maio de 2011, à Microsoft.
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Populares;