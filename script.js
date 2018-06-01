// window.onload=function(){
//      console.log("page load!");
//      alert("De privacy wijzer extentie heeft gewerkt.");
// }

window.onload=function() {
var word = "Faxen",
    queue = [document.body],
    curr
;
while (curr = queue.pop()) {
    if (!curr.textContent.match(word)) continue;
    for (var i = 0; i < curr.childNodes.length; ++i) {
        switch (curr.childNodes[i].nodeType) {
            case Node.TEXT_NODE : // 3
                if (curr.childNodes[i].textContent.match(word)) {
                    console.log("Found!");
                    console.log("Het woord dat ik gevonden heb is: " + word);
                    document.getElementById('popup').innerHTML = "TEST";
                    // you might want to end your search here.
                }
                break;
            case Node.ELEMENT_NODE : // 1
                queue.push(curr.childNodes[i]);
                break;
        }
    }
}
}