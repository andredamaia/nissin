import Head from 'next/head'
import Link from 'next/link'
import { useEffect } from 'react';
import gsap from 'gsap'

import Header from '../../components/header';
import Information from '../../components/information';
import Footer from '../../components/footer';

import styles from '../../styles/pages/categorias.module.scss';

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
                <title>Furação - Nissin Solutions</title>
            </Head>

            <Header />

            <div className={styles.internaContainer}>
                <div className={`${styles.bannerInternas} animate`}>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className={styles.titleBanner}>
                                    <h1>
                                        <span><div className="transition-text"><i>nossos</i></div></span>
                                        <div className="transition-text"><i>produtos</i></div>
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
                                    <a>Cutting Tools</a>
                                </Link>

                                <span>/</span>

                                <a href="#">Furação</a>

                            </div>

                            <div className={styles.boxTools}>
                                <Link legacyBehavior href="/produtos/brocas-de-metal-duro">
                                    <a>
                                        <div className={styles.toolsImg}>
                                            <img src="http://nissinsolutions.com.br/api/wp-content/uploads/2021/06/3XD.jpg" alt="" />
                                        </div>

                                        <div className={styles.toolsName}>
                                            Brocas de Metal Duro
                                        </div>
                                    </a>
                                </Link>

                                <Link legacyBehavior href="/produtos/suportes-e-insertos-furacao">
                                    <a>
                                        <div className={styles.toolsImg}>
                                            <img src="/suportes-e-insertos.jpg" alt="" />
                                        </div>

                                        <div className={styles.toolsName}>
                                            Suportes e Insertos
                                        </div>
                                    </a>
                                </Link>

                                <Link legacyBehavior href="/produtos/brocas-de-hss">
                                    <a>
                                        <div className={styles.toolsImg}>
                                            <img src="/brocas-de-hss.jpg" alt="" />
                                        </div>

                                        <div className={styles.toolsName}>
                                            Brocas de HSS
                                        </div>
                                    </a>
                                </Link>

                                <Link legacyBehavior href="/produtos/jogo-de-brocas">
                                    <a>
                                        <div className={styles.toolsImg}>
                                            <img src="/jogo-de-brocas.jpg" alt="" />
                                        </div>

                                        <div className={styles.toolsName}>
                                            Jogo de Brocas
                                        </div>
                                    </a>
                                </Link>

                                <Link legacyBehavior href="/produtos/alargadores">
                                    <a>
                                        <div className={styles.toolsImg}>
                                            <img src="/alargadores.jpg" alt="" />
                                        </div>

                                        <div className={styles.toolsName}>
                                            Alargadores
                                        </div>
                                    </a>
                                </Link>

                                <Link legacyBehavior href="/produtos/escariadores">
                                    <a>
                                        <div className={styles.toolsImg}>
                                            <img src="/escariadores.jpg" alt="" />
                                        </div>

                                        <div className={styles.toolsName}>
                                            Escariadores
                                        </div>
                                    </a>
                                </Link>

                                <Link legacyBehavior href="/produtos/brocas-espada">
                                    <a>
                                        <div className={styles.toolsImg}>
                                            <img src="/brocas-espada.jpg" alt="" />
                                        </div>

                                        <div className={styles.toolsName}>
                                            Brocas Espada
                                        </div>
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