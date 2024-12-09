import React, { useState, useEffect, useContext } from 'react';
import Home from './pages/home/Home';
import { AuthContext } from './context/AuthContent';

// Configurações do Spotify
const CLIENT_ID = '4fd5e4a0d87b47399c2fa0a611b35634'; // Substitua pelo seu Client ID
const REDIRECT_URI = 'https://kbana-music.netlify.app/'; // Substitua pela sua Redirect URI
const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize';
const RESPONSE_TYPE = 'token';
const SCOPES = 'streaming user-read-email user-modify-playback-state';

function App() {
  // Gerenciando o token de autenticação
  const [token, setToken] = useState(null);

  // URL de login para Spotify
  const loginUrl = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPES}`;

  useEffect(() => {
    // Captura o token da URL após o login no Spotify
    const hash = window.location.hash;
    if (hash) {
      const params = new URLSearchParams(hash.substring(1));
      const token = params.get('access_token');
      if (token) {
        setToken(token);
        window.history.pushState({}, null, '/'); // Remove o hash da URL após capturar o token
      }
    }

    // Função para carregar o SDK do Spotify
    const loadSDK = () => {
      const script = document.createElement('script');
      script.src = 'https://sdk.scdn.co/spotify-player.js';
      script.onload = () => {
        // Inicializando o SDK do Spotify
        window.onSpotifyWebPlaybackSDKReady = () => {
          const player = new Spotify.Player({
            name: 'Kbana Music Player',
            getOAuthToken: cb => cb(token),
            volume: 0.5,
          });

          player.addListener('ready', ({ device_id }) => {
            console.log('Player is ready with Device ID:', device_id);
          });

          player.addListener('not_ready', ({ device_id }) => {
            console.log('Device ID has gone offline:', device_id);
          });

          player.addListener('initialization_error', ({ message }) => {
            console.error('Initialization error:', message);
          });

          player.addListener('authentication_error', ({ message }) => {
            console.error('Authentication error:', message);
          });

          player.addListener('account_error', ({ message }) => {
            console.error('Account error:', message);
          });

          // Conectando o player
          player.connect();
        };
      };
      document.body.appendChild(script);
    };

    if (token) {
      loadSDK(); // Carrega o SDK do Spotify assim que o token estiver disponível
    }
  }, [token]);

  return (
    <>
      <Home />
      {!token ? (
        <a href={loginUrl}>Login with Spotify</a>
      ) : (
        <p>Logged in successfully!</p>
      )}
    </>
  );
}

export default App;
