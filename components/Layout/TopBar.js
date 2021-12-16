import navStyles from '../../styles/Nav.module.css';
import Link from 'next/link';

import MainMenu from './MainMenu';

const TopBar = ({ pages }) => {
    return (
        <div
            id='navbar'
            className={`${navStyles['primary-bar']} ${navStyles['top-bar']}`}
        >
            <div className={`${navStyles['top-wrapper']}`}>
                <div className={`${navStyles['logo-wrap']}`}>
                    <Link href='/'>
                        <a>
                            <picture>
                                <source
                                    media='(min-width: 800px)'
                                    srcSet='/images/one-stop-logo.png'
                                />
                                <img
                                    src='/images/one-stop-logo@2x.png'
                                    alt='One Stop Properties Logo'
                                    width='260'
                                    height='145'
                                />
                            </picture>
                        </a>
                    </Link>
                </div>
                <div className={`${navStyles['navigation-container']}`}>
                    <MainMenu pages={pages} />
                </div>
            </div>
            <div className={navStyles.featbtnswrap}>
                <div className={navStyles.featbtns}>
                    <Link href='/properties'>
                        <a className={navStyles.btn1}>Our Properties</a>
                    </Link>
                    <a href='tel:7187868400' className={navStyles.btn2}>
                        +1 (718) 786-8400
                    </a>
                </div>
            </div>
        </div>
    );
};

export default TopBar;
