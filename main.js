const Xray = require('x-ray')
const x = Xray()

// x('https://devdegree.ca/', 'div#shopify-section-header', 'div.announcement-bar@html')(function(err, data){
//     const trimmedData = data.replace(/\s+/g,' ').trim()
//     console.log(trimmedData)
//     // console.log(typeof data)
//     // console.log(data)
// })

x('https://devdegree.ca/', {
    title: 'title',
    announcementBar: 'div.announcement-bar'
})(function(err, data){
    // console.log(typeof data)
    console.log(data)
})