import axios from 'axios'

export default axios.create({
    baseURL:'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization:'Bearer q-sl7piBau-pi9UlLoSghHvvIlPW6HvXbF_9veZRYKzjcthII7RAb4dyUJo8LrZUQN0gPT-unV4-r2m41KfU8MaO8A1NqQ4A8A4tJgHTXQD4iIZSAp3el3qmsGajYnYx'
    }
})