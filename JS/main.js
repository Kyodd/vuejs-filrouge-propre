

window.addEventListener("load", (e) => {
    document.getElementById('menu_burger').addEventListener('click', (e) =>{
        // logo
        document.getElementById('burger').classList.toggle('hiden')
        document.getElementById('croix').classList.toggle('hiden')


        //content
        document.getElementById('header').classList.toggle('hiden')
    })
})

