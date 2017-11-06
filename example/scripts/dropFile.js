function drop_handler(ev){
  console.log("Drop");
  console.log(ev);
  ev.preventDefault();
  var dt = ev.dataTransfer;
  s = "Files uploaded:<br/>";
  if(dt.items){
    for(var i=0; i< dt.items.length;i++){
      if(dt.items[i].kind == "file"){
        s += dt.items[i].getAsFile().name + "<br/>";
      }
    }
  } else {
    for(var i=0;i < dt.files.length; i++){
      s += dt.files[i].name +"<br/>";
    }
  }
  var elem = document.getElementById("drop_zone");
  elem.innerHTML = s;
}

function dragover_handler(ev) {
  console.log("dragOver");
  // Prevent default select and drag behavior
  ev.preventDefault();
}

function dragend_handler(ev) {
  console.log("dragEnd");
  // Remove all of the drag data
  var dt = ev.dataTransfer;
  if (dt.items) {
    // Use DataTransferItemList interface to remove the drag data
    for (var i = 0; i < dt.items.length; i++) {
      dt.items.remove(i);
    }
  } else {
    // Use DataTransfer interface to remove the drag data
    ev.dataTransfer.clearData();
  }
}
