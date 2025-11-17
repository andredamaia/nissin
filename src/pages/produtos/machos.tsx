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
                <title>Rosqueamento - Nissin Solutions</title>
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

                                <Link legacyBehavior href="/produtos/rosqueamento">
                                    <a>Rosqueamento</a>
                                </Link>

                                <span>/</span>

                                <a href="#">Machos</a>
                            </div>

                            <div className={styles.boxTools}>
                                <Link legacyBehavior href="/produtos/maquina">
                                    <a>
                                        <div className={styles.toolsImg}>
                                            <img src="http://nissinsolutions.com.br/api/wp-content/uploads/2021/07/LINHA-SIGMA.jpg" alt="" />
                                        </div>

                                        <div className={styles.toolsName}>
                                            Máquina
                                        </div>
                                    </a>
                                </Link>

                                <Link legacyBehavior href="/produtos/manual">
                                    <a>
                                        <div className={styles.toolsImg}>
                                            <img src="http://nissinsolutions.com.br/api/wp-content/uploads/2021/07/MACHOS-MANUAIS.jpg" alt="" />
                                        </div>

                                        <div className={styles.toolsName}>
                                            Manual
                                        </div>
                                    </a>
                                </Link>

                                <Link legacyBehavior href="/produtos/aplicacao">
                                    <a>
                                        <div className={styles.toolsImg}>
                                            <img src="http://nissinsolutions.com.br/api/wp-content/uploads/2021/07/cartilha_de_machos_osg_vol_3.jpg" alt="" />
                                        </div>

                                        <div className={styles.toolsName}>
                                            Aplicação
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