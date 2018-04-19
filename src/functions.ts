declare var $: any;

export function forEach (array: any, callback: any, scope?: any) {
    for (var i = 0; i < array.length; i++) {
        callback.call(scope, i, array[i]);
    }
};

export function sortUsingNestedText(parent: any, childSelector: string, keySelector: string) {
    var items = parent.children(childSelector).sort(function(a: any, b: any) {
        var vA = $(keySelector, a).text();
        var vB = $(keySelector, b).text();
        return (vA < vB) ? -1 : (vA > vB) ? 1 : 0;
    });
    
    parent.append(items);
}