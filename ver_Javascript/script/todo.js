
var uls = document.querySelector('#mainUl');
var lis = document.getElementsByTagName('li');
var inp = document.querySelector('#mainInput');
var arrow = document.querySelector('#arrowdown');
var trash = document.querySelectorAll('.trash')


//=====================
var clicked_id;     // TO GET WHICH ID IS CLICKED
var eleClicked;
var eleClickedI;
var id = lis.length; // FOR NEW ID


// GET CLICKED ID
function getId(clk){
    eleClicked = document.getElementById(clk)
}
//GET CLICKED ID
function getEleIdI(clk){
    eleClickedI = document.getElementById(clk)
}


// ======= Add new row
inp.addEventListener('keyup', function(event){
    event.preventDefault();
    if (event.keyCode === 13){
        if (!inp.value){
            alert ('Please type in todo list.')
        } else {

            var newLi = document.createElement('li');
            newLi.setAttribute('class','item-list');
            newLi.setAttribute('id',id)
            newLi.setAttribute('onClick', "getId(this.id)")
            id ++;

            var newTrash = document.createElement('span');
            newTrash.setAttribute('class', "trash");
            newTrash.setAttribute('id', "t"+id.toString())
            newTrash.setAttribute('onClick', "getEleIdI(this.id)")

            var newIcon = document.createElement('i');
            newIcon.setAttribute('class', 'fas fa-trash-alt');
            //newIcon.setAttribute('id', "i"+id.toString())
            newTrash.appendChild(newIcon)

            var todoText = inp.value;
            inp.value='';
            newLi.appendChild(newTrash);
            uls.appendChild(newLi);
            newTrash.after(todoText)

        }
    }
});


// ===== hide todo area
arrow.addEventListener('click', function(){
    inp.classList.toggle('hide');
    inp.focus();
})

// ====COMPLETED =====
uls.addEventListener('click', function(e){
if (eleClicked.tagName === 'LI'){
        eleClicked.classList.toggle('completed')
    } 
});

// ====DELETE =====
uls.addEventListener('click', function(e){
    if (eleClickedI.tagName === 'SPAN'){
        var child = eleClickedI.parentNode
        eleClickedI.parentNode.parentNode.removeChild(child)
    } 
});

