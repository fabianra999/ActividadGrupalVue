<template>
  <header>
    <div class="contenedor-header">
      <div class="container d-flex justify-content-between align-items-center">
        <h1>Actividad 3</h1>
      <div class="d-flex align-items-end flex-column">
        <span>Universidad internacional de la Rioja (Unir)</span>
        <span id="emailHeader"></span>
      </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang="scss" scoped>
.contenedor-header {
  display: flex;
  align-items: center;
  background-color: #414141;
  color: #fff;
  height: 80px;
  h1,
  span {
    color: #fff;
  }
}
</style>
