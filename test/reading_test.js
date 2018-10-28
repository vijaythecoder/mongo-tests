const assert = require('assert')
const User = require('../src/user')

describe('Reading users out of the database', () => {
    let joe

    beforeEach((done) => {
        joe = new User({
            name: 'Joe',
            score: 20
        })

        joe.save()
            .then(() => {
                done()
            })
    })

    it('finds all users with the name of Joe', (done) => {
        User.find({ name: 'Joe' })
            .then(user => {
                assert(user[0]._id.toString() === joe._id.toString())
                done()
            })
    })
    
    it('finds a user with a particular id', (done) => {
        User.findOne({ _id: joe._id })
            .then(user => {
                assert(user.name === joe.name)
                done()
            })
            
    })


})