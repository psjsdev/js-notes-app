const hashId=location.hash.substring(1)
let noteObjArrayEdit=fetchStoredData()

const noteTitle=document.querySelector('#note-title')
const noteText=document.querySelector('#note-text')
const removeButton=document.querySelector('#remove-button')
const dateElement=document.querySelector('#last-edited')

let note=noteObjArrayEdit.find(function(note){ 
    return note.id===hashId
})

if(note===undefined) //if url or hash id by some means is not complete or wrong it will redirect to home//
{
    location.assign('/index.html')
}

noteTitle.value=note.title
noteText.value=note.text
dateElement.textContent=`Last Edited ${moment(note.updatedAt).fromNow()}`


noteTitle.addEventListener('input',function(event){
    note.title=event.target.value
    note.updatedAt=moment().valueOf()
    dateElement.textContent=`Last Edited ${moment(note.updatedAt).fromNow()}`
    saveLocalStorage(noteObjArrayEdit)
})

noteText.addEventListener('input',function(event){
    //debugger can be used here if you forget where the data is in the event
    //just use debugger in the first line inside the listener and in console we can directly access this event
    note.text=event.target.value
    note.updatedAt=moment().valueOf()
    dateElement.textContent=`Last Edited ${moment(note.updatedAt).fromNow()}`
    saveLocalStorage(noteObjArrayEdit)
})

removeButton.addEventListener('click',function(event){
    removeElement(note.id,noteObjArrayEdit)
    saveLocalStorage(noteObjArrayEdit)
    location.assign('/index.html')
})

window.addEventListener('storage',function(e){
    if(e.key==='noteObjArray')
    {
        noteObjArrayEdit=fetchStoredData() 
        note=noteObjArrayEdit.find(function(note){
        return note.id===hashId
    })
    
    if(note===undefined)
    {
        location.assign('/index.html')
    }
    
    noteTitle.value=note.title
    noteText.value=note.text
    dateElement.textContent=`Last Edited ${moment(note.updatedAt).fromNow()}`
    }

})