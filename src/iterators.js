//Creating iterators
function makeRangeIterator(start = 0, end = Infinity, counter = 1) {
    let nextIndex = start;
    let iterationCount = 0;

    const rangeIterator = {
        next: function () {
            let result;
            if (nextIndex < end) {
                result = { value: nextIndex, done: false };
                nextIndex += counter;
                iterationCount++;
                return result;
            }
            return { value: iterationCount, done: true };
        }
    };
    return rangeIterator;
}

const iterator = makeRangeIterator(1, 20, 3);

let result = iterator.next();
while (!result.done) {
    console.log(result.value);
    result = iterator.next();
}

console.log("Iterated over sequence of size: ", result.value);