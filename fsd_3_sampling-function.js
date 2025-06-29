
function sampler(fn, count, context) {
    let internal_count = 0;

    return function (...args) {

        let lastArgs = args;
        context = this ?? context;

        if (++internal_count !== count) {
            return
        }
        fn.apply(context, args)
        internal_count = 0;
    }

}

const sample = function () {
    console.log("aakash")
}

const sampledSample = sampler(sample, 4);
console.log("1")
sampledSample();
console.log("2")
sampledSample();
console.log("3")
sampledSample();
console.log("4")
sampledSample();
console.log("5")
sampledSample();
console.log("6")
sampledSample();
console.log("7")
sampledSample();
console.log("8")
sampledSample();
