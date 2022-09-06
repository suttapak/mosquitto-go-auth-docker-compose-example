const { user } = require('./user-data')

/**
 * 
 */
const canSub = (username, topic) => {
    const u = user.find((v) => v.username === username)
    if (!u) {
        return false
    }
    return sliceTopic(u.canSub)[0] === sliceTopic(topic)[0]
}

const canPub = (username, topic) => {
    const u = user.find((v) => v.username === username)
    if (!u) {
        return false
    }
    return sliceTopic(u.canSub)[0] === sliceTopic(topic)[0]
}


/**
 * 
 * @param {string} topic 
 */
const sliceTopic = (topic) => {
    return topic.split('/')
}

module.exports = { canPub: canPub, canSub: canSub }