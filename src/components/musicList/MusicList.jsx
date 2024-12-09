import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthContent'; // Supondo que você tenha um contexto para armazenar o token

const MusicList = () => {
  const { token } = useContext(AuthContext); // Obtenha o token de acesso
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    if (token) {
      // A URL para buscar músicas do Spotify
      const fetchSongs = async () => {
        const response = await fetch('https://api.spotify.com/v1/me/top/artists', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          const data = await response.json();
          console.log(data);
          setSongs(data.items); // Armazene as músicas ou artistas no estado
        } else {
          console.error('Erro ao buscar músicas', response);
        }
      };

      fetchSongs();
    }
  }, [token]);

  return (
    <div>
      <h1>Top Músicas</h1>
      <ul>
        {songs.map((song, index) => (
          <li key={index}>
            <p>{song.name}</p>
            <p>{song.artists[0].name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MusicList;
