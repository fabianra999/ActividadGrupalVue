<template>
  <footer>
    <div class="contenedor-footer">
      <div class="container d-flex justify-content-between align-items-center">
        <h3>Desarrollo Web con Frameworks Front-end</h3>
        <div class="d-flex flex-column">
          <span>Ana María</span>
          <span>Fabian</span>
          <span>Juan David Cardona Carmona</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  // Your component's JavaScript logic goes here
};
</script>

<style lang="scss" scoped>
.contenedor-footer {
  display: flex;
  align-items: center;
  background-color: #414141;
  color: #fff;
  height: auto;
  /* position: absolute; */
  position: sticky;
  bottom: -40px;
  margin-bottom: 0;
  width: 100%;
  padding: 30px;
  h3, span {
    color: #fff;
  }
}
</style>