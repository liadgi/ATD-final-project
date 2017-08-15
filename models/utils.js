// NOTE : appearently, the entire logic should be used in pipeline instead of 
// mongoose, because of multiple calls to the db.
const limit = 10;
exports.sortByTime = function(query) {
    return query.sort({ "updateTime": -1, "creationTime": -1 });
}

exports.getPage = function(page, query) {
    return query.skip((page - 1) * limit).limit(limit);
}

exports.getPageExpression = function(page) {
    return [{ $skip: ((page - 1) * limit) } , { $limit : limit }];
}

// exports.getPage = function(page, query, callback) {
//     let limit = 10;
//     query.skip((page - 1) * limit).limit(limit).exec(callback);
// }

exports.getPageFromReq = function(req) {
    let page = req.query.page;
    if (page == undefined || page === '') return 1; // by default take the first page
    else return parseInt(page);
}