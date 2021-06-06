import React from 'react';
import '../styles/components/Success.css';

// eslint-disable-next-line arrow-body-style
const Success = () => {
    return (
        <div className="Success">
            <div className="Success-content">
                <h2>Gracias por tu compra</h2>
                <span>Tu pedido llegara pronto</span>
                <div className="Success-map">
                    Google-map
                </div>
            </div>
        </div>
    );
}

export default Success;