import Vuex from "vuex"
import vue from "vue"
import orderList from "./modules/orderList"
vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        orderList
    }
})