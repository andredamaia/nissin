import Head from 'next/head'
import Link from 'next/link'
import { useEffect } from 'react';
import gsap from 'gsap'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

import Header from '../components/header';
import Information from '../components/information';
import Footer from '../components/footer';

import styles from '../styles/pages/categorias.module.scss';

const swiperModules = [Navigation, Autoplay];

export default function Management() {
    useEffect(() => {
        gsap.to('.animate', {
            duration: .5,
            height: '250px',
            autoAlpha: 1,
            ease: 'power3.inOut'
        });

        gsap.to('.transition-text i', {
            delay: -.05,
            y: 0,
            duration: 1,
            stagger: {
                amount: .3
            },
            ease: 'power3.inOut'
        });
    });

    return (
        <>
            <Head>
                <title>Tecnology - Nissin Solutions</title>
            </Head>

            <Header />

            <div className={styles.internaContainer}>
                <div className={`${styles.bannerInternas} animate`}>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className={styles.titleBanner}>
                                    <h1>
                                        <span><div className="transition-text"><i>produtos</i></div></span>
                                        <div className="transition-text"><i>tecnology</i></div>
                                    </h1> 
                                </div>  
                            </div>  
                        </div>     
                    </div> 
                </div>
            </div>

            <div className={styles.areaWhite}>
                <div className="container">
                    <div className="row" style={{ marginBottom: 40 }}>
                        <div className="col-12">
                            <div className={styles.pageIndication}>
                                <a href="/">Home</a>

                                <span>/</span>

                                <Link legacyBehavior href="/cutting-tools">
                                    <a>
                                        Cutting Tools
                                    </a>
                                </Link>

                                <span>/</span>

                                <Link legacyBehavior href="/management">
                                    <a>
                                        Management
                                    </a>
                                </Link>

                                <span>/</span>

                                <Link legacyBehavior href="/tecnology">
                                    <a style={{ color: '#b0b0b0' }}>
                                        <strong>Tecnology</strong>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-12 col-md-7" style={{ marginBottom: 60 }}>
                            <h2 style={{ marginBottom: 40 }}>TSG-130</h2>
                            <img src="/produto.jpg" alt="" style={{ width: '100%' }} />         
                        </div>

                        <div className="col-12 col-md-4 offset-md-1">
                            <h4>Características medição/programação</h4>

                            <ul className={styles.listDefault}>
                                <li>Medição automática de ferramentas sem contato (laser)</li>
                                <li>Medição de comprimento e diâmetro</li>
                                <li>Detecção de quebra</li>
                                <li>Compensação de desgaste</li>
                                <li>Rotinas de programação amigáveis</li>
                            </ul>

                            <h4>Características de utilização</h4>

                            <ul className={styles.listDefault}>
                                <li>Equipamentos resistentes ao ambiente de usinagem</li>
                                <li>Instalação fácil e rápidas em máquinas CNC</li>
                            </ul>

                            <h4>Características técnicas</h4>

                            <ul className={styles.listDefault}>
                                <li>Dimensões: 240mm x 110mm x 42mm</li>
                                <li>Repetibilidade: 0,002mm - Precisão: 0,002mm
                                    <br /><small>*Dependendo das características operacionais da máquina</small>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12 col-md-4">
                            <ul className={styles.listBox}>
                                <li>Eliminação de retrabalho e repasse</li>
                                <li>Precisão no preset das ferramentas</li>
                                <li>Segurança e confiabilidade do processo</li>
                            </ul>
                        </div>

                        <div className="col-12 col-md-4">
                            <ul className={styles.listBox}>
                                <li>Compensação automática de desgaste da ferramenta</li>
                                <li>Detecção automática de quebra de ferramenta</li>
                            </ul>
                        </div>

                        <div className="col-12 col-md-4">
                            <ul className={styles.listBox}>
                                <li>Programação customizada para necessidade específica do cliente</li>
                                <li>Suporte operacional e assistência técnica</li>
                                <li>Fábricado no Brasil</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.areaWhite}>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className={styles.swiperParceiros}>
                            <Swiper
                              modules={swiperModules}
                                    spaceBetween={50}
                                    slidesPerView={4}
                              autoplay
                                    loop={true}
                                    onSlideChange={() => console.log('slide change')}
                                    onSwiper={(swiper) => console.log(swiper)}
                                    navigation
                                    className={styles.parceirosSlider}
                                    >
                                    <SwiperSlide><div className={styles.parceirosHolder}><img src="/ceratizit.png" alt="" /></div></SwiperSlide>
                                    <SwiperSlide><div className={styles.parceirosHolder}><img src="/osg.png" alt="" /></div></SwiperSlide>
                                    <SwiperSlide><div className={styles.parceirosHolder}><img src="/hgt.png" alt="" /></div></SwiperSlide>
                                    <SwiperSlide><div className={styles.parceirosHolder}><img src="/startool.png" alt="" /></div></SwiperSlide>
                                    <SwiperSlide><div className={styles.parceirosHolder}><img src="/hev.png" alt="" /></div></SwiperSlide>
                                    <SwiperSlide><div className={styles.parceirosHolder}><img src="/spinwiser.png" alt="" /></div></SwiperSlide>
                                    <SwiperSlide><div className={styles.parceirosHolder}><img src="/american.png" alt="" /></div></SwiperSlide>
                                    <SwiperSlide><div className={styles.parceirosHolder}><img src="/bt-fixo.jpg" alt="" /></div></SwiperSlide>
                                </Swiper>
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

            <Information />

            <Footer />
        </>
    )
}