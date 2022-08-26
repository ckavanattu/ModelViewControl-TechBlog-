const { Post } = require('../models');

const postData = [
    {
        title: 'Looking for Doggy DayCare',
        content: 'Hi all looking for someone to take care of my dog :)',
        user_id: 4
    },
    {
        title: 'Declared excommunicado, next steps?',
        content: 'TLDR: Management sucks, title says it all, what do I do now?',
        user_id: 2
    },
    {
        title: 'Need car detailing',
        content: 'Hi need recommendations for a good detailer to buff off buller holes!',
        user_id: 3
    },
    
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;