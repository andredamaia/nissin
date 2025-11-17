import Link from 'next/link'

import styles from '../styles/components/footer.module.scss'

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <>
            <div className={styles.footer}>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-xl-3">

                            <a href="#">
                                <img src="/logo.jpg" style={{ width: 140, mixBlendMode: 'multiply' }} alt="Nissin solutions" />
                            </a>

                            <div className={styles.redesSociais}>
                                <a href="#">
                                    <svg width="13" height="24" viewBox="0 0 13 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.0781 13.5L12.7344 9.1875H8.5625V6.375C8.5625 5.15625 9.125 4.03125 11 4.03125H12.9219V0.328125C12.9219 0.328125 11.1875 0 9.54688 0C6.125 0 3.875 2.10938 3.875 5.85938V9.1875H0.03125V13.5H3.875V24H8.5625V13.5H12.0781Z" fill="#6D6D6D"/>
                                    </svg>
                                </a>


                                <a href="#">
                                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.5 5.60938C8.5 5.60938 6.10938 8.04688 6.10938 11C6.10938 14 8.5 16.3906 11.5 16.3906C14.4531 16.3906 16.8906 14 16.8906 11C16.8906 8.04688 14.4531 5.60938 11.5 5.60938ZM11.5 14.5156C9.57812 14.5156 7.98438 12.9688 7.98438 11C7.98438 9.07812 9.53125 7.53125 11.5 7.53125C13.4219 7.53125 14.9688 9.07812 14.9688 11C14.9688 12.9688 13.4219 14.5156 11.5 14.5156ZM18.3438 5.42188C18.3438 4.71875 17.7812 4.15625 17.0781 4.15625C16.375 4.15625 15.8125 4.71875 15.8125 5.42188C15.8125 6.125 16.375 6.6875 17.0781 6.6875C17.7812 6.6875 18.3438 6.125 18.3438 5.42188ZM21.9062 6.6875C21.8125 5 21.4375 3.5 20.2188 2.28125C19 1.0625 17.5 0.6875 15.8125 0.59375C14.0781 0.5 8.875 0.5 7.14062 0.59375C5.45312 0.6875 4 1.0625 2.73438 2.28125C1.51562 3.5 1.14062 5 1.04688 6.6875C0.953125 8.42188 0.953125 13.625 1.04688 15.3594C1.14062 17.0469 1.51562 18.5 2.73438 19.7656C4 20.9844 5.45312 21.3594 7.14062 21.4531C8.875 21.5469 14.0781 21.5469 15.8125 21.4531C17.5 21.3594 19 20.9844 20.2188 19.7656C21.4375 18.5 21.8125 17.0469 21.9062 15.3594C22 13.625 22 8.42188 21.9062 6.6875ZM19.6562 17.1875C19.3281 18.125 18.5781 18.8281 17.6875 19.2031C16.2812 19.7656 13 19.625 11.5 19.625C9.95312 19.625 6.67188 19.7656 5.3125 19.2031C4.375 18.8281 3.67188 18.125 3.29688 17.1875C2.73438 15.8281 2.875 12.5469 2.875 11C2.875 9.5 2.73438 6.21875 3.29688 4.8125C3.67188 3.92188 4.375 3.21875 5.3125 2.84375C6.67188 2.28125 9.95312 2.42188 11.5 2.42188C13 2.42188 16.2812 2.28125 17.6875 2.84375C18.5781 3.17188 19.2812 3.92188 19.6562 4.8125C20.2188 6.21875 20.0781 9.5 20.0781 11C20.0781 12.5469 20.2188 15.8281 19.6562 17.1875Z" fill="#6D6D6D"/>
                                    </svg>
                                </a>

                            </div>
                        </div>

                        <div className="col-12 col-xl-3 offset-xl-1">
                            <div className={styles.footerProducts}>
                                <span className={styles.footerSubtitle}>Categorias</span>

                                <Link legacyBehavior href="/cutting-tools">
                                    <a className="transition-line" data-hover-color="dove-gray">Cutting Tools</a>
                                </Link>

                                <Link legacyBehavior href="/management">
                                    <a className="transition-line" data-hover-color="dove-gray">Management</a>
                                </Link>

                                <Link legacyBehavior href="/tecnology">
                                    <a className="transition-line" data-hover-color="dove-gray">Tecnology</a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-12 col-xl-4 offset-xl-1">
                            <div className={`${styles.content}`}>
                                <span className={styles.footerSubtitle}>Produtos</span>

                                <div className="row">
                                    <div className="col-12 col-md-6">
                                        <Link legacyBehavior href="/produtos/fresamento"><a>Fresamento</a></Link>
                                        <Link legacyBehavior href="/produtos/torneamento"><a>Torneamento</a></Link>
                                        <Link legacyBehavior href="/produtos/furacao"><a>Furação</a></Link>
                                        <Link legacyBehavior href="/produtos/rosqueamento"><a>Rosqueamento</a></Link>
                                    </div>

                                    <div className="col-12 col-md-6">
                                        <Link legacyBehavior href="/produtos/fixacao"><a>Fixação</a></Link>
                                        {/* <Link legacyBehavior href="#"><a>Zero Point</a></Link> */}
                                        <Link legacyBehavior href="/management"><a>Gerenciamento</a></Link>
                                        {/* <Link legacyBehavior href="/tecnology"><a>Preset</a></Link> */}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12">
                            <div className={styles.copyright}>
                                <h2></h2>

                                <p>Copyright © {currentYear} - Nissin Solutions - Todos os direitos reservados</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}