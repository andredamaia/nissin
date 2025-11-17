import { GetStaticProps } from 'next';
import Head from 'next/head'
import Link from 'next/link'
import { useEffect } from 'react';
import gsap from 'gsap'
import { api } from '../../services/api'

import Header from '../../components/header'
import Suporte from '../../components/suporte'
import Information from '../../components/information'
import Footer from '../../components/footer'

import styles from '../../styles/pages/produtos.module.scss'

export default function Produtos({ data }: any) {
    const tools = [...data];

    const manual = tools.filter((tool: any) => tool.categories.includes(27))

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
                                <Link legacyBehavior href="/">
                                    <a>Home</a>
                                </Link>

                                <span>/</span>

                                <Link legacyBehavior href="/cutting-tools">
                                    <a>Cutting Tools</a>
                                </Link>

                                <span>/</span>

                                <Link legacyBehavior href="/produtos/rosqueamento">
                                    <a>Rosqueamento</a>
                                </Link>

                                <span>/</span>

                                <Link legacyBehavior href="/produtos/machos">
                                    <a>Machos</a>
                                </Link>

                                <span>/</span>

                                <a href="#">Manual</a>
                            </div>
                        </div>

                        <div className="col-12">
                            <div className={styles.products}>
                                {manual.map(tool =>(
                                    <div className={styles.productsBox} key={tool.id}>
                                        <div className={styles.productsImg}>
                                            <img 
                                                width="100%" 
                                                height="90" 
                                                src={tool._embedded['wp:featuredmedia'][0].source_url} 
                                                alt=""
                                            />
                                        </div>

                                        <div className={styles.productsDescription}>
                                            <strong>{tool.title.rendered}</strong>

                                            <a href={tool.acf.arquivo} target="_blank">
                                                <svg width="21" height="26" viewBox="0 0 21 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M14.2839 0.200943C14.1623 0.0753784 13.9957 0 13.823 0H3.48295C1.57494 0 0 1.53871 0 3.41008V22.5897C0 24.4613 1.57494 26 3.48295 26H17.5171C19.4251 26 21 24.4613 21 22.5897V7.36031C21 7.19705 20.9232 7.04015 20.8144 6.92073L14.2839 0.200943ZM14.4695 2.21692L18.8424 6.71979H15.9998C15.1546 6.71979 14.4695 6.05408 14.4695 5.22511V2.21692ZM3.48295 24.744H17.5171C18.7207 24.744 19.7195 23.7706 19.7195 22.5897V7.97583H15.9997C14.444 7.97583 13.189 6.75113 13.189 5.22511V1.25604H3.48295C2.27929 1.25604 1.2805 2.23576 1.2805 3.41008V22.5897C1.2805 23.7706 2.28577 24.744 3.48295 24.744Z" fill="#192D4E"/>
                                                <path d="M15.3437 20H4.6497C4.29243 20 4 20.4498 4 21C4 21.5499 4.29243 22 4.6497 22H15.3503C15.7076 22 16 21.5499 16 21C16 20.4498 15.7076 20 15.3437 20Z" fill="#192D4E"/>
                                                <path d="M9.57101 17.793C9.68199 17.9224 9.83371 18 9.99705 18C10.1606 18 10.3123 17.9224 10.4231 17.793L13.8434 13.7245C14.0652 13.4656 14.0477 13.0517 13.8143 12.8124C13.5807 12.5667 13.2072 12.5859 12.9913 12.8447L10.5807 15.7101V8.64684C10.5807 8.29093 10.318 8 9.99705 8C9.67609 8 9.41338 8.29093 9.41338 8.64684V15.7101L7.00866 12.8447C6.78688 12.5861 6.41909 12.5667 6.1857 12.8124C5.95231 13.0582 5.93479 13.4658 6.15657 13.7245L9.57101 17.793Z" fill="#192D4E"/>
                                                </svg>

                                                ver detalhes
                                            </a>
                                        </div>
                                    </div>
                                ))}
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

export const getStaticProps: GetStaticProps = async () => {
    const { data } = await api.get('tools?per_page=100&_embed&categories=27&orderby=title&order=asc',  {
        params: {
            _limit: 12,
            _order: 'desc'
        }
    })

    return {
        props: {
            data
        }
    }
}