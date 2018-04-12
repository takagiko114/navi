function addbutton(){
    var div_element = document.createElement("div");
    div_element.innerHTML = '</br> <p style="text-align:center;"> <input type="button" value="ID" style="widht:50px; height:20px;" onclick="testID()"/> <input type="button" value="PW" onclick="testPW()"/></p>';  
    var parent_object = document.getElementById("hoge");
    parent_object.appendChild(div_element);
}

function testID(){
    window.alert("IDをコピーしました");
}

function testPW(){
    window.alert("PWをコピーしました");
}