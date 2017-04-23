export function forEach (array: any, callback: any, scope?: any) {
    for (var i = 0; i < array.length; i++) {
        callback.call(scope, i, array[i]);
    }
};
