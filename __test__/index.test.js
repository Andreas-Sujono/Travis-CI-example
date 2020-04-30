const request = require('supertest');
const app = require('../app'); //reference to you app.js file


test('Testing jest', () => {
    const sum = (a,b) => a+b
    expect(sum(2,3)).toBe(6)
})

test('GET / ', (done) => {
    request(app)
        .get('/')
        .then( res => {
            expect(res.statusCode).toBe(200)
            console.log(res.text)
            done()
        })
})