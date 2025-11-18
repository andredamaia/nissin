import Head from 'next/head';
import Link from 'next/link'
import { useRouter } from 'next/router'

import Header from '../components/header';
import Information from '../components/information';
import Footer from '../components/footer';
import ParceirosSwiper from '../components/parceiros-swiper';

import styles from '../styles/pages/index.module.scss';

export default function Home() {
  const router = useRouter()
  const { send } = router.query

  if(send){
    alert('Mensagem enviada com sucesso. Obrigado!')
  }

  return (
    <>
      <Head>
        <title>Nissin Solutions</title>
      </Head>

      <Header />

      <div className={styles.bannerContent}>
        <div className={styles.bannerOverlay}></div>
        <video autoPlay muted loop webkit-playsinline="true" className={styles.video}>
          <source src="/banner-2.mp4" type="video/mp4" />
        </video>

        <div className="container" style={{ position: 'relative', zIndex: 20 }}>
          <div className="row">
            <div className="col-12">
              <div className={styles.titleBanner}>
                <h1><span>especialista</span> <br/>em ferramentas <br/>de usinagem</h1>

                <Link legacyBehavior href="/produtos">
                  <a className="transition-line" data-hover-color="mantis">
                    Conheça nossos produtos <img src="/arrow-right.png" alt="" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.areaWhite} style={{ paddingBottom: 0 }}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>Produtos</h2>

              <div className={styles.boxProdutos}>
                <div className={styles.box}>
                  <div className={styles.produtosImg}>
                    <img src="/object-1.png" alt="" />
                  </div>

                  <div className={styles.produtosTitle}>
                      <h4>Cutting Tools</h4>

                      <p>A busca incessante por melhorias de processos, é a locomotiva que move nossa missão de fornecer soluções com inovação tecnológica, implantado melhorias contínuas em processos industriais, aplicando ferramentas de excelente custo-benefício...</p>
                  </div>

                  <Link legacyBehavior href="/cutting-tools">
                    <a className="buttonPrimary">
                      Ver Produtos
                    </a>
                  </Link>
                </div>

                <div className={styles.box}>
                  <div className={styles.produtosImg}>
                    <img src="/object-2.png" alt="" />
                  </div>

                  <div className={styles.produtosTitle}>
                    <h4>Management</h4>

                    <p>Acreditamos que as necessidades de nossos clientes, não se resume apenas em aquisição de produtos, suas demandas por inovações e melhorias contínuas a fim de reduzirem seus custos aumentando sua competitividade é essencial num mercado altamente competitivo...</p>
                  </div>

                  <Link legacyBehavior href="/management">
                    <a className="buttonPrimary">
                      Ver mais
                    </a>
                  </Link>
                </div>

                <div className={styles.box}>
                  <div className={styles.produtosImg}>
                    <img src="/object-3.png" alt="" />
                  </div>

                  <div className={styles.produtosTitle}>
                    <h4>Technology</h4>

                    <p>Você está satisfeito com a eficiência de suas máquinas? Nós podemos melhorar a eficiência delas, com nosso sistema de Preseting Laser, suas ferramentas podem ser presetadas de forma muito rápida, automática e segura...</p>
                  </div>

                  <Link legacyBehavior href="/tecnology">
                    <a className="buttonPrimary">
                      Ver mais
                    </a>
                  </Link>
                </div>
              </div> 
            </div>
          </div>
        </div>
      </div>

      <div className={styles.halfColor}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="row">
                <div className="col-12 col-md-4 col-xl-4">
                  <Link legacyBehavior href="/produtos/fresamento">
                    <a>
                      <div className={styles.boxManagement}>
                        <div className={styles.imgCircle}>
                          <img src="./icon-fresamento.jpg" alt="" />
                        </div>

                        <div className={styles.boxSubtitle}>
                          <span>Fresamento</span>
                        </div>
                      </div>
                    </a>
                  </Link>
                </div>

                <div className="col-12 col-md-4 col-xl-4">
                  <Link legacyBehavior href="/produtos/torneamento">
                    <a>
                      <div className={styles.boxManagement}>
                        <div className={styles.imgCircle}>
                          <img src="./icon-torneamento.jpg" alt="" />
                        </div>

                        <div className={styles.boxSubtitle}>
                          <span>Torneamento</span>
                        </div>
                      </div>
                    </a>
                  </Link>
                </div>

                <div className="col-12 col-md-4 col-xl-4">
                  <Link legacyBehavior href="/produtos/furacao">
                    <a>
                      <div className={styles.boxManagement}>
                        <div className={styles.imgCircle}>
                          <img src="./icon-furacao.jpg" alt="" />
                        </div>

                        <div className={styles.boxSubtitle}>
                          <span>Furação</span>
                        </div>
                      </div>
                    </a>
                  </Link>
                </div>

                <div className="col-12 col-md-4 col-xl-4">
                  <Link legacyBehavior href="/produtos/rosqueamento">
                    <a>
                      <div className={styles.boxManagement}>
                        <div className={styles.imgCircle}>
                          <img src="./icon-rosqueamento.jpg" alt="" />
                        </div>

                        <div className={styles.boxSubtitle}>
                          <span>Rosqueamento</span>
                        </div>
                      </div>
                    </a>
                  </Link>
                </div>

                <div className="col-12 col-md-4 col-xl-4">
                  <Link legacyBehavior href="/produtos/fixacao">
                    <a>
                      <div className={styles.boxManagement}>
                        <div className={styles.imgCircle}>
                          <img src="./icon-cones-e-acessorios.jpg" alt="" />
                        </div>

                        <div className={styles.boxSubtitle}>
                          <span>Fixação</span>
                        </div>
                      </div>
                    </a>
                  </Link>
                </div>

                {/* <div className="col-4 col-md-3 col-xl-3">
                  <div className={styles.boxManagement}>
                    <div className={styles.imgCircle}>
                      <img src="./zero-point.jpg" alt="" />
                    </div>

                    <div className={styles.boxSubtitle}>
                      <span>Zero Point</span>
                    </div>
                  </div>
                </div> */}

                <div className="col-12 col-md-4 col-xl-4">
                  <Link legacyBehavior href="/management">
                    <a>
                      <div className={styles.boxManagement}>
                        <div className={styles.imgCircle}>
                          <img src="./icon-gerenciamento-de-ferramentas.jpg" alt="" />
                        </div>

                        <div className={styles.boxSubtitle}>
                          <span>Gerenciamento <br />de Ferramentas</span>
                        </div>
                      </div>
                    </a>
                  </Link>
                </div>

                {/* <div className="col-4 col-md-3 col-xl-3">
                  <Link legacyBehavior href="/tecnology">
                    <a>
                      <div className={styles.boxManagement}>
                        <div className={styles.imgCircle}>
                          <img src="./icon-preset.jpg" alt="" />
                        </div>

                        <div className={styles.boxSubtitle}>
                          <span>Preset</span>
                        </div>
                      </div>
                    </a>
                  </Link>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.imagesTools}>
        <div className="container-fluid">
          <div className="row">
            <div className={styles.fullContainer}>
              <img src="/tool1.jpg" alt="" />
            </div>

            <div className={styles.fullContainer}>
              <img src="/tool2.jpg" alt="" />
            </div>

            <div className={styles.fullContainer}>
              <img src="/tool3.jpg" alt="" />
            </div>

            <div className={styles.fullContainer}>
              <img src="/tool4.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.areaWhite}>
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h2>Parceiros</h2> 

              <ParceirosSwiper />
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.areaWhite} ${styles.aboutNissin}`}>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-8 col-xl-8">
              <h2>Sobre a Nissin</h2>

              <p>A Nissin Solutions, sediada em Joinville/SC, é uma empresa distribuidora de ferramentas e soluções técnicas para usinagem, trabalhando com marcas reconhecidas internacionalmente por fabricarem produtos com alta tecnologia e excelente competitividade global.</p>

              <p>Contamos com experiência e know-how na área, provenientes de uma forte atuação no segmento de ferramentas há mais de uma década. Nossa estrutura de atendimento interno e externo foi projetada para ser o integrador de soluções entre fabricantes e clientes.</p>

              <p>Nossa estratégia de negócio vai muito além de fornecer produtos, estamos focados na entrega de serviços com inovações tecnológicas, estabelecendo uma relação sólida e confiável com nossos clientes, parceiros e colaboradores.</p>

              <div>
                <Link legacyBehavior href="/sobre">
                  <a className="buttonPrimary">
                    Conheça Mais
                  </a>
                </Link>
              </div>           
            </div>
          </div>
        </div>
      </div>

      <Information />

      <Footer />
    </>
  )
}
