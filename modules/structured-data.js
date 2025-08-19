(function() {
    const schemaData = {
        "en": {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Daniel Borges Crema",
            "url": "https://danielcrema.github.io/GlobalCV/",
            "image": "https://danielcrema.github.io/GlobalCV/assets/avatar-meta.jpg",
            "email": "danielborgescrema@gmail.com",
            "jobTitle": "Data Scientist & Analyst",
            "sameAs": [
                "https://github.com/DanielCrema",
                "https://www.linkedin.com/in/daniel-crema-dev",
                "https://wa.link/x1p73m",
                "https://danielcrema.carrd.co/"
            ]
        },
        "pt": {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Daniel Borges Crema",
            "url": "https://danielcrema.github.io/GlobalCV/",
            "image": "https://danielcrema.github.io/GlobalCV/assets/avatar-meta.jpg",
            "email": "danielborgescrema@gmail.com",
            "jobTitle": "Cientista de Dados e Analista",
            "sameAs": [
                "https://github.com/DanielCrema",
                "https://www.linkedin.com/in/daniel-crema-dev",
                "https://wa.link/x1p73m",
                "https://danielcrema.carrd.co/"
            ]
        },
        "es": {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Daniel Borges Crema",
            "url": "https://danielcrema.github.io/GlobalCV/",
            "image": "https://danielcrema.github.io/GlobalCV/assets/avatar-meta.jpg",
            "email": "danielborgescrema@gmail.com",
            "jobTitle": "Científico de Datos y Analista",
            "sameAs": [
                "https://github.com/DanielCrema",
                "https://www.linkedin.com/in/daniel-crema-dev",
                "https://wa.link/x1p73m",
                "https://danielcrema.carrd.co/"
            ]
        },
        "fr": {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Daniel Borges Crema",
            "url": "https://danielcrema.github.io/GlobalCV/",
            "image": "https://danielcrema.github.io/GlobalCV/assets/avatar-meta.jpg",
            "email": "danielborgescrema@gmail.com",
            "jobTitle": "Data Scientist et Analyste",
            "sameAs": [
                "https://github.com/DanielCrema",
                "https://www.linkedin.com/in/daniel-crema-dev",
                "https://wa.link/x1p73m",
                "https://danielcrema.carrd.co/"
            ]
        }
    };

    // Detect current language from <html lang=""> or default to English
    const lang = document.documentElement.lang || "en";
    const data = schemaData[lang] || schemaData["en"];

    // Create a <script type="application/ld+json"> and append to <head>
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(data, null, 2);
    document.head.appendChild(script);
})();