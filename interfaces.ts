console.log("Working interfaces");

// function showTodo(todo: {title:string, text:string}) {
//     console.log(todo.title+', '+todo.text);
// }

// let myTodo = {
//     title:"Milan",
//     text:"ce nauciti TS!!!"
// }

// showTodo(myTodo);

interface Todo {
    title:string;
    text:string;
}
function showTodo(test: Todo) {
    console.log(test.title+" "+test.text);
}
let myTest = {
    title: "Ivan",
    text: "je moj brat <3"
}

showTodo(myTest);