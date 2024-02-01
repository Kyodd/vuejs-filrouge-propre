let usersList = [
    {
        id: 1,
        userName: "user",
        password: "user",
        email: ""
    }
]


const app = Vue.createApp({
    data() {
        return {
            users: usersList,
            isConnected: false,
            visible: false,
        
        }
    },

    methods: {
        login(){
            console.log("login")
            if(this.userName && this.password){
                let user = this.users.find(user => user.userName === this.userName)
                if(user){
                    if(user.password === this.password){
                        this.isConnected = true
                        console.log(this.isConnected)
                        alert("Vous êtes connecté")
                    }else{
                        alert("Mot de passe incorrect")
                    }
                }else{
                    alert("Utilisateur inconnu")
                } }else{
                    alert("Veuillez remplir tous les champs")
                }
        },
        charles(){
            this.visible=true
            console.log("charles")
        },

        charlie(){
           this.visible=false
           
        },

        isConnected(){
            localStorage.getItem("isConnected")

        }
    },

    computed: {

    },

    watch: {
        isConnected:{
            handler(){
                localStorage.setItem("isConnected", JSON.stringify(this.isConnected))
            }
        }
    }
}
)


app.mount('#app')