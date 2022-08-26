
const { Comment } = require('../models')

const commentData = [
    {
        comment_text: 'This is a test comment',
        user_id: 4,
        post_id: 1
    },
    {
        comment_text: 'This is a test comment',
        user_id: 2,
        post_id: 3
    },
    {
        comment_text: 'This is a test comment',
        user_id: 1,
        post_id: 2
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;