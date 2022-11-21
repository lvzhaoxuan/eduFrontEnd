new Vue({
    el: '#app',
    data: {
        // 学生数据结构
        stu: {
            address: "", //区块链地址
            password: "",//密码
            name: "",    //学生姓名
            sex: "",     //性别
            birthDate: "",//出生日期
            idCard: "",  //身份证
            admDate: "", //入校日期
            graduDate: "",//毕业日期
            major: "",//专业
            eduType: "",//教育类型
        },
        // 学校数据结构
        sch: {
            address: "", //区块链地址
            password: "",//密码
            name: "",    //校长名字
            schoolNo: "",//学校编号
        }
    },
    methods: {
        // 提交按钮事件选择为哪个对象提交表单是学生还是学校
        registerbtn() {
            if ($('#sch').css("display") == "none") {
                this.stusubmit()
                // console.log(this)
            }
            if ($("#stu").css("display") == "none") {
                this.schsubmit()
            }
        },
        // 学生提交事件
        stusubmit() {
            // 判断提交空表单
            if (this.stu.address == "") {
                alert("地址不能为空！")
                return
            }
            if (this.stu.password == "") {
                alert("密码不能为空！")
                return
            }
            if (this.stu.name == "") {
                alert("姓名不能为空！")
                return
            }
            if (this.stu.sex == "") {
                alert("性别不能为空！")
                return
            }
            if (this.stu.birthDate == "") {
                alert("出生日期不能为空！")
                return
            }
            if (this.stu.admDate == "") {
                alert("入校日期不能为空！")
                return
            }
            if (this.stu.graduDate == "") {
                alert("毕业日期不能为空！")
                return
            }
            if (this.stu.major == "") {
                alert("专业不能为空")
                return
            }
            if (this.stu.eduType == "") {
                alert("教育类型不能为空")
            }
            // 学生注册事件
            axios.post("http://localhost/stuRegister", this.stu, { timeout: 5000 }) //若5秒内未返回任何数据，提示超时
                .then(response => {
                    // 注册事件
                    if (response.data.code == 200) {
                        alert("注册成功！")
                        window.location.href = 'login.html'
                        // setTimeout("window.location.href='../login.html'",5000)
                    }
                    if (response.data.code == 50001) {
                        alert("注册失败！")
                    }
                })
                // 设置超时错误
                .catch(reason => {
                    alert("请求超时")
                    // window.location.href='login.html'
                })
            // axios.post("http://localhost/schRegister",)
            // axios.post("http://localhost/stuRegister",this.user,())
            // axios.intercept.post   
        },
        // 学校提交事件
        schsubmit() {
            // 判断提交空表单
            if (this.sch.address == "") {
                alert("地址不能为空！")
                return
            }
            if (this.sch.password == "") {
                alert("密码不能为空！")
                return
            }
            if (this.sch.name == "") {
                alert("姓名不能为空！")
                return
            }
            if (this.sch.schoolNo == "") {
                alert("学校编号不能为空！")
                return
            }
            // 学生注册事件
            axios.post("http://localhost/schRegister", this.sch, { timeout: 5000 }) //若5秒内未返回任何数据，提示超时
                .then(response => {
                    // 注册事件
                    if (response.data.code == 200) {
                        alert("注册成功！")
                        window.location.href = 'login.html'
                        // setTimeout("window.location.href='../login.html'",5000)
                    }
                    if (response.data.code == 50001) {
                        alert("注册失败！")
                    }
                })
                // 设置超时错误
                .catch(reason => {
                    alert("请求超时")
                    // window.location.href='login.html'
                })
            // axios.post("http://localhost/schRegister",)
            // axios.post("http://localhost/stuRegister",this.user,())
            // axios.intercept.post   
        }
    }

})