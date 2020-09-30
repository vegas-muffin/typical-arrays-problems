exports.min = function min(array) {
    let c = "";
    if (array === undefined || array.length === 0) {
        return 0;
    } else if (array.length > 0) {
        for (let i = 0; i < array.length - 1; i++) {
            for (let j = i + 1; j < array.length; j++) {
                if (array[i] < array[j]) {
                    c = array[i];
                    array[i] = array[j];
                    array[j] = c;
                }
            }
        }
    }
    return array[array.length - 1];
};

exports.max = function max(array) {
    let c = "";
    if (array === undefined || array.length === 0) {
        return 0;
    } else if (array.length > 0) {
        for (let i = 0; i < array.length - 1; i++) {
            for (let j = i + 1; j < array.length; j++) {
                if (array[i] > array[j]) {
                    c = array[i];
                    array[i] = array[j];
                    array[j] = c;
                }
            }
        }
    }
    return array[array.length - 1];
};

exports.avg = function avg(array) {
    let c = 0;
    if (array === undefined || array.length === 0) {
        return 0;
    } else if (array.length > 0) {
        for (let i = 0; i < array.length; i++) {
            c = c + array[i];
        }
        return c / array.length;
    }
};
