import Head from 'next/head'
import Link from 'next/link'
import { useEffect } from 'react';
import gsap from 'gsap'
import SwiperCore, { Navigation, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import Header from '../components/header';
import Information from '../components/information';
import Footer from '../components/footer';

import styles from '../styles/pages/categorias.module.scss';

SwiperCore.use([Navigation, Autoplay]);

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

                                <Link href="/cutting-tools">
                                    <a>
                                        Cutting Tools
                                    </a>
                                </Link>

                                <span>/</span>

                                <Link href="/management">
                                    <a>
                                        Management
                                    </a>
                                </Link>

                                <span>/</span>

                                <Link href="/tecnology">
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
                            <h4>Caracter??sticas medi????o/programa????o</h4>

                            <ul className={styles.listDefault}>
                                <li>Medi????o autom??tica de ferramentas sem contato (laser)</li>
                                <li>Medi????o de comprimento e di??metro</li>
                                <li>Detec????o de quebra</li>
                                <li>Compensa????o de desgaste</li>
                                <li>Rotinas de programa????o amig??veis</li>
                            </ul>

                            <h4>Caracter??sticas de utiliza????o</h4>

                            <ul className={styles.listDefault}>
                                <li>Equipamentos resistentes ao ambiente de usinagem</li>
                                <li>Instala????o f??cil e r??pidas em m??quinas CNC</li>
                            </ul>

                            <h4>Caracter??sticas t??cnicas</h4>

                            <ul className={styles.listDefault}>
                                <li>Dimens??es: 240mm x 110mm x 42mm</li>
                                <li>Repetibilidade: 0,002mm - Precis??o: 0,002mm
                                    <br /><small>*Dependendo das caracter??sticas operacionais da m??quina</small>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12 col-md-4">
                            <ul className={styles.listBox}>
                                <li>Elimina????o de retrabalho e repasse</li>
                                <li>Precis??o no preset das ferramentas</li>
                                <li>Seguran??a e confiabilidade do processo</li>
                            </ul>
                        </div>

                        <div className="col-12 col-md-4">
                            <ul className={styles.listBox}>
                                <li>Compensa????o autom??tica de desgaste da ferramenta</li>
                                <li>Detec????o autom??tica de quebra de ferramenta</li>
                            </ul>
                        </div>

                        <div className="col-12 col-md-4">
                            <ul className={styles.listBox}>
                                <li>Programa????o customizada para necessidade espec??fica do cliente</li>
                                <li>Suporte operacional e assist??ncia t??cnica</li>
                                <li>F??bricado no Brasil</li>
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