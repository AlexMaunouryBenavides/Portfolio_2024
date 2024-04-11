 import Kijufi from '../Images/DataImg/kijufi.png'
 import CarRent from '../Images/DataImg/carRent.png'
 import MadameBlasee from '../Images/DataImg/madameBlasee.png'
 const data = [
    {
        id:1,        
        name: "MORENT", 
        description:  "Intégration de la maquette d'une plateforme de location de voiture en ligne, la maquette est adaptée au format mobile et l'intégration est faite de manière dynamique." ,    
        liens: {
            github: "https://github.com/AlexMaunouryBenavides/carRent",
            site: "https://car-rent-pearl.vercel.app/"
        },
        image: CarRent,
        alt:"sceenshot du projet",
        stack: ["React", "TailwindCSS"]
    },
    {
        id:2,        
        name: "Kijufi",  
        description: "Site pour un festival de films destiné a toutes les générations de jeunes cinéastes. Basé à Berlin. "  ,   
        liens: {
            github: "",
            site: "https://kijufi.vercel.app/"
        },
        image: Kijufi,
        alt:"sceenshot du projet",
        stack: ["React", "TailwindCSS", "React-router","Swiperjs", "Figma"]
    },
    {
        id:3,        
        name: "MadameBlasee",  
        description: "E-commerce pour la vente de vêtements en ligne."  ,   
        liens: {
            github: "",
            site: "https://madameblasee.com/"
        },
        image: MadameBlasee,
        alt:"sceenshot du projet",
        stack: ["Wordpress", "HTML", "CSS"]
    },
   
    
    
    
];

export default data