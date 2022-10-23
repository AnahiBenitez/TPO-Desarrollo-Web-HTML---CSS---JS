//Consumo de API
const { createApp } = Vue

  createApp({
    data() {
      return {
        url:'./js/tienda.json',
        productos:[]
      }
    },
    methods: {
        fetchData(url) {
          console.log(url)
            fetch(url)
                .then(response => response.json())
                .then(data => {
                  console.log(url)
                  console.log(data)
                   this.productos=data}) //Guarda en el ARRAY, el json creado
                    
                
  
        }
    },
      created(){
  
        this.fetchData(this.url) 
      }
  }).mount('#app')