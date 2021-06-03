console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', () => {
    images()

    function images(){
        debugger
        return fetch('https://dog.ceo/api/breeds/image/random/4')
            .then(resp => resp.json())
            .then(json => console.log(results))
    }

    function dogBreed(){
        return fetch('https://dog.ceo/api/breeds/list/all')
    }
})