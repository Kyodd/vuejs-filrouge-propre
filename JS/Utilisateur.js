
const app = Vue.createApp({
    data() {
        return {
            menuVisible: false,
        }
    },

    methods: {
        toggleMenu() {
            this.menuVisible = !this.menuVisible;
            console.log('Menu visible : ' + this.menuVisible);
        },
        
        logout() {
            console.log('Déconnexion effectuée');
        },

        viewProfile() {
            console.log('Afficher les détails du profil');
        }
    },

    computed: {

    },
})
app.mount('#app')