import image_canva from "./assets/app_images/canva.png"
import image_photoshop from "./assets/app_images/photoshop.png"
import image_evernote from "./assets/app_images/evernote.png"
import image_notion from "./assets/app_images/notion.png"
import image_word from "./assets/app_images/word.png"
import image_gDocs from "./assets/app_images/g_docs.png"
import image_asana from "./assets/app_images/asana.png"
import image_zoom from "./assets/app_images/zoom.png"
import image_gAgenda from "./assets/app_images/g_agenda.png"
import image_calendly from "./assets/app_images/calendly.png"
import image_powerpoint from "./assets/app_images/powerpoint.png"
import image_gSlides from "./assets/app_images/g_slides.png"
import image_premierePro from "./assets/app_images/premiere_pro.png"
import image_finalcut from "./assets/app_images/finalcut.png"
import image_obs from "./assets/app_images/obs.png"
import image_loom from "./assets/app_images/loom.png"
import image_unsplash from "./assets/app_images/unsplash.png"
import image_pixabay from "./assets/app_images/pixabay.png"
import image_pexels from "./assets/app_images/pexels.png"
import image_freepik from "./assets/app_images/freepik.png"
import image_coverr from "./assets/app_images/coverr.png"
import image_wordpress from "./assets/app_images/wordpress.png"
import image_shopify from "./assets/app_images/shopify.png"
import image_squarespace from "./assets/app_images/squarespace.png"
import image_mailchimp from "./assets/app_images/mailchimp.png"

export default {
  categories: [
    { id: "design", french: "Design", english: "Design" },
    { id: "note_taking", french: "Prise de note", english: "Note taking" },
    { id: "project_management", french: "Gestion de projets", english: "Project management" },
    { id: "time_management", french: "Gestion du temps", english: "Time management" },
    { id: "presentation", french: "Présentation", english: "Presentation" },
    { id: "video_editing", french: "Montage vidéo", english: "Video editing" },
    { id: "video_recording", french: "Record vidéo", english: "Video recording" },
    { id: "get_images", french: "Trouver des images / photos", english: "Images / photos finder" },
    { id: "get_videos", french: "Trouver des vidéos", english: "Videos finder" },
    { id: "get_musics", french: "Trouver des musiques / sons", english: "Musics / sounds finder" },
    { id: "website_builder", french: "Créateur de site web", english: "Wesbite builder" },
    { id: "email_marketing", french: "Marketing email", english: "Email marketing" }
  ],
  tools: [
    // Design
    {
      id: "canva",
      name: "Canva",
      category: "design",
      image: image_canva,
      url: "https://www.canva.com/",
      french: "Outil de création de contenu visuel en ligne gratuit simple à utiliser",
      english: "",
      price: "freemium"
    },
    {
      id: "photoshop",
      name: "Adobe Photoshop",
      category: "design",
      image: image_photoshop,
      url: "https://www.adobe.com/fr/products/photoshop.html",
      french: "Outil de création de contenu visuel très complet",
      english: "",
      price: "pay"
    },
    // Note taking
    {
      id: "evernote",
      name: "Evernote",
      category: "note_taking",
      image: image_evernote,
      url: "https://evernote.com/intl/fr",
      french: "Outil de prise de note gratuit",
      english: "",
      price: "freemium"
    },
    {
      id: "notion",
      name: "Notion",
      category: "note_taking",
      image: image_notion,
      url: "https://www.notion.so/",
      french: "Outil de prise de note partageable très poussé (intégration d'image, de vidéos...)",
      english: "",
      price: "free"
    },
    {
      id: "microsoft_word",
      name: "Microsoft Word",
      category: "note_taking",
      image: image_word,
      url: "https://www.microsoft.com/fr-fr/microsoft-365/word",
      french: "Outil de rédaction",
      english: "",
      price: "pay"
    },
    {
      id: "google_docs",
      name: "Google Docs",
      category: "note_taking",
      image: image_gDocs,
      url: "https://docs.google.com/",
      french: "Outil de rédaction en ligne partageable en équipe",
      english: "",
      price: "free"
    },
    // Project management
    {
      id: "asana",
      name: "Asana",
      category: "project_management",
      image: image_asana,
      url: "https://app.asana.com/",
      french: "Outil de prise de gestion de projet, agile scrum, kanban, grant. Gestion du temps, todo list, gestion d'équipes par email",
      english: "",
      price: "freemium"
    },
    {
      id: "zoom",
      name: "Zoom",
      category: "project_management",
      image: image_zoom,
      url: "https://zoom.us/fr-fr/meetings.html",
      french: "Outil de communication en meeting vidéo, facetime",
      english: "",
      price: "free"
    },
    // Time management
    {
      id: "g_agenda",
      name: "Google Agenda",
      category: "time_management",
      image: image_gAgenda,
      url: "https://www.google.com/intl/fr/calendar/about/",
      french: "Outil de gestion de votre calendrier, relier à votre boîte mail",
      english: "",
      price: "free"
    },
    {
      id: "calendly",
      name: "Calendly",
      category: "time_management",
      image: image_calendly,
      url: "https://calendly.com/fr",
      french: "Outil de gestion de vos rendez-vous, lié à votre boîte mail Google",
      english: "",
      price: "freemium"
    },
    // Presentation
    {
      id: "microsoft_powerpoint",
      name: "Microsoft Powerpoint",
      category: "presentation",
      image: image_powerpoint,
      url: "https://www.microsoft.com/fr-fr/microsoft-365/powerpoint",
      french: "Outil de présentation avec slides / visuels, idéal pour des présentation orals de projets",
      english: "",
      price: "pay"
    },
    {
      id: "google_slides",
      name: "Google Slides",
      category: "presentation",
      image: image_gSlides,
      url: "https://www.google.fr/intl/fr/slides/about/",
      french: "Outil de présentation en ligne partageable avec slides / visuels, idéal pour des présentation orals de projets",
      english: "",
      price: "free"
    },
    // Video editing
    {
      id: "adobe_premierepro",
      name: "Adobe Premiere Pro",
      category: "video_editing",
      image: image_premierePro,
      url: "https://www.adobe.com/fr/products/premiere.html?mv=search&sdid=LQLZT7BT&ef_id=Cj0KCQiA1KiBBhCcARIsAPWqoSqYbqHkP5zr0iRPFyEUqEaF5A1kfUBpliMwwxUU5bwuE26hOIqrJE0aAr1yEALw_wcB:G:s&s_kwcid=AL!3085!3!341217015808!e!!g!!premiere%20pro!1435912734!56537474099&gclid=Cj0KCQiA1KiBBhCcARIsAPWqoSqYbqHkP5zr0iRPFyEUqEaF5A1kfUBpliMwwxUU5bwuE26hOIqrJE0aAr1yEALw_wcB",
      french: "Montage vidéo avancé",
      english: "",
      price: "pay"
    },
    {
      id: "finalcutpro",
      name: "Final Cut Pro",
      category: "video_editing",
      image: image_finalcut,
      url: "https://www.apple.com/fr/final-cut-pro/",
      french: "Montage vidéo poussé (logiciel disponible uniquement sur macOS)",
      english: "",
      price: "pay"
    },
    // Video recording
    {
      id: "obs",
      name: "OBS",
      category: "video_recording",
      image: image_obs,
      url: "https://obsproject.com/fr",
      french: "Record vidéo de votre écran",
      english: "",
      price: "free"
    },
    {
      id: "loom",
      name: "Loom",
      category: "video_recording",
      image: image_loom,
      url: "https://www.loom.com/",
      french: "Outil en ligne de recording vidéo de votre écran et votre webcam & d'hébergement de vos vidéos, facile et rapide à utiliser",
      english: "",
      price: "freemium"
    },
    // Get Images
    {
      id: "unsplash",
      name: "Unsplash",
      category: "get_images",
      image: image_unsplash,
      url: "https://unsplash.com/",
      french: "Plateforme de photos / images à récupérer, gratuite ou avec nécéssité d'accréditation",
      english: "",
      price: "free"
    },
    {
      id: "pixabay",
      name: "Pixabay",
      category: "get_images",
      image: image_pixabay,
      url: "https://pixabay.com/",
      french: "Plateforme de photos / images à récupérer, gratuite ou avec nécéssité d'accréditation",
      english: "",
      price: "free"
    },
    {
      id: "pexels",
      name: "Pexels",
      category: "get_images",
      image: image_pexels,
      url: "https://www.pexels.com/fr-fr/",
      french: "Plateforme de photos / images à récupérer, gratuite ou avec nécéssité d'accréditation",
      english: "",
      price: "free"
    },
    {
      id: "freepik",
      name: "Freepik",
      category: "get_images",
      image: image_freepik,
      url: "https://fr.freepik.com/",
      french: "Plateforme de photos / images à récupérer, gratuite ou avec nécéssité d'accréditation",
      english: "",
      price: "free"
    },
    // Get Videos
    {
      id: "coverr",
      name: "Coverr",
      category: "get_videos",
      image: image_coverr,
      url: "https://coverr.co/",
      french: "Plateforme de vidéos à récupérer, gratuite ou avec nécéssité d'accréditation",
      english: "",
      price: "free"
    },
    // Website builders
    {
      id: "wordpress",
      name: "WordPress",
      category: "website_builder",
      image: image_wordpress,
      url: "https://fr.wordpress.org/",
      french: "CMS (Content Managing System) pour créer votre site web, extensible avec un grand nombre de plugins, et utilisé par environ 1 site web sur 3",
      english: "",
      price: "free"
    },
    {
      id: "shopify",
      name: "Shopify",
      category: "website_builder",
      image: image_shopify,
      url: "https://www.shopify.fr/",
      french: "CMS spécialisé dans la création de E-commerce, facile à utiliser et extensible avec des un grand nombre d'applications",
      english: "",
      price: "pay"
    },
    {
      id: "squarespace",
      name: "Squarespace",
      category: "website_builder",
      image: image_squarespace,
      url: "https://fr.squarespace.com/",
      french: "CMS en ligne de création de site web",
      english: "",
      price: "pay"
    },
    // Email marketing
    {
      id: "mailchimp",
      name: "Mailchimp",
      category: "email_marketing",
      image: image_mailchimp,
      url: "https://mailchimp.com/fr/",
      french: "Plateforme de gestion de campagnes d'email, Landing page, gestion de mailing list, retargeting...",
      english: "",
      price: "freemium"
    }
  ]
}