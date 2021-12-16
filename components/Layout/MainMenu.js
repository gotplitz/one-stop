import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Slant as Hamburger } from 'hamburger-react';
import { useRouter } from 'next/router';

// Materialize
import { IconButton } from '@material-ui/core';

const MainMenu = ({ pages }) => {
    const [isOpen, setOpen] = useState(false);
    const router = useRouter();

    const mobileMenuId = 'primary-search-account-menu-mobile';

    const renderMobileMenu = () => {
        const opeMenu = document.getElementById(
            'primary-search-account-menu-mobile'
        );
        if (opeMenu.classList.contains('opened-menu')) {
            opeMenu.classList.remove('opened-menu');
            setOpen(false);
        } else {
            opeMenu.classList.add('opened-menu');
        }
    };

    const wrapperRef = useRef(null);
    const subwrapperRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (
                wrapperRef.current &&
                !wrapperRef.current.contains(event.target)
            ) {
                const opeMenu = document.getElementById(
                    'primary-search-account-menu-mobile'
                );

                opeMenu.classList.remove('opened-menu');
                setOpen(false);

                var hamb = document.getElementsByClassName('hamburger-react');
                var hambdiv = document.querySelectorAll('.hamburger-react div');
                for (var i = 0; i < hamb.length; i++) {
                    hamb[i].style.transform = 'none';
                }
                for (var x = 0; x < hambdiv.length; x++) {
                    hambdiv[x].style.transform = 'none';
                }
            }
        }

        // Bind the event listener
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener('mousedown', handleClickOutside);
        };
    });

    useEffect(() => {
        const handleClickOutsideSub = (event) => {
            if (
                subwrapperRef.current &&
                !subwrapperRef.current.contains(event.target)
            ) {
                const closeMenu = document.getElementById(
                    'primary-search-account-menu-mobile'
                );
                closeMenu.classList.remove('opened-menu');
                setOpen(false);

                var hamb = document.getElementsByClassName('hamburger-react');
                var hambdiv = document.querySelectorAll('.hamburger-react div');
                for (var i = 0; i < hamb.length; i++) {
                    hamb[i].style.transform = 'none';
                }
                for (var x = 0; x < hambdiv.length; x++) {
                    hambdiv[x].style.transform = 'none';
                }
            }
        };

        // Bind the event listener
        document.addEventListener('mousedown', handleClickOutsideSub);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener('mousedown', handleClickOutsideSub);
        };
    });

    const closeMenu = () => {
        const closeMenu = document.getElementById(
            'primary-search-account-menu-mobile'
        );
        closeMenu.classList.remove('opened-menu');
        setOpen(false);
    };

    const NeedClkMob = (mitem) => {
        return closeMenu;
    };

    return (
        <div className='menu-container'>
            <div className='section-desktop'>
                <ul>
                    {pages.length > 0 &&
                        pages.map((mitem) => (
                            <li key={mitem.id}>
                                <Link
                                    href={
                                        mitem.title === 'Repairs'
                                            ? '#!'
                                            : `/${mitem.slug}`
                                    }
                                >
                                    <a
                                        className={
                                            router.pathname.replace('/', '') ===
                                            mitem.slug
                                                ? 'top-active top-menu'
                                                : 'top-menu'
                                        }
                                        onClick={(e) =>
                                            mitem.title === 'Repairs' &&
                                            e.preventDefault()
                                        }
                                    >
                                        {mitem.title}
                                    </a>
                                </Link>
                            </li>
                        ))}
                </ul>
            </div>
            <div className='mobile-menu-wrap class-mobile'>
                <div
                    id='primary-search-account-menu-mobile'
                    className='menu-pop-up'
                    ref={wrapperRef}
                >
                    <ul ref={subwrapperRef}>
                        {pages.length > 0 &&
                            pages.map((mitem) => (
                                <li
                                    key={mitem.id}
                                    ref={subwrapperRef}
                                    className={
                                        mitem.title === 'Repairs'
                                            ? 'top-menu has-submenu'
                                            : 'top-menu'
                                    }
                                >
                                    <Link
                                        href={
                                            mitem.title === 'Repairs'
                                                ? '#!'
                                                : `/${mitem.slug}`
                                        }
                                    >
                                        <a
                                            onTouchEnd={NeedClkMob(mitem)}
                                            className={
                                                mitem.title === 'Repairs'
                                                    ? 'mobile-submenu'
                                                    : ''
                                            }
                                            onClick={(e) =>
                                                mitem.title === 'Repairs' &&
                                                e.preventDefault()
                                            }
                                            ref={subwrapperRef}
                                        >
                                            {mitem.title}
                                        </a>
                                    </Link>
                                </li>
                            ))}
                    </ul>
                </div>

                <IconButton
                    aria-label='show more'
                    aria-controls={mobileMenuId}
                    aria-haspopup='true'
                    color='inherit'
                    className='mobile-menu'
                >
                    <Hamburger
                        label='NAVIGATION'
                        toggled={isOpen}
                        toggle={setOpen}
                        onToggle={(toggled) => {
                            if (toggled) {
                                renderMobileMenu();
                            } else {
                                closeMenu();
                            }
                        }}
                    />
                </IconButton>
            </div>
        </div>
    );
};

export default MainMenu;
