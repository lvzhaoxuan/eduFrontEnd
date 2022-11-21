const stulogined={idCard:"",password:""}
new Vue({
    el:'#app',
    data:{
            stu:{
                idCard:"",
                password:"",
            },
            sch:{
                schoolNo:"",
                password:"",
            },
            admin:{
                name:"",
                password:"",
            }
    },
    methods:{
        loginbtn(){
            if($('#sch').css('display')=='none' && $('#admin').css('display') == 'none'){
                this.stusubmit()
                console.log(1)
            }
            if($('#stu').css('display')=='none' && $('#admin').css('display') == 'none'){
                console.log(2)
                this.schsubmit()
            }
            if($('#sch').css('display')=='none' && $('#stu').css('display') == 'none'){
                this.adminsubmit()
            }
        },
        stusubmit(){
            if(this.stu.idCard==""){
                alert("身份证不能为空！")
                return
            }
            if(this.stu.password==""){
                alert("密码不能为空！")
                return
            }
            axios.post("http://localhost/stuLogin",this.stu,{timeout:5000}) //若5秒内未返回任何数据，提示超时
                .then(response=>{
                    // 注册事件
                    if(response.data.code==200){
                        alert("登录成功！")
                        localStorage.setItem('idCard',this.stu.idCard);
                        localStorage.setItem('stupw',this.stu.password);
                        window.location.href='main_stu.html'

                        
                    }
                    if(response.data.code==50001){
                        alert("登录失败！")
                    }
                })
                // 设置超时错误
                .catch(reason => {
                    alert("请求超时")
                    // stulogined.append()
                    
                    
                    
                })
        },
        schsubmit(){
            if(this.sch.schoolNo==""){
                alert("学校编号不能为空！")
                return
            }
            if(this.sch.password==""){
                alert("密码不能为空！")
                return
            }
            axios.post("http://localhost/schLogin",this.sch,{timeout:5000}) //若5秒内未返回任何数据，提示超时
                .then(response=>{
                    // 注册事件
                    if(response.data.code==200){
                        alert("登录成功！")
                        localStorage.setItem('schoolNo', this.sch.schoolNo);
                        localStorage.setItem("schpw",this.sch.password);
                        window.location.href='main_sch.html'
                    }
                    if(response.data.code==50001){
                        alert("登录失败！")
                    }
                })
                // 设置超时错误
                .catch(reason => {
                    alert("请求超时")
                    localStorage.setItem('schoolNo',this.sch.schoolNo)
                    localStorage.setItem('schpw',this.sch.password)
                    
                })
        },
        adminsubmit(){
            if(this.admin.name==""){
                alert("管理员名称不能为空！")
                return
            }
            if(this.admin.password==""){
                alert("密码不能为空！")
                return
            }
            axios.post("http://localhost/getStatus",this.admin,{timeout:5000}) //若5秒内未返回任何数据，提示超时
                .then(response=>{
                    // 注册事件
                    if(response.data.code==200){
                        alert("登录成功！")
                        window.location.href='main_admin.html'
                    }
                    if(response.data.code==50001){
                        alert("登录失败！")
                    }
                })
                // 设置超时错误
                .catch(reason => {
                    alert("请求超时")
                    
                })
        },
        
    }
})
