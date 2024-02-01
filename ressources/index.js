// Exemple tableau des catégories de produits
const categories = [
    { id: 1, name: 'Mobilier d\'intérieur' },
    { id: 2, name: 'Luminaires' },
    { id: 3, name: 'Tapis' },
    { id: 4, name: 'Objets de décorations' }
  ];
  
  // Exemple tableau des produits
    let products = [
    {
      id: 1,
      image: 'mobilier-5.jpg',
      tiitle: 'Table à manger en bois',
      description: 'Table à manger en bois massif avec finition élégante.',
      price: 299.99,
      moq: 5,
      categoryId: 1
    },
    {
      id: 2,
      image: 'luminaire-1.jpg',
      tiitle: 'Lampe moderne',
      description: 'Lampe avec un design moderne et éclairage ajustable.',
      price: 129.99,
      moq: 10,
      categoryId: 2
    },
    {
      id: 3,
      image: 'tapis-2.jpg',
      title: 'Tapis en laine',
      description: 'Tapis doux en laine avec motif géométrique.',
      price: 89.99,
      moq: 20,
      categoryId: 3
    },
    {
      id: 4,
      image: 'deco-3.jpg',
      tiitle: 'Vase éthnique en argile',
      description: 'Vase éthnique en argile avec motifs gravés à la main.',
      price: 49.99,
      moq: 20,
      categoryId: 4
    },
  ];
  
  // Exemple tableau des commandes & panier 
  const commandes = [
    {
      id: 1,
      produits: [
        { produitId: 1, quantite: 2 },
        { produitId: 3, quantite: 1 }
      ],
      coutTotal: 689.97,
      userId: 1
    },
    {
      id: 2,
      produits: [
        { produitId: 2, quantite: 1 },
        { produitId: 4, quantite: 3 }
      ],
      coutTotal: 539.96,
      userId: 2
    },
  ];

// Exemple tableau des utilisateurs
const utilisateurs = [
    {
        id: 1,
        raisonSociale: 'Entreprise A',
        siret: '12345678901234',
        adresse: '123 Rue de la République',
        codePostal: '75001',
        ville: 'Paris',
        email: 'entrepriseA@example.com',
        motDePasse: 'motdepasseA',
        role: 'USER' 
    },
    {
        id: 2,
        raisonSociale: 'Entreprise B',
        siret: '56789012345678',
        adresse: '456 Avenue des Champs-Élysées',
        codePostal: '75008',
        ville: 'Paris',
        email: 'entrepriseB@example.com',
        motDePasse: 'motdepasseB',
        role: 'ADMIN' 
    },
];

    