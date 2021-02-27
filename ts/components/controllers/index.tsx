import * as React from 'react';
import { SManga } from '../manga';

// Loads the manga details page given manga data
const handleMangaController = (manga: SManga, navigator: any) => {
  navigator.navigate("MangaController", manga);
}

// Loads the reader page
const handleMangaReader = (manga: SManga, navigator: any) => {

}

export { handleMangaController, handleMangaReader };