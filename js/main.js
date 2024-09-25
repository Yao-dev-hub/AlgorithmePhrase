function analyserPhrase(phrase) {
    let longueur = 0; // Compteur de la longueur de la phrase
    let nombreMots = 0; // Compteur de mots
    let nombreVoyelles = 0; // Compteur de voyelles
    
    let voyelles = "aeiouyAEIOUY"; // Les voyelles à prendre en compte
    let dansMot = false; // Pour vérifier si on est dans un mot

    for (let i = 0; i < phrase.length; i++) {
        let char = phrase[i];
        
        // Si le caractère est un point, on arrête la lecture
        if (char === '.') {
            break;
        }

        // Incrémenter la longueur pour chaque caractère
        longueur++;
        
        // Vérifier si le caractère est une voyelle
        if (voyelles.includes(char)) {
            nombreVoyelles++;
        }

        // Compter les mots, en supposant qu'ils sont séparés par un espace
        if (char !== ' ' && !dansMot) {
            dansMot = true; // On commence un nouveau mot
            nombreMots++;
        } else if (char === ' ') {
            dansMot = false; // On a fini un mot
        }
    }
    
    // Afficher les résultats
    console.log(`Longueur de la phrase : ${longueur} caractères`);
    console.log(`Nombre de mots dans la phrase : ${nombreMots}`);
    console.log(`Nombre de voyelles dans la phrase : ${nombreVoyelles}`);
}

// Exemple d'utilisation
let phrase = "Bonjour à tous. Comment allez-vous ?";
analyserPhrase(phrase);