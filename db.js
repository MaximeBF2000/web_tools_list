export default {
  categories: [
    { id: "design", french: "Design", english: "Design" },
    { id: "note_taking", french: "Prise de note", english: "Note taking" },
    { id: "project_management", french: "Gestion de projets", english: "Project management" },
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
      image: "https://www.e-monsite.com/medias/images/canva-logo.png",
      url: "https://www.canva.com/",
      french: "Outil de création de contenu visuel en ligne gratuit simple à utiliser",
      english: "",
      price: "freemium"
    },
    {
      id: "photoshop",
      name: "Adobe Photoshop",
      category: "design",
      image: "https://cdn.cnt-tech.io/api/v1/tenants/dd1f88aa-e3e2-450c-9fa9-a03ea59a6bf0/domains/57a9d53a-fe30-4b6f-a4de-d624bd25134b/buckets/8f139e2f-9e74-4be3-9d30-d8f180f02fbb/statics/6a/6a9c4358-3a04-4864-9ad6-3ef41e8b365f",
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
      image: "https://evernote.com/blog/wp-content/uploads/2018/08/favicon.png",
      url: "https://evernote.com/intl/fr",
      french: "Outil de prise de note gratuit",
      english: "",
      price: "freemium"
    },
    {
      id: "notion",
      name: "Notion",
      category: "note_taking",
      image: "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png",
      url: "https://www.notion.so/",
      french: "Outil de prise de note partageable très poussé (intégration d'image, de vidéos...)",
      english: "",
      price: "free"
    },
    {
      id: "microsoft_word",
      name: "Microsoft Word",
      category: "note_taking",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Microsoft_Word_2013_logo.svg/1200px-Microsoft_Word_2013_logo.svg.png",
      url: "https://www.microsoft.com/fr-fr/microsoft-365/word",
      french: "Outil de rédaction",
      english: "",
      price: "pay"
    },
    {
      id: "google_docs",
      name: "Google Docs",
      category: "note_taking",
      image: "https://www.vousnavezpaslesbases.com/wp-content/uploads/2019/01/docs.png",
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
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Asana_logo.svg/1280px-Asana_logo.svg.png",
      url: "https://app.asana.com/",
      french: "Outil de prise de gestion de projet, agile scrum, kanban, grant. Gestion du temps, todo list, gestion d'équipes par email",
      english: "",
      price: "freemium"
    },
    {
      id: "zoom",
      name: "Zoom",
      category: "project_management",
      image: "http://assets.stickpng.com/images/5e8ce318664eae0004085461.png",
      url: "https://zoom.us/fr-fr/meetings.html",
      french: "Outil de communication en meeting vidéo, facetime",
      english: "",
      price: "free"
    },
    // Presentation
    {
      id: "microsoft_powerpoint",
      name: "Microsoft Powerpoint",
      category: "presentation",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Microsoft_Office_PowerPoint_%282013%E2%80%932018%29.svg/768px-Microsoft_Office_PowerPoint_%282013%E2%80%932018%29.svg.png",
      url: "https://www.microsoft.com/fr-fr/microsoft-365/powerpoint",
      french: "Outil de présentation avec slides / visuels, idéal pour des présentation orals de projets",
      english: "",
      price: "pay"
    },
    {
      id: "google_slides",
      name: "Google Slides",
      category: "presentation",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Google_Slides_logo.svg/1200px-Google_Slides_logo.svg.png",
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
      image: "https://images.tuto.net/blog/premiere-cs6-logo.png",
      url: "https://www.adobe.com/fr/products/premiere.html?mv=search&sdid=LQLZT7BT&ef_id=Cj0KCQiA1KiBBhCcARIsAPWqoSqYbqHkP5zr0iRPFyEUqEaF5A1kfUBpliMwwxUU5bwuE26hOIqrJE0aAr1yEALw_wcB:G:s&s_kwcid=AL!3085!3!341217015808!e!!g!!premiere%20pro!1435912734!56537474099&gclid=Cj0KCQiA1KiBBhCcARIsAPWqoSqYbqHkP5zr0iRPFyEUqEaF5A1kfUBpliMwwxUU5bwuE26hOIqrJE0aAr1yEALw_wcB",
      french: "Montage vidéo avancé",
      english: "",
      price: "pay"
    },
    {
      id: "finalcutpro",
      name: "Final Cut Pro",
      category: "video_editing",
      image: "https://upload.wikimedia.org/wikipedia/fr/a/a5/Final_Cut_Pro_Logo_2015.png",
      url: "https://www.apple.com/fr/final-cut-pro/",
      french: "Montage vidéo poussé (logiciel disponible uniquement sur macOS)",
      english: "",
      price: "pay"
    },
    // Screen recording
    {
      id: "obs",
      name: "OBS",
      category: "video_recording",
      image: "https://www.espacemultimediagantner.cg90.net/wp-content/uploads/2019/03/1024px-OBS.svg_.png",
      url: "https://obsproject.com/fr",
      french: "Record vidéo de votre écran",
      english: "",
      price: "free"
    },
    // Get Images
    {
      id: "unsplash",
      name: "Unsplash",
      category: "get_images",
      image: "http://assets.stickpng.com/thumbs/5cb4839d5f1b6d3fbadece7c.png",
      url: "https://unsplash.com/",
      french: "Plateforme de photos / images à récupérer, gratuite ou avec nécéssité d'accréditation",
      english: "",
      price: "free"
    },
    {
      id: "pixabay",
      name: "Pixabay",
      category: "get_images",
      image: "https://image.flaticon.com/icons/png/512/23/23346.png",
      url: "https://pixabay.com/",
      french: "Plateforme de photos / images à récupérer, gratuite ou avec nécéssité d'accréditation",
      english: "",
      price: "free"
    },
    {
      id: "pexels",
      name: "Pexels",
      category: "get_images",
      image: "https://www.e-monsite.com/medias/images/pexels.png",
      url: "https://www.pexels.com/fr-fr/",
      french: "Plateforme de photos / images à récupérer, gratuite ou avec nécéssité d'accréditation",
      english: "",
      price: "free"
    },
    {
      id: "freepik",
      name: "Freepik",
      category: "get_images",
      image: "https://image.flaticon.com/icons/png/512/64/64186.png",
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
      image: "https://coverr.co/assets/images/coverr-icon-round-black.png",
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
      image: "http://crapaudvoyageur.com/wp-content/uploads/2019/11/logo-wordpress-e1519319060902.png",
      url: "https://fr.wordpress.org/",
      french: "CMS (Content Managing System) pour créer votre site web, extensible avec un grand nombre de plugins, et utilisé par environ 1 site web sur 3",
      english: "",
      price: "free"
    },
    {
      id: "shopify",
      name: "Shopify",
      category: "website_builder",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Shopify_logo.svg/1200px-Shopify_logo.svg.png",
      url: "https://www.shopify.fr/",
      french: "CMS spécialisé dans la création de E-commerce, facile à utiliser et extensible avec des un grand nombre d'applications",
      english: "",
      price: "pay"
    },
    {
      id: "squarespace",
      name: "Squarespace",
      category: "website_builder",
      image: "https://images.squarespace-cdn.com/content/v1/54a5505fe4b0d132f64e0e9b/1591009624125-2N9AI6PPG48C45ONY73S/ke17ZwdGBToddI8pDm48kII-SYbU1Wrvupggd9LelOZ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTm8z11QrYV4E_gqyUSYpqTBGBqEuESOKh5JhVbRhWAPSHGiVtAbBKIneovE0cnnh4m/Squarespace-Logo.png",
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
      image: "http://assets.stickpng.com/images/58417f6ba6515b1e0ad75a2b.png",
      url: "https://mailchimp.com/fr/",
      french: "Plateforme de gestion de campagnes d'email, Landing page, gestion de mailing list, retargeting...",
      english: "",
      price: "pay"
    }
  ]
}