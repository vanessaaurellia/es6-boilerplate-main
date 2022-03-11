// a melonJS data manifest
// note : this is note a webpack manifest
const DataManifest = [

    /* Bitmap Text */
    {
        name: "PressStart2P",
        type: "image",
        src:  "./data/fnt/PressStart2P.png"
    },
    {
        name: "PressStart2P",
        type: "binary",
        src: "./data/fnt/PressStart2P.fnt"
    },
    {
        name: "area01_level_tiles",  
        type:"image",	
        src: "./data/img/map/area01_level_tiles.png"
    },
    {
        name: "gripe_run_right",     
        type:"image",	
        src: "./data/img/sprite/gripe_run_right.png"
    },
    { 
        name: "background",      
        type:"image",   
        src: "./data/img/background.png" 
    },
    { 
        name: "clouds",          
        type:"image",   
        src: "./data/img/clouds.png" 
    },
    {
        name: "spinning_coin_gold",  
        type:"image",	
        src: "./data/img/sprite/spinning_coin_gold.png"
    },
	{
        name: "wheelie_right",       
        type:"image",	
        src: "./data/img/sprite/wheelie_right.png"
    },
    {
        name: "area01",              
        type: "tmx",	
        src: "./data/map/area01.tmx"
    },
    {
        name: "area02",              
        type: "tmx",	
        src: "data/map/area02.tmx"
    },
    {
        name: "title_screen",        
        type:"image",	
        src: "data/img/gui/title_screen.png"
    },
    {
        name: "dst-inertexponent", 
        type: "audio", 
        src: "data/bgm/"
    },
    {
        name: "cling", 
        type: "audio", 
        src: "./data/sfx/"
    },
	{
        name: "stomp", 
        type: "audio", 
        src: "./data/sfx/"
    },
	{
        name: "jump",  
        type: "audio", 
        src: "./data/sfx/"
    }
];

export default DataManifest;
