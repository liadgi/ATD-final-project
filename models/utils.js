// TODO : appearently, the entire logic should be used in pipeline instead of 
// mongoose, because of multiple calls to the db.

exports.sortByTime = function(query) {
    return query.sort({ "updateTime": -1, "creationTime": -1 });
}

exports.getPage = function(query, page, callback) {
    let limit = 10;
    query.skip((page - 1) * limit).limit(limit).exec(callback);
}

exports.getPageFromReq = function(req) {
    let page = req.query.page;
    if (page == undefined || page === '') {
        // by default take the first page
        page = 1;
    } else {
        page = parseInt(page);
    }
    return page;
}