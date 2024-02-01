//tableau produits
let products = [
  {
    id: 1,
    name: "Table en bois",
    description: "Table en bois massif avec finition élégante.",
    imageUrl: "../Assets/img/deco-2.jpg",
    price: 199.99,
    category: 'Mobilier',
    quantity: 1,
  },
  {
    id: 2,
    name: "etagere",
    description: "petite etagere style industriel.",
    imageUrl: "/Assets/img/deco-2.jpg",
    price: 89.99,
    category: 'Mobilier',
    quantity: 1,
  },
  {
    id: 3,
    name: "canapé cuir marron",
    description: "Canape en cuir marron trois places.",
    imageUrl: "/assets/img/deco-1.jpg",
    price: 1299.99,
    category: 'Mobilier',
    quantity: 1,
  },
  {
    id: 4,
    name: "canapé en tissu vert",
    description: "Canapeen tissu vert 3 places.",
    imageUrl: "assets/img/deco-1.jpg",
    price: 999.99,
    category: 'Mobilier',
    quantity: 1,
  },
  {
    id: 5,
    name: "ensemble table et chaise ",
    description: "ensemble table et chaise styles scandinave.",
    imageUrl: "assets/img/deco-1.jpg",
    price: 499.49,
    category: 'Mobilier',
    quantity: 1,
  },
  {
    id: 6,
    name: "suspension noire industriel",
    description: "Lampe avec un design moderne et éclairage ajustable.",
    imageUrl: "assets/img/deco-1.jpg",
    price: 79.79,
    category: 'Luminaire',
    quantity: 1,
  },
  {
    id: 7,
    name: "suspension noire ",
    description: "Lampe avec un design moderne et éclairage ajustable.",
    imageUrl: "assets/img/deco-1.jpg",
    price: 89.99,
    category: 'Luminaire',
    quantity: 1,
  },
  {
    id: 8,
    name: "suspencion blanche",
    description: "Lampe avec un design modern.",
    imageUrl: "assets/img/deco-1.jpg",
    price: 51.99,
    category: 'Luminaire',
    quantity: 1,
  },
  {
    id: 9,
    name: "suspencion style bois",
    description: "Lampe avec un design moderne.",
    imageUrl: "assets/img/deco-1.jpg",
    price: 121.49,
    category: 'Luminaire',
    quantity: 1,
  },
  {
    id: 10,
    name: "Applique murale",
    description: "Lampe avec un design moderne.",
    imageUrl: "assets/img/deco-1.jpg",
    price: 39.99,
    category: 'Luminaire',
    quantity: 1,
  },
  {
    id: 11,
    name: "vase style bois",
    description: "deux magnifique vase style bois",
    imageUrl: "assets/img/deco-1.jpg",
    price: 19.99,
    category: 'Décoration',
    quantity: 1,
  },
  {
    id: 12,
    name: "vase design",
    description: "Magnifique vase vert pomme .",
    imageUrl: "assets/img/deco-1.jpg",
    price: 49.99,
    category: 'Décoration',
    quantity: 1,
  },
  {
    id: 13,
    name: "3 poterie decorative",
    description: "poterie decorative en terre cuite.",
    imageUrl: "assets/img/deco-1.jpg",
    price: 119.49,
    category: 'Décoration',
    quantity: 1,
  },
  {
    id: 14,
    name: "vase en terre",
    description: "vase en terre cuir style grec.",
    imageUrl: "assets/img/deco-1.jpg",
    price: 149.49,
    category: 'Décoration',
    quantity: 1,
  },
  {
    id: 15,
    name: "vase bleu",
    description: "vase en verre souffle bleu.",
    imageUrl: "assets/img/deco-1.jpg",
    price: 189.99,
    category: 'Décoration',
    quantity: 1,
  },
  {
    id: 16,
    name: "peau de bete",
    description: "tapis en fausse peau de bete.",
    imageUrl: "assets/img/deco-1.jpg",
    price: 130.0,
    category: 'Tapis',
    quantity: 1,
  },
  {
    id: 17,
    name: "Tapis style marocain",
    description: "tapis style marocain motif lineaire.",
    imageUrl: "assets/img/deco-1.jpg",
    price: 121.49,
    category: 'Tapis',
    quantity: 1,
  },
  {
    id: 18,
    name: "tapis orientale",
    description: "tapis style orientale .",
    imageUrl: "assets/img/deco-1.jpg",
    price: 121.49,
    category: 'Tapis',
    quantity: 1,
  },
  {
    id: 19,
    name: "tapis elephant",
    description: "Joli petit tapis style crochet en forme de tete d'elephant.",
    imageUrl: "assets/img/deco-1.jpg",
    price: 99.99,
    category: 'Tapis',
    quantity: 1,
  },
  {
    id: 20,
    name: "tapis Noir",
    description: "tapis moltonne noir .",
    imageUrl: "assets/img/deco-1.jpg",
    price: 59.99,
    category: 'Tapis',
    quantity: 1,
  },
];

//tableaux utilisateurs
let userList = [
  {
    id: 1,
    userName: "Didier",
    password: "Admin#1",
    email: "admin@gmail.com",
    category: "admin",
  },

  {
    id: 2,
    userName: "valentin",
    password: "Valentin#62",
    email: "val.fandelom@gmail.com",
    category: "client",
  }
];

let sellersList = [
  {
    id: 1,
    userName: "Benoit",
    password: "BenoitDuBl3d?",
    email: "benoit.valkyrie@gmail.com",
    category: "seller",
    siret: "12345678912345",
  },
];

const app = Vue.createApp({
  data() {
    return {
//pour users
      tempTable: {},
      users: userList,
      sellers: sellersList,
      isConnected: false,
      loginModal: false,
      connectedUser: [],
//pour produits
      product: products,
      active: false,
      cartisVisible: false,
      counter: 0,
      cart: [],
//pour le CRUD
      editModal: false,
      addModal: false,
      editIndex: -1,
    };
  },

  methods: {

//pour user inscription
    addUser() {
      let { userName, password, email, category, confPassword, siret } =
        this.tempTable;
      const emailReg =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/i;
      const passwordReg =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;
      const siretReg = /^\d{14}$/;

      if (userName && email && password && category) {
        if (emailReg.test(email)) {
          if (passwordReg.test(password)) {
            if (password === confPassword) {
              if (category === "client") {
                this.users.push({
                  id: this.users.length + 1,
                  userName: userName,
                  password: password,
                  email: email,
                  category: category,
                });
                this.tempTable = {};
              } else if (
                category === "commerçant" &&
                siret &&
                siretReg.test(siret)
              ) {
                this.sellers.push({
                  id: this.sellers.length + 1,
                  userName: userName,
                  password: password,
                  email: email,
                  category: category,
                  siret: siret,
                });
                this.tempTable = {};
              } else if (
                category === "commerçant" &&
                (!siret || !siretReg.test(siret))
              ) {
                alert("Numéro de Siret non valide");
              }
            } else {
              alert("Mot de passe non valide");
            }
          } else {
            alert("Votre mot de passe ne remplit pas les critères requis");
          }
        } else {
          alert("Email non valide");
        }
      } else {
        alert("Veuillez remplir tous les champs");
      }
    },

//pour user connexion
    login() {
      if(this.validateInput()){
        let user = this.users.find((user) => user.userName === this.userName);

        if(!user){
          user = this.sellers.find((seller) => seller.userName === this.userName)
        }

        if(user){
          this.handleUserFound(user)
        } else {
          alert("Utilisateur inconnu")
        }
      } else {
        alert("Veuillez remplir tous les champs")
      }
    },

    validateInput(){
      return this.userName && this.password
    },

    handleUserFound(user){
      if(user.password === this.password){
        this.handleSuccessLogin();
      } else {
        alert("Mot de passe incorrect")
      }
    },

    handleSuccessLogin(){
      this.isConnected = true
      this.loginModal = false
      this.connectedUser.push(user)
      this.localSave()
      alert("Vous êtes connecté")
    },

    logOut(){
      this.isConnected = false
      console.log(this.isConnected)
      localStorage.removeItem("connectedUser")
    },

    openLoginModal(){
      this.loginModal = true
    },

    closeLoginModal(){
      this.loginModal = false
    },

    localSave() {
//pour users
      localStorage.setItem("users", JSON.stringify(this.users));
      localStorage.setItem("sellers", JSON.stringify(this.sellers));
      localStorage.setItem("cart", JSON.stringify(this.cart));
      localStorage.setItem("product", JSON.stringify(this.product));
      localStorage.setItem("connectedUser", JSON.stringify(this.connectedUser));
    },

//pour produits

    addToCart(product) {
      let existingProduct = this.cart.find((item) => item.id === product.id);
      if (existingProduct) {
        existingProduct.quantity++;
      } else {
        this.cart.push({ ...product, quantity: 1, active: true });
      }
      this.localSave();
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

//Pour le CRUD produits

    openEditModal(index){
      this.editModal = true
      this.editIndex = index
      this.tempTable = {...this.product[index]}
    },

    openAddModal(){
      this.addModal = true
    },

    closeModal(){
      this.editModal = false
      this.addModal = false
    },

    closeAddModal(){
      this.addModal = false
      this.tempTable = {}
    },

    addProduct(){
      if(this.tempTable && this.tempTable.name && this.tempTable.price && this.tempTable.quantity && this.tempTable.category){
        this.product.push(this.tempTable)
        this.tempTable = {}
        this.closeAddModal()
      } else {
        alert("Veuillez remplir tous les champs")
        console.log('hello?')
      }
    },

    closeEditModal(){
      this.editModal = false
      this.editIndex = -1
      this.tempTable = {}
    },

    editProduct(){
      this.addModal = false
      if(this.tempTable.name && this.tempTable.price && this.tempTable.quantity && this.tempTable.category){
        this.product[this.editIndex] = this.tempTable
        this.tempTable = {}
        this.closeEditModal()
      } else {
        alert("Veuillez remplir tous les champs")
      }
    },

    deleteProduct(index){
      if(confirm("Etes-vous sur de vouloir supprimer ce produit ?")){
        this.product.splice(index, 1)
      }
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

    sellers: {
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
  },

  connectedUser: {
    deep: true,
    handler(newValue) {
      this.localSave();
    },
  },

  created() {

//pour users
    let storedSave = localStorage.getItem("users");
    if (storedSave) {
      this.users = JSON.parse(storedSave);
    }
    storedSave = localStorage.getItem("sellers");
    if (storedSave) {
      this.sellers = JSON.parse(storedSave);
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
    storedSave = localStorage.getItem("connectedUser");
    if(storedSave){
      this.connectedUser = JSON.parse(storedSave)
      this.isConnected = true
    }
  },
});

app.mount("#app");

