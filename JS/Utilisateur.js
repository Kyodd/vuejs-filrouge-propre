new Vue({
    el: '#app',
    data: {
        menuVisible: false
    },
    methods: {
        toggleMenu() {
            this.menuVisible = !this.menuVisible;
        },
        
        logout() {
            console.log('Déconnexion effectuée');
        },

        viewProfile() {
            console.log('Afficher les détails du profil');
        }
    }
});
