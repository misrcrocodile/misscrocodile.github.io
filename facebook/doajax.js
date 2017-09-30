function doAjax(res, callback) {
    if (window.stopDoAjax) return;
    console.log(res);
    var respData = res.data;
    callback(respData);
    if (res.paging) {
        if (!res.paging.next) return;
        $.get(res.paging.next, function(response) {
            doAjax(response, callback);
        });
    }
}