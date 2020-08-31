let noteObjArray=fetchStoredData()                
const filter={
    searchStr:'',
    sortBy:''
}
displayNote(filter)
 

document.querySelector('#add-new-note').addEventListener('click',function(event)
{
    //event.preventDefault()
    const timestamp=moment().valueOf()
    const id=uuidv4()
    noteObjArray.push({
        title:'',
        text:'',
        id:id,
        createdAt:timestamp,
        updatedAt:timestamp
    })
    location.assign(`/edit.html#${id}`) // this is how "create note" button will pass the id of newly created note while clicking "create note"
    saveLocalStorage()
    displayNote(filter)
    
})

//live search
document.querySelector('#live-search-bar').addEventListener('input',function(event)
{
    filter.searchStr=event.target.value
    displayNote(filter)
})

document.querySelector('#drop-down').addEventListener('change',function(e){
   filter.sortBy=e.target.value
    displayNote(filter)
})

window.addEventListener('storage',function(e){
    if(e.key==='noteObjArray')
    {
    noteObjArray=JSON.parse(e.newValue)   // noteObjArray=fetchStoredData() will also work but to see some thing new we used e.newValue , as newValue holds the updated data(array of objects of notes) in string form  
    displayNote(filter)
    }
})




// Unix Epoch - January 1st 1970 00:00:00

// const now = new Date()
// const timestamp = now.getTime()

// const myDate = new Date(timestamp)
// console.log(myDate.getFullYear())

// // console.log(`Year: ${now.getFullYear()}`)
// // console.log(`Month: ${now.getMonth()}`)
// // console.log(`Day of month: ${now.getDate()}`)
// // console.log(`Hour: ${now.getHours()}`)
// // console.log(`Minute: ${now.getMinutes()}`)
// // console.log(`Seconds: ${now.getSeconds()}`)

// // 1. Create two dates in the past (use string for Date)
// // 2. Get timestamps for both
// // 3. Figure out which is first and print its time (use toString)

// const dateOne = new Date('March 1 2017 12:00:00')
// const dateTwo = new Date()
// const dateOneTimestamp = dateOne.getTime()
// const dateTwoTimestamp = dateTwo.getTime()

// if (dateOneTimestamp < dateTwoTimestamp) {
//     console.log(dateOne.toString())
// } else if (dateTwoTimestamp < dateOneTimestamp) {
//     console.log(dateTwo.toString())
// }

//  ====  MOMENTS - THIRD PARTY LIB  ===  //

// const now = moment()
// console.log(now.format('dddd, MMMM Do YYYY, h:mm:ss a'))
// now.add(2,'years').subtract(2,'month')
// console.log(now.toString())
// console.log(now.fromNow())
// const nowTimestamp = now.valueOf()  //--gives no of miliseconds
// console.log(nowTimestamp)
// console.log(moment(nowTimestamp).toString())

// const newTime=moment('Nov 13 1990 09:20:10')
// console.log(newTime.toString())
// console.log(newTime.format('MMM do, yyyy'))

// const myBirthday=moment()
// myBirthday.year(1990).month(10).date(13)
// console.log(myBirthday.format('MMM D, YYYY'))






















