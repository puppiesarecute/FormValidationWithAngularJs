angular.module("exampleApp").filter("skip", function () {
    //worker function
    return function (data, count) {
        if (count > data.length) {
            return [];
        }
        else if (count < 1) {
            return data;
        }
        else {
            //slice
            return data.slice(count);
        }
    };
}).filter("skipAndTake", function ($filter) {
    // worker function - using a filter within a filter
    return function (data, skipCount, takeCount) {
        var skippedData = $filter("skip")(data, skipCount);
        return $filter("limitTo")(skippedData, takeCount);
    }
})