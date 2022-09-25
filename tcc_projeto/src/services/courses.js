import {http} from './config'
export default{
    infoCourse:(id) => {
        return http.get('course?id=' + id );
    },
    homeLoadData:() => {
        return http.get('home/load-data');
    },
    registerUser: (form) => {
        return http.post('account/register-user', form);
    },
    salvar:(course) => {
        return http.post('course/register-course', course);
    },
    cateGame:() => {
        return http.get('instructor/load-register-course');
    },
    listCourse: (id) => {
        return http.get('course/list-by-game?gameId=' + id)
    },
    listCourseSearch: (busca) => {
        return http.get('course/search?busca=' + busca)
    },
    DisableCourse: (id) => {
        return http.post('course/disableCourse?courseId=' + id)
    }
}