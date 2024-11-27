const carregarSDKFacebook = () => {
    return new Promise((resolve) => {
        if (window.FB) {
            resolve();
        } else {
            const script = document.createElement('script');
            script.src = 'https://connect.facebook.net/en_US/sdk.js';
            script.async = true;
            script.defer = true;
            script.onload = () => {
                window.FB.init({
                    appId: 'SEU_APP_ID', // Substitua pelo seu App ID
                    cookie: true,
                    xfbml: true,
                    version: 'v17.0',
                });
                resolve();
            };
            document.body.appendChild(script);
        }
    });
};

export default carregarSDKFacebook;
