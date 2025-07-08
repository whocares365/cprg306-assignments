"use client"

import { useEffect, useState } from "react";
import Artwork from "./artwork";

export default function Gallery() {
    
    const [artworkIds, setArtworkIds] = useState([]);
    const [galleryDisplay, setGalleryDisplay] = useState([]);

    async function getListOfArtIds() {
        try {
            const response = await fetch('https://api.artic.edu/api/v1/artworks?limit=10');
            if(!response.ok){
                console.log(response.status);
            }
            const data = await response.json();
            
            let idArray = data.data.map( (artObj) => (artObj.id) );
            setArtworkIds(idArray);
        } catch (error) {
            console.log(`Error: ${error.message}`);
        }
    }

    useEffect( () => {
        getListOfArtIds();
    }, [] )

    async function getArtworkById(){
        try {
            const response = await fetch("https://api.artic.edu/api/v1/artworks/129884");
            if (!response.ok){
                console.log(response.status);
            }
            const data = await response.json();
            return data.data;

        } catch (error) {
            console.log(`Error: ${error.message}`);
        }
    }
    
    useEffect( () => {
        async function buildGallery(){
            if(artworkIds != null && artworkIds.length > 0){
                let thisGallery = []
                for (let i = 0; i < artworkIds.length; i++){
                    let thisArt = await getArtworkById( artworkIds[i]);
                    thisGallery.push(thisArt);
                }
                console.dir(thisGallery)
                setGalleryDisplay(thisGallery);
            }
        }
        buildGallery();

    }, [artworkIds]);

    return(
        <section>
            {
                
                // galleryDisplay.map(
                //     (art) => (<Artwork key={art.id} artObj={art}/>)
                // )
            }
        </section>
    );
}