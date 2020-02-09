import '@babel/polyfill';
import './advanced-6';
import Vue from 'vue/dist/vue.esm.js';




document.addEventListener('DOMContentLoaded', () => {
    var app5 = new Vue({
        el: '#app',
        delimiters: ['${', '}'],
        data: {
            todos: [
                { text: 'Learn JavaScript' },
                { text: 'Learn Vue' },
                { text: 'Learn Html' },
                { text: 'Learn Css' },
                { text: 'Learn Node.js' }
            ]
        },
        methods: {
            removeItem(currentEl) {
                this.todos = this.todos.filter(function(task, index) {
                    return index !== currentEl;
                })
            }
        }
    });

    var vue2 = new Vue({
        el: '#app2',
        delimiters: ['${', '}'],
        data: {
            taskList: [
                { text: '1: Learn JavaScript' },
                { text: '2: Learn Vue' },
                { text: '3: Learn Html' },
                { text: '4: Learn Css' },
                { text: '5: Learn Node.js' },
            ],
        },
        methods: {
            randomTask() {
                this.taskList.sort(function(a, b) {
                    return 0.5 - Math.random();
                })
            }
        }
    })

});