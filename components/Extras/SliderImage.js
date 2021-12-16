import React, { useState, useEffect, Fragment } from 'react';

const SliderImage = ({ pict, alt }) => {
    const [imagBg, setImagebg] = useState({
        src: '',
        width: '',
        height: '',
    });

    useEffect(() => {
        async function SetImage() {
            let img = new Image();
            img.src = `https://admin.onestopspaces.com/uploads/${pict}`;
            img.onload = () => {
                setImagebg({
                    src: img.src,
                    width: img.width,
                    height: img.height,
                });
            };
        }

        return SetImage();
    }, [pict]);

    return (
        <Fragment>
            <img src={imagBg.src} alt={alt} width='100%' height='100%' />
        </Fragment>
    );
};

export default SliderImage;
