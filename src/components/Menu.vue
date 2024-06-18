<template>
  <nav class="nav-bar mb-5">
    <div class="container">
      <ul>
        <li :class="{ active: pathEs === '/' }">
          <router-link class="nav-link" active-class="active" to="/">
            Home
          </router-link>
        </li>
        <li :class="{ active: pathEs === '/pag1' }">
          <router-link class="nav-link" active-class="active" to="/pag1">
            Especialistas
          </router-link>
        </li>
        <li :class="{ active: pathEs === '/pag2' }">
          <router-link class="nav-link" active-class="active" to="/pag2">
            Productos
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { computed } from "vue";
import { useRoute } from "vue-router";

export default {
  name: "Menu",
  setup() {
    const route = useRoute();
    const pathEs = computed(() => {
      return route.path ;
    });

    return { pathEs };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.nav-bar {
  width: 100%;
  display: flex;
  align-items: center;
  background-color: #f8f9fa;
  color: #000;
  height: 60px;
  div {
    width: 100%;
    ul {
      margin-block-start: 0;
      margin-block-end: 0;
      margin-inline-start: 0px;
      margin-inline-end: 0px;
      padding-inline-start: 0px;
      list-style: none;
      display: flex;
      align-items: center;
      gap: 3rem;
      li {
        display: flex;
        align-items: center;
        height: 60px;
        cursor: pointer;
        &:hover {
          border-bottom: 2px solid gray;
        }
        a {
          text-decoration: none;
        }
        &.active {
          border-bottom: 2px solid gray;
        }
      }
    }
  }
}
</style>