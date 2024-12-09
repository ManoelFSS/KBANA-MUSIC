import React, { useState } from "react";
import { Container_visualDisplay } from "./Styles";

const VisualDisplay = () => {

    const hendlePlay = () => {
        console.log('play');
    }    

    const [play, setPlay] = React.useState(1)
    const [videoId, setVideoId] = React.useState('57soPf-bShQ')
    // https://youtu.be/57soPf-bShQ

    return (
        <Container_visualDisplay
    
        >
            <div 
                className="overlay"
                onClick={hendlePlay}
            > </div>
            <iframe 
                width="100%"
                height="100%" 
                src={`https://www.youtube.com/embed/${videoId}?autoplay=${play}&controls=0&modestbranding=0&rel=0&showinfo=0`}
                title="Gabriel Diniz - Acabou Acabou (Quando Eu Digo Que Acabou) (Ao Vivo) ft. Wesley Safadão" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
            ></iframe>
        </Container_visualDisplay>
    );
};

export default VisualDisplay;
