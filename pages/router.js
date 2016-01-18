/**
 * @description [路由存储]
 * @author [silence]
 * @date  16/1/18
 */
define(['mmHistory','mmRouter'], function() {

    var vm = avalon.define({
        $id: "layout",
        pageUrl: ''
    });

    function callback() {
        //去掉this.path值的第一个斜杠
        var path_tail = this.path.replace(/\//, "");
        //动态修改pageUrl属性值
        vm.pageUrl = "pages/"+path_tail+"/" + "view.html";
    }
    //劫持url hash并触发回调
    avalon.router.get("/*path", callback);
    //历史记录堆栈管理
    avalon.history.start();
    avalon.scan();
});