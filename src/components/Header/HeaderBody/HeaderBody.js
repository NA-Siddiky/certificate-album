import React from 'react';
import './HeaderBody.css'
import HeaderMessage from '../HeaderMessage/HeaderMessage';
import CertificateAlbum from '../../Home/CertificateAlbum/CertificateAlbum';

const HeaderBody = () => {
    return (
        <div className="row g-0 w-100 m-0 p-0 pt-5 styleOfHeader">
            <div className="col-md-4 d-flex justify-content-center align-items-center">
                <HeaderMessage></HeaderMessage>
            </div>
            <div className="col-md-8">
                <div className="mb-auto h-100 d-flex justify-content-center align-items-end">
                <CertificateAlbum></CertificateAlbum>
                </div>
            </div>
        </div>
    );
};

export default HeaderBody;