<template>
  <div class="contenedor">
    <div class="title-productos">
        <img src="../assets/mercadolibre.png" alt="">
        <h2>Bienvenidos al buscador de mercado libre</h2> 
    </div>
    <div class="row justify-content-start mt-5">
      <div class="contenedor-buscar">
        <div class="input-group">
            <span class="input-group-text" id="addon-wrapping">Busca un producto</span>
            <input type="text" class="form-control" v-model="filter" @keyup="filterProducts" placeholder="" aria-label="Username" aria-describedby="addon-wrapping">
        </div>
      </div>
      <button type="button" class="btn button-search col-12 col-lg-3" @click="getData()">Buscar</button>
    </div>
    <div class="mt-5">
      <div class="row justify-content-center">
         <CardProduct :title="p.title" :price="p.price" :thumbnail="p.thumbnail" v-for="p in data" :key="p.title"/>
        <h3 v-if="data.length==0" class="no-data">No hay datos para mostrar, busca un producto</h3>
        <div v-if="data.length>0" class="d-flex justify-content-center">
            <button type="button" class="btn button-pagination" @click="back()">Atrás</button>
            <button type="button" class="btn button-pagination" @click="next()">Siguiente</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardProduct from '../components/CardProduct.vue';

export default {
  name: "Products",
  components: {
    CardProduct
  },
  data() {
    return {
      data: [],
      filter : "",
      pageSize : 0,
      limit : 5,
      offset : 0,
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${this.filter}&limit=${this.limit}&offset=${this.offset}`)
      .then((response) => response.json())
      .then((data) => {
        this.data = data.results;
        this.pageSize==0 && 
          (this.pageSize = data.paging.primary_results-1)
      });
    },
    filterProducts(){
      this.offset=0
      this.pageSize=0
    },
    next(){
      debugger
      this.offset = this.offset+this.limit;
      if(this.pageSize >= this.offset){
        this.getData()
      }else{
        this.offset = this.offset-this.limit;
      }
    },
    back(){
      this.offset = this.offset-this.limit;
      if( this.offset >= 0){
        this.getData()
      }else{
        this.offset = this.offset+this.limit;
      }
    }
  },
}
</script>

<style lang="scss" scoped>
  .contenedor{
      min-height: 100vh;
  }

  .title-productos{
      display: flex;
      flex-direction: row;
      align-items: center;
      img{
          width: 60px;
          margin-right: 20px;
      }
  }

  .no-data{
      display: flex;
      align-items: center;
      justify-content: center;
      padding-left: 40px;
      padding-right: 40px;
      padding-top: 20px;
      padding-bottom: 20px;
      width: 100%;
      border: 1px solid #d6c104;
      border-radius: 12px;
      margin-bottom: 5px;
  }

  .contenedor-buscar{
    width: 50%;
  }

  .button-search{
		height: 40px;
		width: auto;
		min-width: 150px;
		// margin: 10px;
		cursor: pointer;
		border-radius: 5px;
		border: 0px;
		background-color: #ffe600;
		color: #000; 
		font-size: 1rem;
		font-weight: 400;
		&:hover{
			background-color: #d3be03;
			font-weight: 600;
		}
	}

	.button-pagination{
		display: flex;
		align-items: center;
		justify-content: center;
		height: 35px;
		width: auto;
		min-width: 80px;
		margin: 10px;
		cursor: pointer;
		border-radius: 5px;
		border: 0px;
		background-color: #d6c104;
		color: #fff; 
		font-size: 1rem;
		font-weight: 400;
		padding: 10px;
		&:hover{
			background-color: #ebd301;
			// font-weight: 600;
		}
	}

	@media screen and (max-width: 992px) {

		.button-search{
			width: 100%;
			margin: 10px;
		}
	}

</style>