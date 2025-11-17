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
                <title>Cutting Tools - Nissin Solutions</title>
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
                                        <div className="transition-text"><i>management</i></div>
                                    </h1> 
                                </div>  
                            </div>  
                        </div>     
                    </div> 
                </div>
            </div>

            <div className={styles.areaWhite}>
                <div className="container">
                    <div className="row">
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
                                        <strong>Management</strong>
                                    </a>
                                </Link>

                                <span>/</span>

                                <Link legacyBehavior href="/tecnology">
                                    <a style={{ color: '#b0b0b0' }}>
                                        Tecnology
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-12" style={{ marginBottom: 60 }}>
                            <h4>Sistemas Inteligentes Nissin - (SIN)</h4>         
                        </div>

                        <div className="col-12" style={{ marginBottom: 60 }}>
                            <img src="/management.jpg" style={{ width: '100%' }} alt="" />
                        </div>
                    </div>

                    <div className="row d-flex align-items-center" style={{ marginBottom: 80 }}>
                        <div className="col-12 col-md-7">
                            <img src="/img-esquema-02.png" style={{ width: '100%' }} alt="" />
                        </div>

                        <div className="col-12 col-md-4 offset-md-1">
                            <p className="bigText" style={{ fontSize: '3.2rem', fontWeight: 700, color: '#666666', lineHeight: '3.4rem' }}>Otimize o gerenciamento e consumo de ferramentas na sua linha de produção.</p>

                            <h4>Mais simples. Mais rápida. Menos desperdícios.</h4>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12 col-md-3 text-center">
                            <img src="/circle-1.jpg" style={{ marginBottom: 15 }} alt="" />
                            <h3 style={{ fontSize: '3.2rem', fontWeight: 700, color: '#111' }}>15%</h3>
                            <p>de redução média no consumo de ferramentas</p>
                        </div>

                        <div className="col-12 col-md-3 text-center">
                            <img src="/circle-1.jpg" style={{ marginBottom: 15 }} alt="" />
                            <h3 style={{ fontSize: '3.2rem', fontWeight: 700, color: '#111' }}>30%</h3>
                            <p>de redução média de tempo de máquina parada</p>
                        </div>

                        <div className="col-12 col-md-3 text-center">
                            <img src="/circle-1.jpg" style={{ marginBottom: 15 }} alt="" />
                            <h3 style={{ fontSize: '3.2rem', fontWeight: 700, color: '#111' }}>40%</h3>
                            <p>de redução média de estoque</p>
                        </div>

                        <div className="col-12 col-md-3 text-center">
                            <img src="/circle-1.jpg" style={{ marginBottom: 15 }} alt="" />
                            <h3 style={{ fontSize: '3.2rem', fontWeight: 700, color: '#111' }}>50%</h3>
                            <p>de redução média dos custos administrativos de aquisição</p>
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