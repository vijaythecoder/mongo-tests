const assert = require('assert')
const User = require('../src/user')

let multipleUsers = [
    { name: 'vijay', score: 10 },
    { name: 'anusha', score: 10 },
    { name: 'pravallica', score: 10 },
    { name: 'kiran', score: 10 },
    { name: 'koushik', score: 10 },
    { name: 'priyanca', score: 10 }
]

describe('Updating Records', () => {
    let joe

    beforeEach((done) => {
        User.insertMany(multipleUsers)
            .then(users => {
                done()
            })
    })

    it('instance set and save', (done) => {
        User.updateMany({}, {score: 20})
            .then(() => done())
        
        User.find()
            .then(users => {
                done()
            })
    })
})