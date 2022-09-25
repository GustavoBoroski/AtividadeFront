<template>
  <div id="components">
    <Header2 />
    <b-container class="cards">
      <div>
        <b-row>
          <h2 class="form-title text-black">Vamos cadastrar?</h2>
          <p class="form-phrase text-black">
            Mais alguns passos e seu site ou blog favorito já vai estar na nossa plataforma!
          </p>
        </b-row>

        <b-form @submit.prevent="salvar()" v-on:submit.prevent="submitForm" v-if="show">
          <b-row>
            <b-col class="col-12 col-sm-12 col-md-12">
              <b-form-group
                class="pad-top font-600"
                id="nsite"
                label="Nome do site:"
                label-for="Nsite"
              >
                <b-form-input
                  id="nsite"
                  v-model="form.nsite"
                  type="text"
                  placeholder="Ex: TecMundo"
                ></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col class="col-12 col-sm-12 col-md-12">
              <b-form-group
                class="pad-top font-600"
                id="link"
                label="Insira o link aqui:"
                label-for="link"
              >
                <b-form-input
                  id="link"
                  v-model="form.link"
                  type="link"
                  placeholder="Ex: https://www.tecmundo.com.br/software/248349-veja-4-principais-diferencas-entre-ios-16-ios-15.htm"
                ></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col class="col-12 col-sm-12 col-md-6">
              <b-form-group
                class="pad-top font-600"
                id="name"
                label="Primeiro nome do autor:"
                label-for="name"
              >
                <b-form-input
                  id="name"
                  v-model="form.name"
                  placeholder="Ex: Cezar"
                ></b-form-input>
              </b-form-group>
            </b-col>
            <b-col class="col-12 col-sm-12 col-md-6">
              <b-form-group
                class="pad-top font-600"
                id="lname" 
                label="Último nome do autor:"
                label-for="lname"
              >
                <b-form-input
                  id="lname"
                  v-model="form.lastName"
                  placeholder="Ex: Joukovski"
                ></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col class="col-12 col-sm-12 col-md-6">
              <b-form-group
                class="pad-top font-600"
                id="date"
                label="Data de publicação:"
                label-for="date"
              >
                <b-form-input
                  id="date"
                  v-model="form.datePost"
                  type="date"
                  placeholder=""
                ></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
          
          <p v-if="errors.length">
                <ul>
                    <li v-for="error in errors" :key="error">{{error}} </li>
                </ul>
          </p>
          <b-row class="content-center" v-show="btnSubmit">
            <b-button type="submit" class="btn content-center">
              Cadastrar
            </b-button>
          </b-row>
          <div class="spinner" v-show="spinner">
              <vue-simple-spinner size="medium" message="Carregando..."></vue-simple-spinner>
          </div>
        </b-form>
      </div>
    </b-container>
  </div>
</template>

<script>
import Header2 from "../components/Header2";
import VueSimpleSpinner from 'vue-simple-spinner';
import User from "../services/user";
export default {
  data() {
    return {
      errors: [],
        form:{
        name: "",
        lastName: "",
        nsite: "",
        link: "",
        datePost: null,
        },
        show: true,
        spinner: false,
        btnSubmit: true,
      }
      
},
  
  methods: {
      
    onSubmit(event) {
      event.preventDefault();
    },
    onReset(event) {
      event.preventDefault();
      this.form.name = "";
      this.form.lastName = "";
      this.form.nsite = "";
      this.form.link = "";
      this.form.datePost = "";
      this.form.checked = [];
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
    submitForm: function(e) {
      this.errors = [];
      
      if (!this.form.name) {
        this.errors.push("O primeiro nome do autor é obrigatório.");
      }
      
      if (!this.form.lastName) {
        this.errors.push("O último nome do autor é obrigatório.");
      }

      if (!this.form.nsite) {
        this.errors.push('O nome do site é obrigatório.');
      }

      if (!this.form.datePost) {
        this.errors.push("A data de publicação é obrigatória.");
      } else if (!this.validDate(this.form.datePost)) {
        this.errors.push("A data de publicação não é válida.");
      }

      if (!this.errors.length) {
        return true;
      }

      e.preventDefault();
    },
    validDate: function (datePost) {
      let today = new Date();
      today = new Date(today.getTime() - (today.getTimezoneOffset() * 60000)).toISOString();
      let parts = today.split('T')
      today = (parts[0]);
      return datePost <= today ? true : false
    },
    salvar(){
      let result = this.submitForm();
      //começo do spinner
      this.btnSubmit = false;
      this.spinner = true;
      if (result){
        // eslint-disable-next-line no-unused-vars
        User.salvar(this.form).then(apiResponse => {
        this.spinner = false;
        this.$router.push({name:'login'})
      })
      .catch(error => this.errors.push(error.response.data.Message));
      this.spinner = false;
      this.btnSubmit = true;
      }
    }
      
  },
  mounted(){

  },
  components: {
    Header2,
    VueSimpleSpinner,
  },
};
</script>

<style scoped>

#date {
  width: 80% !important;
}

.cards {
  margin-top: 48px !important;
  width: 50% !important;
  padding: 40px !important;
  margin-bottom: 80px;
}

@media (max-width: 770px)
{
  .cards {
    width: 100% !important;
  }
}

@media (min-width: 1600px)
{
  .cards {
    width: 40% !important;
  }
}

@media (min-width: 1920px)
{
  .cards {
    width: 35% !important;
  }
}

.btn-secondary {
  border-color: #8351dc !important;
}

.form-title {
  text-align: center;
}

.form-phrase {
  text-align: center;
  margin-bottom: 30px;
}

.form-control {
  width: 100% !important;
}

.pad-top {
  padding-top: 3% !important;
}

.btn {
  margin-top: 6% !important;
  width: 50% !important;
}

li:first-child{
  margin-top: 2% !important;
}

li{
  color: red !important;
}

.restpass{
  font-size: small !important;
  color: #6A7376 !important;
}

.pad-top-pass{
  padding-top: 5% !important;
}

.restpass{
  margin-bottom: 0% !important;
}

.form-group{
  margin-bottom: 10px;
}

</style>
