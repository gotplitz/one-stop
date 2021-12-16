// Parts
import Map from './Map';

const ContactWithMap = () => {
    return (
        <div className='contact-with-map'>
            <section className='over-map'>
                <div className='white-box'>
                    <div className='location'>
                        <h5>Professional Roofing and Siding in CT</h5>
                        <div className='location-content'>
                            <div className='ov-address'>
                                Welcome to Above the Rest Roofing and Siding,
                                where roofing and siding technology meets
                                skilled craftsmanship. From installing
                                high-quality tenant siding to remodeling your
                                roof, our company offers a plethora of roofing
                                and siding properties. If you are looking for
                                reliable, dedicated, and licensed roofers in CT,
                                look no further.
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Map />
        </div>
    );
};

export default ContactWithMap;
