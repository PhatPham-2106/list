let list=loadData(LIST); 
function display(){
    let str='';
    for(let i=0;i<list.length;i++){
        str+=`<input type='text' placeholder='${list[i]}' class='i' disabled style="margin-right:0px" >
        <button type='button'class="btn btn-outline-danger "onclick='del(${i})' >X</button>`
    }
    document.getElementById('list').innerHTML=str;
    saveData(LIST,list);
}
function create(){
    if(document.getElementById('add').value==''){
        return;
    }
    list.push(document.getElementById('add').value) 
    display();

}
function del(index){
    list.splice(index,1);
    display()
}
function important(){
    list=[];
    display()
}
function sukien(evt){
    if(evt.key=='Enter'){
        create();
    }
}
addEventListener('keydown',sukien);
display();