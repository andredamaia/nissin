import Head from 'next/head'

import Header from '../components/header';
import Information from '../components/information';
import Footer from '../components/footer';

import styles from '../styles/pages/sobre.module.scss';

export default function Parceiros() {
  return (
    <>
        <Head>
            <title>Parceiros - Nissin Solutions</title>
        </Head>

        <Header />

        <div className={styles.bannerContent}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className={styles.titleBanner}>
                            <h1><span>conheça</span> <br/>nossos parceiros</h1>

                            <p>Apenas com parcerias <br />de alta qualidade conseguimos <br />chegar mais longe e crescer <br />cada vez mais.</p>
                        </div>
                    </div>

                    <div className="col-12">
                        
                    </div>
                </div>
            </div>
        </div>

        <div className={`${styles.areaWhite}`}>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-xl-3">
                        <div className={styles.parceirosHolder}><img src="/logo.jpg" style={{ width: 180, mixBlendMode: 'multiply' }} alt="Nissin solutions" /></div>
                    </div>

                    <div className="col-12 col-xl-8 offset-xl-1">
                        <h4>Nissin Solutions</h4>

                        <p>Somos uma distribuidora e importadora de ferramentas de alta performance.  Ao longo de nossa história, firmamos parcerias com grandes marcas reconhecidas mundialmente.</p>

                        <p>Nosso modelo de negócio foi desenvolvido para atuar nas melhorias de processos, aplicando ferramentas e soluções inovadoras, sempre visando um ganho de produtividade, aumentando a performance e a competitividade de nossos clientes.</p>
                    </div>

                    <div className="col-12">
                        <div style={{ margin: '40px 0 60px', border: '1px solid #f1f1f1' }}></div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 col-xl-3">
                        <div className={styles.parceirosHolder}><img src="/ceratizit.png" alt="" /></div>
                    </div>

                    <div className="col-12 col-xl-8 offset-xl-1">
                        <h4>Ceratizit</h4>

                        <p>Há mais de 95 anos, a CERATIZIT é pioneira no desenvolvimento de produtos de alta performance em metal duro para ferramentas de corte e proteção contra desgaste.</p>

                        <p>A empresa de propriedade privada, sediada em Mamer, Luxemburgo, desenvolve e fabrica ferramentas de corte em carboneto, altamente especializada em produtos para usinagem em todos os segmentos da indústria.</p>

                        <p>O GRUPO CERATIZIT tem a competência metalúrgica que permite controlar toda a cadeia de processo na produção de metal duro, desde a produção da matéria prima à preparação dos pós para sinterização e acabamento, desta forma, podemos fazer os ajustes corretos, a qualquer momento, e adaptarmos as propriedades do material às suas necessidades individuais.</p>

                        <p>Toda essa excelência na fabricação de ferramentas nos credencia a sermos seu Parceiro Confiável para soluções em usinagem.</p>

                        <p>Saiba mais sobre a Ceratizit: <a target="_blank" href="https://www.ceratizit.com">www.ceratizit.com</a></p>

                        <p>A NISSIN SOLUTIONS possui exclusividade de distribuição das nossas ferramentas para os estados de Santa Catarina e Paraná.</p>
                    </div>

                    <div className="col-12">
                        <div style={{ margin: '40px 0 60px', border: '1px solid #f1f1f1' }}></div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 col-xl-3">
                        <div className={styles.parceirosHolder}><img src="/osg.png" alt="" /></div>
                    </div>

                    <div className="col-12 col-xl-8 offset-xl-1">
                        <h4>OSG</h4>

                        <p>A OSG é líder mundial na fabricação de ferramentas de corte como machos, brocas, fresas e laminadores. Oferecer a melhor qualidade, precisão e eficiência de nossos produtos são as principais preocupações ao fornecer ferramentas para a indústria de manufatura.  A OSG aproveita a habilidade técnica cultivada através de anos de experiência para desenvolver e fornecer aos nossos clientes produtos de alto valor agregado que atendam às suas necessidades, melhorando o seu processo e a qualidade dos produtos fabricados.</p>

                        <p>Saiba mais sobre a OSG: <a target="_blank" href="https://www.osg.com.br">www.osg.com.br</a></p>

                        <p>A NISSIN SOLUTIONS é distribuidor autorizado para os estados de Santa Catarina e Paraná.</p>
                    </div>

                    <div className="col-12">
                        <div style={{ margin: '40px 0 60px', border: '1px solid #f1f1f1' }}></div>
                    </div>
                </div>

                {/* <div className="row">
                    <div className="col-12 col-xl-3">
                        <div className={styles.parceirosHolder}><img src="/hgt.png" alt="" /></div>
                    </div>

                    <div className="col-12 col-xl-8 offset-xl-1">
                        <h4>HG Technology</h4>

                        <p>Fundada em Changhua Taiwan no ano 2002, inicia sua atividade com a produção totalmente voltada para grandes e conhecidas marcas japonesas e europeias, uma estratégia  comercial muito utilizada por grandes marcas.</p>

                        <p>Em 2004 com a aquisição da primeira máquina de alta tecnologia WALTER Grinding Machines, da Alemanha, iniciamos a fabricação da nossa marca HGT.</p>

                        <p>Nosso parque fabril é muito moderno e automatizado, contando inclusive com fabricação de ferramentas totalmente autônomas.</p>

                        <p>Atualmente estamos exportando nossas ferramentas para mais 30 países: Europa, Oriente Médio, Sudeste Asiático e Américas.</p>

                        <p>A NISSIN SOLUTIONS possui exclusividade de distribuição das nossas ferramentas para todo território brasileiro.</p>

                        <p>Saiba mais sobre a HG: <a target="_blank" href="https://www.hgt-endmills.com">www.hgt-endmills.com</a></p>
                    </div>

                    <div className="col-12">
                        <div style={{ margin: '40px 0 60px', border: '1px solid #f1f1f1' }}></div>
                    </div>
                </div> */}

                <div className="row">
                    <div className="col-12 col-xl-3">
                        <div className={styles.parceirosHolder}><img src="/startool.png" alt="" /></div>
                    </div>

                    <div className="col-12 col-xl-8 offset-xl-1">
                        <h4>StarTool</h4>

                        <p>A Startool está localizada em Seul, Coreia do Sul, é fabricante de fresas de metal duro.</p>

                        <p>Desde 2000, nos especializamos na fabricação de fresas de topo de qualidade, produzindo uma ampla seleção de produtos, nas quais se destacam a linha Blue.</p>

                        <p>Com a gama de diâmetros de 0,01mm a 20mm, a linha de fresas Blue, são muito aplicados em usinagem de longa duração e também são muito famosas pelo seu excelente desempenho em materiais endurecidos, com dureza até 68HRC.</p>

                        <p>A NISSIN SOLUTIONS possui exclusividade de distribuição das nossas ferramentas para todo território brasileiro.</p>

                        <p>Saiba mais sobre a StarTool: <a target="_blank" href="https://www.startool.co.kr">www.startool.co.kr</a></p>
                    </div>

                    <div className="col-12">
                        <div style={{ margin: '40px 0 60px', border: '1px solid #f1f1f1' }}></div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 col-xl-3">
                        <div className={styles.parceirosHolder}><img src="/spinwiser.png" alt="" /></div>
                    </div>

                    <div className="col-12 col-xl-8 offset-xl-1">
                        <h4>Spinwiser</h4>

                        <p>WISERS: Spinwiser é uma plataforma de gerenciamento eletrônico e automatizada de estoque e uso de ferramentas para a indústria 4.0 que envolve tecnologias em hardware, software e BI.</p>

                        <p>Com uma interface segura e fácil de navegar, você terá controle total do consumo de itens cadastrados no sistema</p>

                        <p>Conheça essa Plataforma, que revolucionou a forma de controle, armazenagem e liberação de ferramentas.</p>

                        <p>Saiba mais sobre a Spinwiser: <a target="_blank" href="https://www.spinwiser.com.br/">www.spinwiser.com.br/</a></p>
                    </div>

                    <div className="col-12">
                        <div style={{ margin: '40px 0 60px', border: '1px solid #f1f1f1' }}></div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 col-xl-3">
                        <div className={styles.parceirosHolder}><img src="/hev.png" alt="" /></div>
                    </div>

                    <div className="col-12 col-xl-8 offset-xl-1">
                        <h4>Hofmann & Vratny OHG</h4>

                        <p>Somos fabricantes de fresas há mais de 45 anos na região da Baviera na Alemanha.</p>

                        <p>Nosso processo de fabricação de fresa é altamente padronizado o qual garante que cada fresa mantenha a repetibilidade geométrica e dimensional.</p>

                        <p>Hofmann &amp; Vratny OHG, tem como objetivo, desempenhar um papel decisivo na formação e avanço da indústria, fabricando ferramentas que atendam as novas e futuras demandas de materiais.</p>

                        <p>A longa vida útil e alta precisão dimensional de nossas ferramentas, garante uma excelente relação custo-benefício para nossos clientes.</p>

                        <p>A NISSIN SOLUTIONS possui exclusividade de distribuição das nossas ferramentas para todo o território brasileiro.</p>

                        <p>Saiba mais sobre a H&V: <a target="_blank" href="https://www.hofmann-vratny.de/">www.hofmann-vratny.de</a></p>
                    </div>

                    <div className="col-12">
                        <div style={{ margin: '40px 0 60px', border: '1px solid #f1f1f1' }}></div>
                    </div>
                </div>

                {/* <div className="row">
                    <div className="col-12 col-xl-3">
                        <div className={styles.parceirosHolder}><img src="/american.png" alt="" /></div>
                    </div>

                    <div className="col-12 col-xl-8 offset-xl-1">
                        <h4>American</h4>

                        <p>Com atuação no mercado internacional, a América Hydraulics Solutions ganha destitute em soluções inovadoras, com baixo custo e alta rentabilidade no segmento de componentes hidráulicos para as indústrias em geral. Levar segurança, rendimento e eficiência é a principal missão. Conte com produtos que elevam o valor para seu negócio.</p>

                        <p>Com Know-how de mais de 20 anos de fabricação em sistemas de fixação automatizados, a American desenvolveu o seu sistema de fixação “ZERO POINT” Sistema de fixação super eficaz com redução de tempo em até 90% nos setup´s de peças.</p>

                        <p>A NISSIN SOLUTIONS é a distribuidora especialista autorizada para os estados de Santa Catarina e Paraná.</p>

                        <p>Saiba mais sobre a American: <a target="_blank" href="https://www.americanhydraulics.com.br">www.americanhydraulics.com.br </a></p>
                    </div>

                    <div className="col-12">
                        <div style={{ margin: '40px 0 60px', border: '1px solid #f1f1f1' }}></div>
                    </div>
                </div> */}

                <div className="row">
                    <div className="col-12 col-xl-3">
                        <div className={styles.parceirosHolder}><img src="/bt-fixo.jpg" alt="" /></div>
                    </div>

                    <div className="col-12 col-xl-8 offset-xl-1">
                        <h4>BT Fixo</h4>

                        <p>A BTfixo atua no segmento de acessórios para usinagem desde 2008, trabalhando em parceria com os principais fabricantes de ferramentas do mercado Internacional.</p>

                        <p>Iniciando em 2017 a distribuição com exclusividade para o Brasil, de soquetes de impacto da empresa Action, um dos maiores fabricantes de soquetes de impacto do mundo, situada em Taiwan.</p>

                        <p>Nossa empresa tem como objetivo primordial o aperfeiçoamento de soluções que atendam a demanda no ramo de acessórios para usinagem e soquetes de impacto nos mais variados segmentos.</p>

                        <p>Nosso atendimento está capacitado para suprir as necessidades de cada cliente, estoque e logística, sendo sinônimo de garantia de disponibilidade.</p>

                        <p>A empresa dedica especial atenção para o desenvolvimento dos clientes juntamente como o processo de negociação, transformando-a em destaque no mercado.</p>

                        <p>Saiba mais sobre a BT Fixo: <a target="_blank" href="http://www.btfixo.com.br">www.btfixo.com.br </a></p>
                    </div>

                    <div className="col-12">
                        <div style={{ margin: '40px 0 60px', border: '1px solid #f1f1f1' }}></div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 col-xl-3">
                        <div className={styles.parceirosHolder}><img src="/hepyc.png" alt="" /></div>
                    </div>

                    <div className="col-12 col-xl-8 offset-xl-1">
                        <h4>Hepyc</h4>

                        <p>Com mais de 75 anos de experiência, a Hepyc é referência internacional no desenvolvimento e fabricação de ferramentas de corte de alta precisão. Desde sua fundação, a empresa
                        mantém um compromisso inabalável com a qualidade, a inovação e o desempenho, tornando-se uma das marcas mais respeitadas do setor metalmecânico.</p>

                        <p>Pioneira na adoção de tecnologias de Indústria 4.0, a Hepyc combina investimentos contínuos em automação, engenharia e pesquisa de materiais com um rigoroso controle de qualidade em cada etapa do processo produtivo. O resultado é um portfólio completo de soluções para usinagem, reconhecido pela confiabilidade e pela performance em aplicações de alta exigência.</p>

                        <p>Presente nos principais mercados globais, a Hepyc é sinônimo de evolução, tecnologia e precisão, valores que refletem seu compromisso em acompanhar as transformações da manufatura moderna e antecipar as demandas do futuro da produção industrial.</p>

                        <p>Saiba mais sobre a Hepyc: <a target="_blank" href="https://www.hepyc.com/en/">www.hepyc.com</a></p>
                    </div>

                    <div className="col-12">
                        <div style={{ margin: '40px 0 60px', border: '1px solid #f1f1f1' }}></div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 col-xl-3">
                        <div className={styles.parceirosHolder}><img src="/amec.png" alt="" /></div>
                    </div>

                    <div className="col-12 col-xl-8 offset-xl-1">
                        <h4>AMEC</h4>

                        <p>A Allied Machine & Engineering é uma fabricante líder de sistemas de ferramentas de corte para furação e acabamento de furos. A Allied dedica suas avançadas capacidades de engenharia e manufatura à criação da mais ampla seleção de ferramentas com valor agregado disponível para as indústrias de corte de metais em todo o mundo.</p>

                        <p>Nossas soluções em ferramentas oferecem o menor custo por furo em uma ampla variedade de aplicações de furação, alargamento, brunimento, roscamento e mandrilamento.</p>

                        <p>Localizada em Dover, Ohio, as tecnologias de furação de precisão da Allied fornecem aos usuários finais em todo o mundo o mais alto nível de desempenho. A engenharia de precisão e o suporte técnico especializado fazem da Allied a primeira e melhor escolha para resolver desafios complexos no corte de metais.</p>

                        <p>Saiba mais sobre a AMEC: <a target="_blank" href="https://alliedmachine.com/">www.alliedmachine.com/</a></p>
                    </div>

                    <div className="col-12">
                        <div style={{ margin: '40px 0 60px', border: '1px solid #f1f1f1' }}></div>
                    </div>
                </div>
            </div>
        </div>

        <Information />

        <Footer />
    </>
  )
}
