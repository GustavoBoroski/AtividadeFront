<template>
  <div id="menu" v-on="typeHeader()">
    <nav id="menu-h">
      <b-row id="menu-h">
        <b-col class="home">
          <router-link id="pageHome" to="/">
            <b-row>
              <b-col
                class="div-logo text-center"
                cols="col-6 col-sm-6 col-md-6"
              >
                <img class="logo mg-0" src="../assents/photo.png"/>
              </b-col>
              <b-col class="div-home" cols="col-6 col-sm-6 col-md-6">
                <h5 id="linkhome" class="mb-0 text-white font-600">Devnology</h5>
              </b-col>
            </b-row>
          </router-link>
        </b-col>
        <b-col cols="col-4 col-sm-4 col-md-4" class="content-center bar-search">
          <b-input-group size="sm" class="bar-search">
            <b-input-group-prepend is-text>
              <div class="cursor-pointer">
                <b-icon icon="search" v-on:click="realizaBusca()"></b-icon>
              </div>
            </b-input-group-prepend>
            <b-form-input
              type="search"
              name="search"
              placeholder="Buscar"
              v-model="busca"
              v-on:keyup.enter="realizaBusca()"
            >
            </b-form-input>
          </b-input-group>
        </b-col>
        <b-col class="login" cols="">
          <router-link id="pageLogin" to="/login">
            <div class="mb-0 text-white" v-show="view == true">Entrar</div>
          </router-link>
          <div v-show="view == false">
            <div>
              <b-dropdown
                size="lg"
                variant="link"
                toggle-class="text-decoration-none"
                no-caret
              >
                <template #button-content>
                  <img class="btn-drop" src="../assents/profile.png" />
                </template>
                <b-dropdown-item>Configurações</b-dropdown-item>
                <b-dropdown-item>Página do aluno</b-dropdown-item>
                <b-dropdown-item to="/courseInstructor"
                  >Página do instrutor</b-dropdown-item
                >
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item v-on:click="SignOut()">Logout</b-dropdown-item>
              </b-dropdown>
            </div>
          </div>
        </b-col>
      </b-row>
    </nav>
  </div>
</template>

<script>
import getters from "../modules/auth";
import { mapActions } from "vuex";

export default {
  name: "Menu",
  busca: "",
  data: () => ({
    view: Boolean,
  }),
  methods: {
    typeHeader() {
      if (localStorage.token != null) {
        this.view = false;
      }
      if (getters.isAuthenticated == false) {
        this.view = false;
      }
      if (localStorage.token == null) {
        this.view = true;
      }
    },
    ...mapActions("auth", ["ActionSignOut"]),
    async SignOut() {
      try {
        await this.ActionSignOut();
        this.view = true;
        location.reload();
      } catch (error) {
        console.log(error);
        alert(error);
      }
    },
    realizaBusca() {  
      this.$router.push({ name: "listCourseSearch", params: { string: this.busca } }).catch(location.reload());
    },
  },
};
</script>

<style scoped>
.btn-drop {
  padding: 0;
  margin: -23px;
  width: 34px;
}

#menu {
  width: 100% !important;
}

@media (max-width: 750px) {
  .bar-search {
    display: none !important;
  }

  .div-logo {
    padding-right: 50% !important;
  }
}

#menu-h {
  background-color: #533784;
  color: #fff !important;
  width: 100% !important;
  padding: 11px;
  position: fixed;
  top: 0;
  z-index: 10;
  box-shadow: 0 0 60px rgb(0 0 0 / 80%);
}

#formulario {
  background-color: #fff;
  margin: 0;
  text-align: center;
}

#pageHome {
  float: left;
}

.bar-search {
  font-family: "Open Sans", sans-serif;
}

.login {
  align-items: center;
  display: flex;
  justify-content: flex-end;
  font-weight: 500;
  margin-right: 26px;
}

.home {
  align-items: center;
  display: flex;
  justify-content: flex-start;
  font-weight: 500;
  margin-left: 15px;
  width: 40%;
}

.logo {
  width: 38px;
}

.div-logo {
  padding-right: 0;
}

.div-home {
  align-items: center;
  display: flex;
  padding-left: 0;
}
</style>
