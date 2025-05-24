const searchInput = document.getElementById('search_bar');
const suggestionsContainer = document.getElementById('suggestions');

// list of artworks
const artworkTitles = [
    "Portrait Of Eugenia Errazuriz",
    "Portrait of Eric Spencer Fitzwilliam",
    "Alice, The 4th Marchioness Of Salisbury",
    "Lady at the piano",
    "Portrait of Mrs. Frederick Mead with a Fan", 
    "Lady Hazel Lavery",
    "Portrait of Constance Coolidge",
    "Portrait of Henry Sturgis Russell",
    "Portrait of Edwin Austin Abbey",
    "Portrait of Horatio P. Symonds",
    "Lady with a Parasol",
    "A Corner of the Library in Venice",
    "Escutcheon of Charles V of Spain",
    "Gondola Moorings on the Grand Canal",
    "Villa di Marlia, Lucca",
    "Mules",
    "The Garden Wall",
    "Camp and Waterfall",
    "Arab Woman",
    "Garden near Lucca",
    "On the Verandah",
    "Ponte della Canonica",
    "Simplon Pass: The Tease",
    "Palmettos",
    "Spanish Fountain",
    "Stream and Rocks",
    "View from Mount Pilatus",
    "The Salute, Venice",
    "The Libreria",
    "Tyrolese Crucifix",
    "Summer On The Giudecca",
    "Mrs. Carl Meyer And Her Children",
    "Portrait of Lady Agnew of Lochnaw",
    "Helen Sears",
    "Carnation, Lily, Lily, Rose",
    "Madame Paul Escudier",
    "Miss Mathilde Townsend",
    "Self-portrait",
    "Portrait of Arthur",
    "Duke of Connaught",
    "Madame Errazuriz",
    "Mrs. Hugh Hammersley",
    "Madame la Comtesse Jacques de Ganay",
    "Portrait of Charlotte Cram",
    "Portrait of Mrs. J.P. Morgan, Jr.",
    "Dorothy",
    "Ellen Terry as Lady Macbeth",
    "Grace Elvina, Marchioness Curzon of Kedleston",
    "Ellen Sears Amory Anderson Curtis",
    "La Carmencita",
    "Lady and Child Asleep in a Punt under the Willows",
    "Ena and Betty, daughters of Asher and Mrs. Wertheimer",
    "Portrait Of Millicent Leveson-Gower, Duchess Of Sutherland",
    "Mrs. Fiske Warren and Her Daughter Rachel",
    "Mrs. George Swinton",
    "Morning Walk",
    "Mrs. Hugh Smith",
    "Betty Wertheimer",
    "Mosquito Nets",
    "Mrs. William George Raphael",
    "The Birthday Party",
    "Margaret Stuyvesant Rutherfurd White",
    "Miss Grace Woodhouse",
    "Mrs. William Crowninshield Endicott Jr.",
    "Le Verre De Porto",
    "Poppies",
    "The Sitwell Family", 
    "Portrait Of Miss Katherine Elizabeth Lewis",
    "The Breakfast Table",
    "Madame X",
    "Madame Gautreau Drinking a Toast",
    "Portrait of Lisa Colt Curtis",
    "Lady Helen Vincent, Viscountess d’Abernon",
    "The Wyndham Sisters; Lady Elcho, Mrs. Adeane, and Mrs. Tennant",
    "Constance Wynne-Roberts, Mrs. Ernest Hills Of Redleaf",
    "Egyptian Woman", "Ellen Peabody Endicott", "Essie, Ruby und Ferdinand Wertheimer", "Mary Eliza Mead", "Elizabeth Winthrop Chanler", "Eleanora O’Donnell Iselin", "Mrs. Albert Vickers", "Mr. and Mrs. I. N. Phelps Stokes", "Nonchaloir", "Portrait Of Mrs. Edward L. Davis And Her Son, Livingston Davis", "Lady Eden", "Elizabeth Allen Marquand", "Fumée D’ambre Gris", "Lady With The Rose", "Lord Ribblesdale", "Leonard Wood", "Duchess Louise Margaret of Connaught", "Madame Paul Poirson", "Portrait Of Mrs A Lawrence Rotch", "Dr. Pozzi at Home", "Portrait of Woodrow Wilson", "Portrait of James Whitcomb Riley", "Charles Stewart, Sixth Marquess Of Londonderry", "Man Wearing Laurels", "The Rialto, Venice", "On his Holidays, Norway", "Tyrolese Interior", "Hall of the Grand Council", "Egyptian Indigo Dyers", "Street in Venice", "Courtyard, Tetuan, Morocco", "Pavement, Cairo", "Moroccan Street Scene", "Girl Fishing", "River Bank, near Oxford", "Ilex Wood. Majorca", "Home Fields", "An Out of Doors Study", "Landscape with Women in Foreground", "Trout Stream in the Tyrol","Lake O’Hara", "A Waterfall"
];

searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    suggestionsContainer.innerHTML = '';
    if (query) {
        const filteredTitles = artworkTitles.filter(title => 
            title.toLowerCase().includes(query)
        );
        
        if (filteredTitles.length === 0) {
            const noMatchesMessage = document.createElement('div');
            noMatchesMessage.textContent = 'No matches found';
            suggestionsContainer.appendChild(noMatchesMessage);
        } else {
            filteredTitles.forEach(title => {
                const suggestion = document.createElement('div');
                suggestion.textContent = title;
                suggestion.addEventListener('click', () => {
                    searchInput.value = title;
                    suggestionsContainer.innerHTML = '';
                    suggestionsContainer.style.display = 'none';
                    // Redirect to the corresponding artwork page
                    window.open(`../paintings/HTML/${title.replace(/\s+/g, '-').toLowerCase()}.html`, '_blank');
                });
                suggestionsContainer.appendChild(suggestion);
            });
        }

        suggestionsContainer.style.display = 'block';
    } else {
        suggestionsContainer.style.display = 'none';
    }
});
