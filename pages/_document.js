import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <script
                        src='https://kit.fontawesome.com/8af360bd3a.js'
                        crossOrigin='anonymous'
                        async
                    ></script>
                    <link
                        rel='preconnect'
                        href='https://fonts.googleapis.com'
                    />
                    <link
                        rel='preconnect'
                        href='https://fonts.gstatic.com'
                        crossOrigin='true'
                    />
                    <link
                        href='https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Mukta:wght@200;300;400;500;600;700;800&display=swap'
                        rel='stylesheet'
                    />

                    <link
                        rel='apple-touch-icon'
                        sizes='180x180'
                        href='/icons/apple-touch-icon.png'
                    />
                    <link
                        rel='icon'
                        type='image/png'
                        sizes='32x32'
                        href='/icons/favicon-32x32.png'
                    />
                    <link
                        rel='icon'
                        type='image/png'
                        sizes='194x194'
                        href='/icons/favicon-194x194.png'
                    />
                    <link
                        rel='icon'
                        type='image/png'
                        sizes='192x192'
                        href='/icons/android-chrome-192x192.png'
                    />
                    <link
                        rel='icon'
                        type='image/png'
                        sizes='16x16'
                        href='/icons/favicon-16x16.png'
                    />
                    <link rel='manifest' href='/icons/site.webmanifest' />
                    <link
                        rel='mask-icon'
                        href='/icons/safari-pinned-tab.svg'
                        color='#414141'
                    />
                    <link rel='shortcut icon' href='/icons/favicon.ico' />
                    <meta
                        name='apple-mobile-web-app-title'
                        content='One Stop Properties'
                    />
                    <meta
                        name='application-name'
                        content='One Stop Properties'
                    />
                    <meta name='msapplication-TileColor' content='#f4ff00' />
                    <meta
                        name='msapplication-TileImage'
                        content='/icons/mstile-144x144.png'
                    />
                    <meta
                        name='msapplication-config'
                        content='/icons/browserconfig.xml'
                    />
                    <meta name='theme-color' content='#f4ff00' />

                    {/* <!-- Google Tag Manager --> */}

                    <script
                        dangerouslySetInnerHTML={{
                            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-WNSWZKK');`,
                        }}
                    ></script>

                    {/* <!-- End Google Tag Manager --> */}
                </Head>
                <body>
                    <noscript
                        dangerouslySetInnerHTML={{
                            __html: `<iframe src="//www.googletagmanager.com/ns.html?id=GTM-WNSWZKK" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
                        }}
                    ></noscript>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
