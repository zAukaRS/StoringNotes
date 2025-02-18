const app = new Vue({
    el: '#app',
    data() {
        return {
            columns: [
                {cards: JSON.parse(localStorage.getItem('column1')) || []},
                {cards: JSON.parse(localStorage.getItem('column2')) || []},
                {cards: JSON.parse(localStorage.getItem('column3')) || []},
            ],
            blockFirstColumn: false,
        };
    },
});