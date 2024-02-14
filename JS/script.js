//tableau produits
let products = [
  {
    id: 1,
    name: "Table en bois",
    description: "Table en bois massif avec finition élégante.",
    imageUrl: "../Assets/img/mobilier-1.jpg",
    price: 199.99,
    category: 'Mobilier',
    quantity: 1,
    moq: 5,
  },
  {
    id: 2,
    name: "etagere",
    description: "petite etagere style industriel.",
    imageUrl: "../Assets/img/mobilier-2.jpg",
    price: 89.99,
    category: 'Mobilier',
    quantity: 1,
    moq: 5,
  },
  {
    id: 3,
    name: "canapé en tissu vert",
    description: "Canapeen tissu vert 3 places.",
    imageUrl: "../Assets/img/mobilier-4.jpg",
    price: 999.99,
    category: 'Mobilier',
    quantity: 1,
    moq: 5,
  },
  {
    id: 4,
    name: "ensemble table et chaise ",
    description: "ensemble table et chaise styles scandinave.",
    imageUrl: "../Assets/img/mobilier-5.jpg",
    price: 499.49,
    category: 'Mobilier',
    quantity: 1,
    moq: 5,
  },
  {
    id: 5,
    name: "canapé cuir marron",
    description: "Canape en cuir marron trois places.",
    imageUrl: "../Assets/img/mobilier-3.jpg",
    price: 1299.99,
    category: 'Mobilier',
    quantity: 1,
    moq: 5,
  },
  {
    id: 6,
    name: "suspension noire industriel",
    description: "Lampe avec un design moderne et éclairage ajustable.",
    imageUrl: "../Assets/img/luminaire-1.jpg",
    price: 79.79,
    category: 'Luminaire',
    quantity: 1,
    moq: 5,
  },
  {
    id: 7,
    name: "suspension noire ",
    description: "Lampe avec un design moderne et éclairage ajustable.",
    imageUrl: "../Assets/img/luminaire-4.jpg",
    price: 89.99,
    category: 'Luminaire',
    quantity: 1,
    moq: 5,
  },
  {
    id: 8,
    name: "suspension blanche",
    description: "Lampe avec un design moderne.",
    imageUrl: "../Assets/img/luminaire-2.jpg",
    price: 51.99,
    category: 'Luminaire',
    quantity: 1,
    moq: 5,
  },
  {
    id: 9,
    name: "suspension style bois",
    description: "Lampe avec un design moderne.",
    imageUrl: "../Assets/img/luminaire-3.jpg",
    price: 121.49,
    category: 'Luminaire',
    quantity: 1,
    moq: 5,
  },
  {
    id: 10,
    name: "Applique murale",
    description: "Lampe avec un design moderne.",
    imageUrl: "../Assets/img/luminaire-5.jpg",
    price: 39.99,
    category: 'Luminaire',
    quantity: 1,
    moq: 5,
  },
  {
    id: 11,
    name: "vase style bois",
    description: "deux magnifique vase style bois",
    imageUrl: "../Assets/img/deco-1.jpg",
    price: 19.99,
    category: 'Décoration',
    quantity: 1,
    moq: 5,
  },
  {
    id: 12,
    name: "vase design",
    description: "Magnifique vase vert pomme .",
    imageUrl: "../Assets/img/deco-2.jpg",
    price: 49.99,
    category: 'Décoration',
    quantity: 1,
    moq: 5,
  },
  {
    id: 13,
    name: "3 poterie decorative",
    description: "poterie decorative en terre cuite.",
    imageUrl: "../Assets/img/deco-3.jpg",
    price: 119.49,
    category: 'Décoration',
    quantity: 1,
    moq: 5,
  },
  {
    id: 14,
    name: "vase en terre",
    description: "vase en terre cuir style grec.",
    imageUrl: "../Assets/img/deco-4.jpg",
    price: 149.49,
    category: 'Décoration',
    quantity: 1,
    moq: 5,
  },
  {
    id: 15,
    name: "vase bleu",
    description: "vase en verre souffle bleu.",
    imageUrl: "../Assets/img/deco-5.jpg",
    price: 189.99,
    category: 'Décoration',
    quantity: 1,
    moq: 5,
  },
  {
    id: 16,
    name: "peau de bete",
    description: "tapis en fausse peau de bete.",
    imageUrl: "../Assets/img/tapis-1.jpg",
    price: 130.0,
    category: 'Tapis',
    quantity: 1,
    moq: 5,
  },
  {
    id: 17,
    name: "Tapis style marocain",
    description: "tapis style marocain motif lineaire.",
    imageUrl: "../Assets/img/tapis-2.jpg",
    price: 121.49,
    category: 'Tapis',
    quantity: 1,
    moq: 5,
  },
  {
    id: 18,
    name: "tapis orientale",
    description: "tapis style orientale .",
    imageUrl: "../Assets/img/tapis-3.jpg",
    price: 121.49,
    category: 'Tapis',
    quantity: 1,
    moq: 5,
  },
  {
    id: 19,
    name: "tapis elephant",
    description: "Joli petit tapis style crochet en forme de tete d'elephant.",
    imageUrl: "../Assets/img/tapis-4.jpg",
    price: 99.99,
    category: 'Tapis',
    quantity: 1,
    moq: 5,
  },
  {
    id: 20,
    name: "tapis Noir",
    description: "tapis moltonne noir .",
    imageUrl: "../Assets/img/tapis-5.jpg",
    price: 59.99,
    category: 'Tapis',
    quantity: 1,
    moq: 5,
  },
];

//tableaux utilisateurs
let userList = [
  {
    id: 1,
    userName: "admin",
    password: "admin",
    email: "admin@gmail.com",
    category: "admin",
    dateCreated: '29/01/2024',
    profilePicUrl: "",
  },

  {
    id: 2,
    userName: "user",
    password: "user",
    email: "user@gmail.com",
    adress:"2 rue de la paix",
    city:"Paris",
    zipCode: "75000",
    category: "client",
    dateCreated: '29/01/2024',
    profilePicUrl: "",
  },
  {
    id: 3,
    userName: "seller",
    password: "seller",
    email: "seller@gmail.com",
    category: "commerçant",
    adress:"1 rue de la paix",
    city:"Paris",
    zipCode: "75000",
    siret: "12345678912345",
    raisonSociale: "LDM",
    companyName: "les devs de minuit",
    dateCreated: '29/01/2024',
    profilePicUrl: "",
  },
];

const app = Vue.createApp({
  data() {
    return {
      //pour users
      tempTable: {},
      users: userList,
      isConnected: false,
      sellerConnected: false,
      adminConnected: false,
      loginModal: false,
      connectedUser: [],
      orderHistory: [],
      //pour produits
      product: products,
      active: false,
      cartisVisible: false,
      counter: 0,
      cart: [],
      categories: ['Mobilier', 'Luminaire', 'Décoration', 'Tapis'],
      totalPriceNoVATValue: 0,
      totalPriceValue: 0,
      //pour le CRUD
      editModal: false,
      addModal: false,
      editIndex: -1,
      bannedUsers: [],
      //userMenu
      menuVisible: false,
      //Détails produit
      detailsModalOpen: false,
      //filtre
      selectedCategory: 'all',
      //pannel admin
      prodCrud: false,
      categoryCrud: false,
      //gestion commande
      delivered: false,
      //profilePic
      editProfilePic: false,
      profilePicUrl: "",

    };
  },

  methods: {


    //pour user inscription
    addUser() {
      let {userName, password, email, category, confPassword, siret, adress, city, zipCode, companyName, raisonSociale} = this.tempTable;
      const emailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/i;
      const passwordReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;
      const siretReg = /^\d{14}$/;
      const zipCodeReg = /^\d{5}$/;
      const raisonSocialeReg = /^[a-zA-Z]{3}$/;


        if(userName && password && email && category && confPassword && adress && city && zipCode){
          if(emailReg.test(email)){
            if(passwordReg.test(password)){
              if(zipCodeReg.test(zipCode)){
                if(password === confPassword){
                  if(category === "client"){
                    this.users.push({
                      id: this.users.length + 1,
                      userName,
                      password,
                      email,
                      category,
                      adress,
                      city,
                      zipCode,
                      dateCreated: new Date().toLocaleDateString(),
                    });
                    alert("Inscription réussie, vous pouvez maintenant vous connecter")
                    this.tempTable = {};
                  } else if(category === "commerçant" && siret && siretReg.test(siret) && raisonSociale && raisonSocialeReg.test(raisonSociale) && companyName){
                    this.users.push({
                      id: this.users.length + 1,
                      userName,
                      password,
                      email,
                      category,
                      siret,
                      raisonSociale,
                      companyName,
                      adress,
                      city,
                      zipCode,
                      dateCreated: new Date().toLocaleDateString(),    
                    });
                    alert("Inscription réussie, vous pouvez maintenant vous connecter")
                    this.tempTable = {};
                  }
                } else{
                  alert("Les mots de passe ne correspondent pas")
                }
              } else{
                alert("Code postal invalide")
              }                
              } else{
                alert("Votre mot de pass ne remplis pas les conditions requises")
              }
            } else {
              alert("Veuillez entrer une adresse email valide")
            }
          } else {
            alert("Veuillez remplir tous les champs")
          }
        },

    //pour user connexion
    login() {
      if(this.validateInput()){
        let user = this.users.find((user) => user.userName === this.userName);

        if(user){
          this.handleUserFound(user);
        } else {
          alert("Nom d'utilisateur incorrect")
        }
      } else {
        alert("Veuillez remplir tous les champs")
      }
    },

    validateInput() {
      return this.userName && this.password
    },

    handleUserFound(user) {
      if (user.password === this.password) {
        this.handleSuccessLogin(user.category);
      } else {
        alert("Mot de passe incorrect")
      }
    },

    handleSuccessLogin(category) {
      this.loginModal = false

      let email = this.users.find((user) => user.userName === this.userName).email
      let creationDate = this.users.find((user) => user.userName === this.userName).dateCreated


      this.connectedUser = {
        userName: this.userName,
        category: category,
        email: email,
        creationDate: creationDate,
        adress: this.users.find((user) => user.userName === this.userName).adress,
        city: this.users.find((user) => user.userName === this.userName).city,
        zipCode: this.users.find((user) => user.userName === this.userName).zipCode,
        siret: this.users.find((user) => user.userName === this.userName).siret,
        companyName: this.users.find((user) => user.userName === this.userName).companyName,
        raisonSociale: this.users.find((user) => user.userName === this.userName).raisonSociale
      }

      if (category === "admin") {
        this.isConnected = true
        this.adminConnected = true
        localStorage.setItem("adminConnected", true)
        localStorage.setItem("isConnected", true)
        alert("Bienvenue " + this.userName)
      } else if (category === "commerçant") {
        this.isConnected = true
        this.sellerConnected = true
        localStorage.setItem("sellerConnected", true)
        localStorage.setItem("isConnected", true)
        console.log("sellerConnected")
        alert("Bienvenue " + this.userName)
      } else if (category === "client") {
        this.isConnected = true
        localStorage.setItem("isConnected", true)
        alert("Bienvenue " + this.userName)
      }
      localStorage.setItem("connectedUser", JSON.stringify(this.connectedUser));
    },

    logOut() {
      this.isConnected = false
      localStorage.removeItem("isConnected")
      if (this.adminConnected) {
        this.adminConnected = false
        localStorage.removeItem("adminConnected")
      } else if (this.sellerConnected) {
        this.sellerConnected = false
        localStorage.removeItem("sellerConnected")
      }
      window.location.href = "../index.html";
    },

    openLoginModal() {
      this.loginModal = true
    },

    closeLoginModal() {
      this.loginModal = false
    },

    localSave() {
      //pour users
      localStorage.setItem("users", JSON.stringify(this.users));
      localStorage.setItem("cart", JSON.stringify(this.cart));
      localStorage.setItem("product", JSON.stringify(this.product));
    },

    //pour userMenu
    toggleMenu() {
      this.menuVisible = !this.menuVisible;
      console.log('Menu visible : ' + this.menuVisible);
    },

    logout() {
      console.log('Déconnexion effectuée');
    },

    viewProfile() {
      console.log('Afficher les détails du profil');
    },

    //pour photo de profil
    
    addProfilePic(imageUrl) {
      if(imageUrl) {
        this.connectedUser.profilePic = imageUrl;
        this.editProfilePic = false;
      } else {
        alert("Veuillez saisir une URL valide");
      }
      localStorage.setItem("connectedUser", JSON.stringify(this.connectedUser));
    },
    
    openProfilePicEdit() {
      this.editProfilePic = true;
    },

    closeProfilePicEdit() {
      this.editProfilePic = false;
    },

    removeProfilePic() {
      if(confirm("Etes-vous sur de vouloir supprimer votre photo de profil ?")){
        this.connectedUser.profilePic = "";
        this.editProfilePic = false;
        localStorage.setItem("connectedUser", JSON.stringify(this.connectedUser));
      }
    },


    //pour page produits

    searchProduct(){
      let search = this.search.toLowerCase()
      this.product = products.filter((product) => {
        return product.name.toLowerCase().includes(search) || product.category.toLowerCase().includes(search)
      })
    },

    filterByCategory() {
      if (this.selectedCategory === 'all') {
        this.product = products
      } else {
        this.product = products.filter((product) => {
          return product.category === this.selectedCategory
        })
      }
    },

    addToCart(product) {
      let existingProduct = this.cart.find((item) => item.id === product.id);
      if (existingProduct) {
        existingProduct.quantity += 5;
        this.closeDetailsModal()
      } else {
        this.cart.push({ ...product, quantity: 5, active: true });
        this.closeDetailsModal()
      }
      this.localSave();
    },

    totalProdNoVAT(prod) {
      let total = ((prod.price * prod.quantity) * 0.8)
      return total.toFixed(2)
    },

    totalProductPrice(prod) {
      let total = (prod.price * prod.quantity)
      return total.toFixed(2)
    },

    totalPriceNoVAT() {
      return this.cart.reduce((acc, product) => {
        if (product.active) {
          return acc + parseFloat((product.price * product.quantity) * 0.8);
        } else {
          return acc;
        }
      }, 0).toFixed(2);
    },

    totalPrice() {
      return this.cart.reduce((acc, product) => {
        if (product.active) {
          return acc + parseFloat(product.price * product.quantity);
        } else {
          return acc;
        }
      }, 0).toFixed(2);
    },

    add(prod) {
      prod.quantity += 5
      this.localSave()
    },

    remove(prod) {
      if (prod.quantity > 5) {
        prod.quantity -= 5
      }
      this.localSave()
    },

    deleteItem(productId) {
      let index = this.cart.findIndex((product) => product.id === productId)
      if (index !== -1 && confirm("Etes-vous sur de vouloir supprimer cet article de votre panier ?")) {
        this.cart.splice(index, 1)
        this.localSave()
      }

    },

    //gestionaire des commandes

    markAsDelivered(index) {
      let order = this.orderHistory[index]
      if(confirm("Etes-vous sur de vouloir marquer cette commande comme livrée ?")){
        order.delivered = true
      }
      localStorage.setItem("orderHistory", JSON.stringify(this.orderHistory));
      console.log('yo')
  },

    //Détails produit
        openDetailsModal(index) {
          if(index >= 0 && index < this.product.length){
            this.detailsModalOpen = true;
            this.detailsIndex = index;
            this.tempTable = { ...this.product[index] }
          } else {
            alert("Erreur lors de l'ouverture du modal de détails")
          }
        },
    
        closeDetailsModal() {
          this.detailsModalOpen = false
        },

        
        
        //Pour le CRUD produits
        
        openEditModal(index) {
          if (this.sellerConnected || this.adminConnected) {
            this.editModal = true;
            this.editIndex = index;
            this.tempTable = { ...this.product[index] };
          }
        },
        openAddModal() {
          if (this.sellerConnected || this.adminConnected) {
            this.addModal = true;
          }
        },
        closeModal() {
          this.editModal = false;
          this.addModal = false;
        },
        closeAddModal() {
          this.addModal = false;
          this.tempTable = {};
        },
        addProduct() {
          if (this.sellerConnected || this.adminConnected) {
            if (this.tempTable && this.tempTable.name && this.tempTable.price && this.tempTable.quantity && this.tempTable.category && this.tempTable.imageUrl) {
              this.product.push(this.tempTable);
              this.tempTable = {
                id: this.product.length + 1,
                name: "",
                price: "",
                quantity: "",
                category: "",
                imageUrl: "",
              };
              this.closeAddModal();
            } else {
              alert("Veuillez remplir tous les champs");
            }
          }
        },

        addProdImage(){
          if(imageUrl){
            this.tempTable.imageURL = imageUrl
          } else {
            alert("Veuillez saisir une URL valide")
          }
        },

        closeEditModal() {
          this.editModal = false;
          this.editIndex = -1;
          this.tempTable = {};
        },
        editProduct() {
          if (this.sellerConnected || this.adminConnected) {
            this.addModal = false;
            if (this.tempTable.name && this.tempTable.price && this.tempTable.quantity && this.tempTable.category) {
              this.product[this.editIndex] = this.tempTable;
              this.tempTable = {};
          this.closeEditModal();
        } else {
          alert("Veuillez remplir tous les champs");
        }
      }
    },
    deleteProduct(index) {
      if (this.sellerConnected || this.adminConnected) {
        if (confirm("Etes-vous sur de vouloir supprimer ce produit ?")) {
          this.product.splice(index, 1);
        }
      }
    },

    addCategory(newCategory) {
      if (!this.categories.includes(newCategory)) {
        this.categories.push(newCategory);
        localStorage.setItem("categories", JSON.stringify(this.categories));
    } else {
        alert("Veuillez saisir une nouvelle catégorie valide");
      }
    },

    deleteCategory(index) {
      if (this.sellerConnected || this.adminConnected) {
        if (confirm("Etes-vous sur de vouloir supprimer cette catégorie ?")) {
          this.categories.splice(index, 1);
          localStorage.setItem("categories", JSON.stringify(this.categories));
        }
      }
    },

    //Crud users

    changeUserRole(index) {
      if (this.adminConnected) {
        let user = this.users[index];
        if (user.category === "client") {
          user.category = "admin";
        } else {
          user.category = "client";
        }
      }
    
    },

    banUser(index){
      if(this.adminConnected && confirm("Etes-vous sur de vouloir bannir cet utilisateur ?")){
        let user = this.users[index];
        this.bannedUsers.push(user);
        this.users.splice(index, 1);
      } else {
        alert("Franchement Mathieu a ton age...")
      }
    },

    unbanUser(index){
      if(confirm("Etes-vous sur de vouloir débannir cet utilisateur ?")){
        let user = this.bannedUsers[index]
        this.users.push(user)
        this.bannedUsers.splice(index, 1)
      }
    },

    //historique des commandes
    order() {
      let order = {
        id: this.orderHistory.length + 1,
        date: new Date().toLocaleString(),
        products: this.cart,
        name: this.cart.map((product) => {
          return product.name;
        }),
        quantity: this.cart.reduce((acc, product) => {
          return acc + product.quantity;
        }
          , 0),
        productsPrice: this.cart.map((product) => {
          return product.price;
        }),
        totalPrice: this.cart.reduce((acc, product) => {
          return acc + product.price * product.quantity;
        }, 0).toFixed(2),
        totalPriceNoVAT: this.cart.reduce((acc, product) => {
          return acc + (product.price * product.quantity) * 0.8;
        }, 0).toFixed(2),
        delivered: false,
      }
      this.orderHistory.push(order)
      this.cart = []
      alert("Merci pour votre commande, vous pouvez trouver le détail de votre commande dans l'onglet 'mes commandes', ou sur votre profil")
      localStorage.setItem("orderHistory", JSON.stringify(this.orderHistory));
    },

    //adminPannel
    
    toggleProdCrud(){
      this.prodCrud = !this.prodCrud
    },

    toggleCategoryCrud(){
      this.categoryCrud = !this.categoryCrud
    },
  },







  computed: {},

  watch: {

    //pour users
    users: {
      deep: true,
      handler() {
        this.localSave();
      },
    },

    product: {
      deep: true,
      handler() {
        this.localSave();
      },
    },
    //pour produits
    cart: {
      deep: true,
      handler() {
        this.localSave();
      },
    },

    //pour historique des commandes
    orderHistory: {
      deep: true,
      handler() {
        this.localSave();
      },
    },

    connectedUser: {
      deep: true,
      handler() {
        this.localSave();
      },
    },

    categories: {
      deep: true,
      handler() {
        this.localSave();
      },
    },
  },

  created() {
    //pour users
    let storedSave = localStorage.getItem("users");
    if (storedSave) {
      this.users = JSON.parse(storedSave);
    }
    //pour produits
    storedSave = localStorage.getItem("cart");
    if (storedSave) {
      this.cart = JSON.parse(storedSave);
    }
    storedSave = localStorage.getItem("product");
    if (storedSave) {
      this.product = JSON.parse(storedSave);
    }
    let isConnected = localStorage.getItem("isConnected") === "true";
    this.isConnected = isConnected || false;
    let adminConnected = localStorage.getItem("adminConnected") === "true";
    this.adminConnected = adminConnected || false;
    let sellerConnected = localStorage.getItem("sellerConnected") === "true";
    this.sellerConnected = sellerConnected || false;
    storedSave = localStorage.getItem("orderHistory");
    if (storedSave) {
      this.orderHistory = JSON.parse(storedSave);
    }
    storedSave = localStorage.getItem("connectedUser");
    if (storedSave) {
      this.connectedUser = JSON.parse(storedSave);
    }
    storedSave = localStorage.getItem("categories");
    if (storedSave) {
      this.categories = JSON.parse(storedSave);
    }
  },
});

app.mount("#app");

