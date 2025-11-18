import Head from 'next/head'
import Link from 'next/link'
import { useEffect } from 'react';
import gsap from 'gsap'

import Header from '../components/header';
import Information from '../components/information';
import Footer from '../components/footer';
import ParceirosSwiper from '../components/parceiros-swiper';

import styles from '../styles/pages/categorias.module.scss';

export default function Categoria() {
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
                                        <div className="transition-text"><i>cutting tools</i></div>
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
                                        <strong>Cutting Tools</strong>
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
                                        Tecnology
                                    </a>
                                </Link>
                            </div>

                            <div className={styles.boxTools}>
                                <Link legacyBehavior href="/produtos/fresamento">
                                    <a>
                                        <div className={styles.toolsImg}>
                                            <img src="/fresamento-thumb.jpg" alt="" />
                                        </div>

                                        <div className={styles.toolsName}>
                                            Fresamento
                                        </div>
                                    </a>
                                </Link>

                                <Link legacyBehavior href="/produtos/torneamento">
                                    <a>
                                        <div className={styles.toolsImg}>
                                            <img src="/torneamento-thumb.jpg" alt="" />
                                        </div>

                                        <div className={styles.toolsName}>
                                            Torneamento
                                        </div>
                                    </a>
                                </Link>

                                <Link legacyBehavior href="/produtos/furacao">
                                    <a>
                                        <div className={styles.toolsImg}>
                                            <img src="/furacao-thumb.jpg" alt="" />
                                        </div>

                                        <div className={styles.toolsName}>
                                            Furação
                                        </div>
                                    </a>
                                </Link>

                                <Link legacyBehavior href="/produtos/rosqueamento">
                                    <a>
                                        <div className={styles.toolsImg}>
                                            <img src="/rosqueamento-thumb.jpg" alt="" />
                                        </div>

                                        <div className={styles.toolsName}>
                                            Rosqueamento
                                        </div>
                                    </a>
                                </Link>

                                <Link legacyBehavior href="/produtos/fixacao">
                                    <a>
                                        <div className={styles.toolsImg}>
                                            <img src="/fixacao-thumb.jpg" alt="" />
                                        </div>

                                        <div className={styles.toolsName}>
                                            Fixação
                                        </div>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.areaWhite}>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <ParceirosSwiper />
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