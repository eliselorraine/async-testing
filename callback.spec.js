const assert = require('assert');

describe('async testing', () => {

    let answer = false;
    
    function trueAnswer(answer, callback) {
        setTimeout(() => {
            answer = true;
            callback(answer);
        }, 1000)
    }

    describe('the trueAnswer function', () => {
        it('changes answer to true', (done) => {
            trueAnswer(answer, result => {
                assert.equal(result, true);
                done();
            })
        })
    })

    function addAsync(a, b, callback) {
        setTimeout(() => {
            const result = a + b;
            callback(result);
        }, 1000)
    }

    describe('add async function', () => {
        it('should add two numbers asynchronously', (done) => {
            addAsync(10, 5, result => {
                assert.equal(result, 15);
                done();
            })
        })
    })

    const myPromise = new Promise((resolve) => {
        setTimeout(() => {
            answer = true;
            resolve(answer);
        }, 1000);
    })

    describe('how to check promises', () => {
        it('promises to change answer to true', () => {
            return myPromise
            .then(() => assert.equal(answer, true));
        })
    })

    describe('testing my promise with async await', () => {
        it('still promises to change the answer to true', async () => {
            const result = await myPromise;
            assert.equal(result, true);
        })
    })

    async function getFoo() {
        return 'foo';
    }

    describe('how to check with async await', () => {
        it('async await changes our answer to true', async () => {
            const result = await getFoo();
            assert.equal(result, 'foo');
        })
    })

    const anotherAsync = async (a, b) => {
        return answer = a + b;
    }

    describe('anotherAsync function', () => {
        it('should add two numbers', async () => {
            const result = await anotherAsync(4, 8);
            assert.equal(result, 12);
        })
    })
})
