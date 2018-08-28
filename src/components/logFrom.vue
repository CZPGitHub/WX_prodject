<template>
    <div class="login-form">
        <div class="g-form">
            <div class="g-form-line">
                <span class="g-form-babel">用户名 :</span>
                <div class="g-form-input">
                    <input type="text" v-model="usernameModel" placeholder="请用户输入用户名">
                </div>
                <span class="g-form-error">{{userErrors.errorText}}</span>
            </div>
            <div class="g-form-line">
                <span class="g-form-babel">密码 ：</span>
                <div class="g-form-input">
                    <input type="password" v-model="passwordModel" placeholder="请用户输入密码">
                </div>
                <span class="g-from-error">{{passwordErrors.errorText}}</span>
            </div>
            <div class="g-form-line">
                <div class="g-form-btn">
                <a class="button" @click="onLogin">登录</a>
                </div>
                <span class="g-form-error">{{errorText}}</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            usernameModel:"",
            passwordModel:"",
            errorText:""
        }
    },
    computed:{
        userErrors () {
            let errorText,status
            if(!/@/g.test(this.usernameModel)){
                status = false
                errorText = "不包含@"
            }else{
                status = true
                errorText = ""
            }
            if(!this.userFlag){
                errorText = ""
                this.userFlag = true
            }
            return {
                errorText,
                status
            }
        },
        passwordErrors () {
            let errorText,status
            if(!/^\w{1,6}$/g.test(this.passwordModel)){
                status = false
                errorText = "密码不是1-6位"
            }else{
                status = true
                errorText = ""
            }
            if(!this.passwordFlag){
                errorText = ""
                this.passwordFlag = true
            }
            return {
                errorText,
                status
            }
        }
    },
    methods:{
        onLogin () {
            if(!this.userErrors.status||!this.passwordErrors.status){
                this.errorText = "登陆失败！"
            }else{
                this.errorText = "登陆成功"
                console.log("登陆成功")
                //调用ajax this.$http.post('').then((data)=>{
                    let {id,name}={
                        id:"001",
                        name:'用户01'
                    }
                    let data={id,name}
                    this.$emit('has-log',data)
                //},(error)=>{

                //})
            }
            console.log(this.usernameModel,this.passwordModel)
        }
    }
}
</script>

<style scoped>

</style>


