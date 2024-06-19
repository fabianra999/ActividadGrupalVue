<template>
  <div class="main-content">
    <div class="content">
        <h1>Shopping
            <br>Virtual
        </h1>
        <div id="btn1"><button>Explorar</button></div>
    </div>
</div>

<!-- card1 -->
<div class="container">
    <h2 class="text-center" style="padding-top: 100px;">Ventajas de comprar con nosotros</h2>
    <div class="row" style="margin-top: 50px;">
        <div class="col-md-4 py-3 py-md-0">
            <div class="card">
                <img src="../assets/mujer.jpg" alt="" class="card image-top">
                <div class="card-body">
                    <h5 class="card-title text-center">COMPRA FÁCIL</h5>
                    <p class="text-center">Navega y selecciona tus productos favoritos sin complicaciones.</p>
                </div>
            </div>
        </div>
        <div class="col-md-4 py-3 py-md-0">
            <div class="card">
                <img src="../assets/carrito.jpg" alt="" class="card image-top">
                <div class="card-body">
                    <h5 class="card-title text-center">PAGO SEGURO</h5>
                    <p class="text-center">Realiza tus transacciones con total tranquilidad.</p>
                </div>
            </div>
        </div>
        <div class="col-md-4 py-3 py-md-0">
            <div class="card">
                <img src="../assets/entrega.jpg" alt="" class="card image-top">
                <div class="card-body">
                    <h5 class="card-title text-center">ENVÍO RÁPIDO</h5>
                    <p class="text-center">Ofrecemos opciones de envío expreso para que disfrutes de tus productos lo
                        antes posible.</p>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- card1 -->

<!-- card2 -->
<div class="container mb-5">
    <h2 class="text-center" style="padding-top: 100px;">Secciones destacadas</h2>
    <div class="row" style="margin-top: 50px;">
        <div class="col-md-4 py-3 py-md-0">
            <div class="card" id="tpc">
                <img src="../assets/deportes.jpg" alt="" class="card image-top">
                <div class="card-img-overlay">
                    <h4 class="card-title">Deportiva</h4>
                    <div id="btn2"><button>Ver más</button></div>
                </div>
            </div>
        </div>
        <div class="col-md-4 py-3 py-md-0">
            <div class="card" id="tpc">
                <img src="../assets/tecnologia.jpg" alt="" class="card image-top">
                <div class="card-img-overlay">
                    <h4 class="card-title">Tecnología</h4>
                    <div id="btn2"><button>Ver más</button></div>
                </div>
            </div>
        </div>
        <div class="col-md-4 py-3 py-md-0">
            <div class="card" id="tpc">
                <img src="../assets/ropa.jpg" alt="" class="card image-top">
                <div class="card-img-overlay">
                    <h4 class="card-title">Ropa y accesorios</h4>
                    <div id="btn2"><button>Ver más</button></div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- card2 -->
<!-- Button trigger modal -->
<button id="boton" ref="boton" type="button" class="btn btn-primary visually-hidden" data-bs-toggle="modal"
    data-bs-target="#staticBackdrop">
    Launch static backdrop modal
</button>

<!-- Modal --> 
<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
    aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="staticBackdropLabel">Regístrate</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div class="py-3 py-md-0">
                    <div action="#">
                        <div class="mb-3 mt-3">
                            <input type="text" class="form-control" id="name" placeholder="Ingresa tu Nombre"
                                v-model="name" required>
                        </div>
                        <div class="mb-3 mt-3">
                            <input type="email" class="form-control" id="email" placeholder="Ingresa tu Email"
                                v-model="email" required>
                        </div>

                        <div class="mb-3 mt-3">
                            <input type="number" class="form-control" id="number" placeholder="Ingresa tu Número"
                                v-model="phone" required>
                        </div>
                        <br>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                <div id="btn1" class="order-btn" data-bs-dismiss="modal" @click="saveData()"><button>Guardar</button>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
    name: "",
    email: "",
    phone: "",
    }
  },
  mounted() {
    this.$refs.boton.click()
    //document.getElementById("boton").click()
  },
  methods: {
    saveData() {
      document.getElementById("emailHeader").textContent = this.email
    }
  }
}
</script>

<style lang="scss">
.main-content {
    display: flex;
    align-items: center;
    height: 60vh;
    background: url(../assets/banner.jpg) 70% center/cover;
    border-radius: 12px;
}

/* Content */
.content {
    margin-top: 100px;
    margin-left: 5%;
}

.content h1 {
    font-size: 5vw !important;
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    text-align: left !important;

}

.card {
    border: 1px solid #c9c9c9;
    border-radius: 12px;
}

#btn1 button {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 37.6px;
    width: auto;
    min-width: 90px;
    cursor: pointer;
    border-radius: 5px;
    border: 0px;
    background-color: #ebd301;
    color: #fff;
    font-size: 1.2rem;
    font-weight: 400;
    padding: 10px;

    &:hover {
        background-color: #ffe600;
        // font-weight: 600;
    }
}

@media screen and (max-width: 420px) {
    .content h1 {
        font-size: 30px;
        font-family: 'Montserrat', sans-serif;
    }
}

/* Content */


/* Card1 */

#btn2 button {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 35px;
    width: auto;
    min-width: 80px;
    cursor: pointer;
    border-radius: 5px;
    border: 0px;
    background-color: #67697C;
    color: #fff;
    font-size: 1rem;
    font-weight: 400;
    padding: 10px;

    &:hover {
        background-color: #ebd301;
        // font-weight: 600;
    }
}

.container h3 {
    font-weight: bold;
    font-size: 30px;
    font-family: 'Montserrat', sans-serif;
    text-align: center;
    margin: 0;
}

/* Card1 */

/* Card2 */
#tpc {
    border: 1px solid #d6c104;
    border-radius: 12px;
    transition: transform 0.5s ease;
    cursor: pointer;
}

#tpc:hover {
    transform: translateY(-10px);
}

/* Card2 */

/* Card3 */
#c p {
    font-weight: bold;
    font-family: 'Montserrat', sans-serif;
}

.container h1 {
    font-weight: bold;
    font-size: 30px;
    font-family: 'Montserrat', sans-serif;
    text-align: center;
    margin: 0;
}

@media screen and (max-width: 895px) {
    #btn3 button {
        width: 100px;
    }
}

/* Card3 */


/* Contact Section Start */
.contact {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 100px 11% 100px;
}

.contact .col-md-5 {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #ececec;
    border-radius: 10px;
    color: white;
}

.contact h2 {
    font-weight: bold;
    font-size: 30px;
    font-family: 'Montserrat', sans-serif;
    text-align: center;
    margin-bottom: 30px;
}

.contact h3 {
    margin-top: 30px;
}

.contact i span {
    margin-left: 10px;
    cursor: pointer;
}

/* Contact Section End */
</style>