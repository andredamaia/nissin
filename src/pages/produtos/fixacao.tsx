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
                <title>Fixação - Nissin Solutions</title>
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
                                    <a>Cutting Tools</a>
                                </Link>

                                <span>/</span>

                                <a href="#">Fixação</a>

                            </div>

                            <div className={styles.boxTools}>
                                <Link legacyBehavior href="/produtos/cones-de-fixacao">
                                    <a>
                                        <div className={styles.toolsImg}>
                                            <img src="http://nissinsolutions.com.br/api/wp-content/uploads/2021/07/BT-PRECISAO.jpg" alt="" />
                                        </div>

                                        <div className={styles.toolsName}>
                                            Cones de Fixação
                                        </div>
                                    </a>
                                </Link>

                                <Link legacyBehavior href="/produtos/acessorios-de-fixacao">
                                    <a>
                                        <div className={styles.toolsImg}>
                                            <img src="/chaves-img.png" width="120" alt="" />
                                        </div>

                                        <div className={styles.toolsName}>
                                            Acessórios de Fixação
                                        </div>
                                    </a>
                                </Link>

                                <Link legacyBehavior href="/produtos/fixacao-de-pecas">
                                    <a>
                                        <div className={styles.toolsImg}>
                                            <img src="http://nissinsolutions.com.br/api/wp-content/uploads/2021/07/MORSAS-ZERO-POINT-E-MESA-MAGNETICA.jpg" alt="" />
                                        </div>

                                        <div className={styles.toolsName}>
                                            Fixação de Peças
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