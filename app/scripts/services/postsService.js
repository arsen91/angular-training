'use strict';

angular.module('angularTrainingApp').service('postsService', function() {
		var postsArr = [
			{
                author: 'John Doe',
                title: 'Great post from Doe',
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae quaerat soluta quisquam eos fugit similique ea laudantium ratione corporis quo aut accusantium reiciendis dignissimos id impedit, libero facilis deserunt sint?',
                time: new Date()
            },
            {
                author: 'Jack Nicklson',
                title: 'Great post from Nicklson',
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae quaerat soluta quisquam eos fugit similique ea laudantium ratione corporis quo aut accusantium reiciendis dignissimos id impedit, libero facilis deserunt sint?',
                time: new Date()
            },
            {
                author: 'Josh Hartnett',
                title: 'Great post from Hartnett',
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae quaerat soluta quisquam eos fugit similique ea laudantium ratione corporis quo aut accusantium reiciendis dignissimos id impedit, libero facilis deserunt sint?',
                time: new Date()
            },
            {
                author: 'Clint Eastwood',
                title: 'Great post from Eastwood',
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae quaerat soluta quisquam eos fugit similique ea laudantium ratione corporis quo aut accusantium reiciendis dignissimos id impedit, libero facilis deserunt sint?',
                time: new Date()
            },
            {
                author: 'John Smith',
                title: 'Great post from Mr.Smith',
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae quaerat soluta quisquam eos fugit similique ea laudantium ratione corporis quo aut accusantium reiciendis dignissimos id impedit, libero facilis deserunt sint?',
                time: new Date()
            },
            {
                author: 'Jane Smith',
                title: 'Great post from Mrs.Smith',
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae quaerat soluta quisquam eos fugit similique ea laudantium ratione corporis quo aut accusantium reiciendis dignissimos id impedit, libero facilis deserunt sint?',
                time: new Date()
            },
            {
                author: 'Barak Obama',
                title: 'Great post from Obama',
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae quaerat soluta quisquam eos fugit similique ea laudantium ratione corporis quo aut accusantium reiciendis dignissimos id impedit, libero facilis deserunt sint?',
                time: new Date()
            }
		];

        this.getPosts = function() {
            return postsArr;
        };

        this.addPost = function(post) {
            post.time = new Date();
            postsArr.unshift(post);
        };
});