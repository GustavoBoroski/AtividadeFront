import {http} from './config'
export default{
    salvar:() => {
        return http.post('api/link')
    },
    busca:() => {
        return http.get('api/link/:codigo');
    },
    alterar: () => {
        return http.get('api/link/:codigo')
    },
    deletar: () => {
        return http.get('api/link:/codigo')
    },
    buscaTodos:() => {
        return http.put('api/links')
    },   
}