import React, { useEffect } from 'react';
import carregarSDKFacebook from '../../../utils/facebooksdk';

const LoginWithFacebook = () => {
    useEffect(() => {
        carregarSDKFacebook();
    }, []);

    const handleLogin = () => {
        window.FB.login(
            (response) => {
                if (response.authResponse) {
                    console.log('Usuário logado:', response.authResponse);
                } else {
                    console.log('Login cancelado.');
                }
            },
            { scope: 'public_profile,email' }
        );
    };

    return (
        <button onClick={handleLogin}>
            Login com Facebook
        </button>
    );
};

export default LoginWithFacebook;
