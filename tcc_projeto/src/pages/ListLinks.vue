<template>
  <div id="components">
    <Header />
    <div id="info-course">
      <b-container class="info-main" v-for="i in courses" :key="i.id">
        <b-row>
          <b-col class="col-md-6 pl-0 div-img" cols="12">
            <router-link :to="{ name: 'infoCourse', params: { id: i.id } }">
              <span class="img-container">
                <img class="img-fluid thumb" :src="i.imageUrl" />
              </span>
            </router-link>
          </b-col>
          <b-col class="text-side" cols="6">
            <b-row class="title">
              <h2 class="mb-2 font-bold">{{ i.title }}</h2>
            </b-row>
            <b-row class="instructor-name">
              <h6 class="mb-1">
                <span class="font-bold">Instrutor:</span> {{ i.instructorName }}
              </h6>
            </b-row>
            <b-row class="div-price">
              <b-col class="price">
                <h4 class="font-bold text-value text-purple">{{ i.value }}</h4>
              </b-col>
              <b-col class="buy">
                <router-link :to="{ name: 'infoCourse', params: { id: i.id } }">
                  <b-button>Detalhes</b-button>
                </router-link>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
import Course from "../services/courses";
export default {
  data() {
    return {
      value: 3.5,
      value_comment: 4.0,
      value2: 2.0,
      value_comment2: 4.0,
      courses: [],
    };
  },
  components: {
    Header,
  },
  mounted() {
    var busca = this.$route.params.string;
    Course.listCourseSearch(busca).then((apiResponse) => {
      this.courses = apiResponse.data;
    });
  },
};
</script>

<style scoped>
.buttonMore {
  margin-top: 60px;
  margin-bottom: 80px;
  justify-content: center;
  display: flex;
}

.more {
  padding-top: 14px !important;
  padding-bottom: 14px !important;
  padding-right: 8rem !important;
  padding-left: 8rem !important;
}

h2 {
  font-size: 1.7rem;
}

.info-main {
  color: #0e0e10;
  border-radius: 16px;
  background-color: #f7f7f8;
  margin-top: 32px;
  box-shadow: 0 0 40px rgb(0 0 0 / 20%);
}

.description {
  color: #0e0e10;
  border-radius: 16px;
  background-color: #f7f7f8;
  margin-top: 30px;
  padding: 40px !important;
  box-shadow: 0 0 40px rgb(0 0 0 / 20%);
}

.b-rating-star {
  color: /* #ffc400;  */ #ffd900;
  border: none;
}

.b-rating-value {
  color: #0e0e10;
}

.category {
  padding-left: 2px;
}

.duration {
  padding-left: 2px;
}

.instructor-name {
  padding-left: 2px;
}

.mt-price {
  margin-top: 2.5rem;
}

.buy {
  text-align: center !important;
  border: none !important;
}

.btn {
  padding: 0.7rem;
  border: 0px solid transparent !important;
  padding-right: 3rem;
  padding-left: 3rem;
  border-radius: 12px !important;
}

.btn:hover {
  background-color: #772ce8 !important;
}

.btn:active {
  border: none !important;
}

.comments-ratings {
  color: #0e0e10;
  border-radius: 16px;
  background-color: #f7f7f8;
  margin-top: 30px;
  margin-bottom: 30px;
  padding: 40px !important;
  box-shadow: 0 0 40px rgb(0 0 0 / 20%);
}

#rating-main {
  background-color: #f7f7f8 !important;
  pointer-events: none;
  border: none !important;
}

.comment {
  padding-bottom: 15px;
}

.title-cr {
  padding-bottom: 15px;
}

.text-side {
  padding: 18px;
}

.title-course {
  font-weight: bold;
  font-size: 1.75rem;
  margin-bottom: 3px;
}

.thumb {
  border-radius: 13px 0px 0px 13px !important;
  height: 230px;
}

.mb {
  margin-bottom: 1.6rem;
}

h6 {
  font-size: 1.05rem;
}

.price {
  margin-left: 6px;
}

.div-price {
  align-items: center;
  display: flex;
  margin-top: 60px;
}

.text-price {
  font-weight: bold;
  font-size: 1.6rem;
}

.rating {
  color: #e69819 !important;
}

.rating-comment {
  padding-left: 7px;
}

.name-comment {
  font-weight: bold;
  font-size: 1.05rem;
}

.p-description {
  font-size: 1.2rem;
}

@media (max-width: 750px) {
  .div-img {
    padding-right: 0px;
    margin-top: 40px;
  }
}

.mb-info {
  margin-bottom: 7px !important;
}

#info-course {
  margin-top: 105px;
}

.img-container {
  cursor: pointer;
}

.img-container:hover img {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

.components {
  width: 80%;
}

.container {
  width: 68%;
}

@media (max-width: 750px) {
  .container {
    width: 100% !important;
  }
}

@media (min-width: 1600px) {
  .container {
    width: 52% !important;
  }
}

@media (min-width: 1920px) {
  .container {
    width: 45% !important;
  }
}

img {
  box-shadow: 0 0 40px rgb(0 0 0 / 15%) !important;
  -o-object-fit: cover !important;
  object-fit: cover !important;
  box-sizing: border-box !important;
  width: 100% !important;
  height: 100%;
}

h2 {
  font-size: 1.5rem;
}

.text-value {
  font-size: 1.65rem;
}
</style>
