console.log('Client side javascript file is loaded')
console.log("this work is done by Mohit shree vathsan")
// // fetch('http://localhost:3000/weather?address=boston').then((response) => {
// //     response.json().then((data) => {
// //         if (data.error) {
// //             console.log(data.error)
// //         } else {
// //             console.log(data.location)
// //             console.log(data.forecast)
// //         }
// //     })
// // })
// const weatherForm = document.querySelector('form')

//     // weatherForm.addEventListener('submit', (e) => {
//     //     //console.log('testing')
//     //     e.preventDefault()
//     //     console.log('testing')
//     // })

// const search = document.querySelector('input')


// weatherForm.addEventListener('submit', (e) => {
//     e.preventDefault()

//     const location = search.value
//     // console.log(location)

//     fetch('http://localhost:3000/weather?address=' + location).then((response) => {
//         response.json().then((data) => {
//             if (data.error) {
//                 console.log(data.error)
//             } else {
//                 console.log(data.location)
//                 console.log(data.forecast)
//             }
//         })
//     })
// })
const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
// const messageOne = document.querySelector('p')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''

    fetch('/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                messageOne.textContent = data.error
            } else {
                messageOne.textContent = data.location
                messageTwo.textContent = data.forecast
            }
        })
    })
})
