const base = {
    get() {
        return {
            url : "http://localhost:8080/daxueshengjiuyefuwupingtai/",
            name: "daxueshengjiuyefuwupingtai",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/daxueshengjiuyefuwupingtai/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "大学生就业服务平台"
        } 
    }
}
export default base
