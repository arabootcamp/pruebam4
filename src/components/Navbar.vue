<template>
  <div>
    <b-navbar toggleable="md" type="dark" variant="dark">
      <b-container>
        <b-navbar-brand href="#">
          <b-icon icon="headset" aria-hidden="true"></b-icon>
          <span>Games Opinion</span>
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ms-auto">

            <b-nav-item v-for="el of links" :key="el.id" :to="{name:el.path}" :id="el.id" exact-active-class="active">
              <b-icon :icon="el.icon" aria-hidden="true"></b-icon>
              {{el.name}}
            </b-nav-item>

          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
  </div>
</template>

<script>
  import {
    BContainer,
    BNavbar,
    BNavbarBrand,
    BNavbarToggle,
    BCollapse,
    BNavbarNav,
    BNavItem,
    BIcon
  } from "bootstrap-vue"

  export default {
    name: "Navbar",
    components: {
      BContainer,
      BNavbar,
      BNavbarBrand,
      BNavbarToggle,
      BCollapse,
      BNavbarNav,
      BNavItem,
      BIcon
    },
    data() {
      return {
        links: [{
            id: "001home",
            path: "Home",
            name: "Home",
            icon:'house-door-fill'
          },
          {
            id: "002opinions",
            path: "Opinions",
            name: "Opiniones",
            icon: 'people-fill'
          },
          {
            id: "003administration",
            path: "OpinionsTable",
            name: "Administración",
            icon:'nut-fill'
          },
        ],
      };
    }
  };
</script>