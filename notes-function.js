//Displays all the note's stored in local storage//
let displayNote=function(filter)
{
    noteObjArray=dropdown(noteObjArray,filter.sortBy)
    saveLocalStorage()

    document.querySelector('#note-div-area').innerHTML=''
       noteObjArray.forEach(function(note){
           if(note.title.toLowerCase().includes(filter.searchStr.toLowerCase()))
           makeElement(note)
       })

}

//fetches data from local storage and copies to noteObjArray //
let fetchStoredData=function()
{
    let localDataStored= JSON.parse(localStorage.getItem('noteObjArray'))
        if(localDataStored==null)
            return []
        else
           return localDataStored  
}


//Creates , adds data and append elements //
let makeElement=function(note)
{
    let noteEl  = document.createElement('a')
    let buttonEl= document.createElement('button')
    
    
    //set up Delete note button - listener
    buttonEl.textContent='x'
    buttonEl.addEventListener('click',function(e){
        removeElement(note.id)  //since "note" is accessible here so we just put the listener here inside makeElement & 'e' is accessible you may or may not just use it also its not necessary to pass "e" as argument//
        saveLocalStorage()
        displayNote()
    })
     
    noteEl.setAttribute('href',`/edit.html#${note.id}`)
    noteEl.textContent=note.title

    let commonDiv=document.createElement('div')

    commonDiv.appendChild(buttonEl)
    commonDiv.appendChild(noteEl)
    

    document.querySelector('#note-div-area').appendChild(commonDiv)
    
}

//Save or update local storage
const saveLocalStorage=function(arrayOfData=noteObjArray){
    localStorage.setItem('noteObjArray',JSON.stringify(arrayOfData))
}

//Removing element
const removeElement=function(id,noteArray=noteObjArray){
    let removingElementIndex=noteArray.findIndex(function(note){
          return note.id==id
    })
       noteArray.splice(removingElementIndex,1)   
}

const dropdown=function(notes,value){
    if(value==='recently-updated')
    {
        return notes.sort(function(note1,note2){
            if(note1.updatedAt > note2.updatedAt)
            {
                return -1
            }
            else if(note1.updatedAt < note2.updatedAt)
            {
                return 1
            }
            else{
                return 0
            }
        })
    }
    else if(value==='recently-created')
    {
        return notes.sort(function(note1,note2){
            if(note1.createdAt > note2.createdAt)
            {
                return -1
            }
            else if(note1.createdAt < note2.createdAt)
            {
                return 1
            }
            else{
                return 0
            }
        })
    }
    else if(value==='alphabetical-order'){
        return notes.sort(function(note1,note2){
            if(note1.title.toLowerCase() < note2.title.toLowerCase())
            {
                return -1
            }
            else if(note1.title.toLowerCase() > note2.title.toLowerCase())
            {
                return 1
            }
            else{
                return 0
            }
        })
    }
    else {
        return notes
    }
}
  
     