import Vue from "vue"

//存放数据
const state = {
    orderList:[],
    params:{}
}

//用于页面调用state 的值
const getters = {
    getOrderList : function (state) {
        return state.orderList
    }
}

//可用于 异步 操作的动作  actions 在 vuex 里 不允许 做 赋值修改 ，只允许 mutations 做赋值修改
//commit 是用来调用 mutations 
// state 是 用来获取 状态集 里面的数据
const actions = {
    fetchOrderList ({commit,state}) {
        Vue.http.get('/api/getOrderList',state.params).then((res)=>{
            commit('changeOrderList',res.data.list)
        },(err)=>{

        })
    }
}

//用于 同步 的对状态的更改
// 第二个参数 是 actions 或 页面传入
const mutations = {
    changeOrderList (state,payload) {
        state.orderList = payload
    },
    updateparams (state,{key,val}) {
        state.params[key] = val
        console.log(key,val)
    }
}



export default {
    state,
    getters,
    actions,
    mutations
}