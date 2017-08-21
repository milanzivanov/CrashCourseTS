console.log("Working interfaces");
function showTodo(test) {
    console.log(test.title + " " + test.text);
}
var myTest = {
    title: "Ivan",
    text: "je moj brat <3"
};
showTodo(myTest);
