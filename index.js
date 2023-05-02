const randomNumber = Math.floor(Math.random() *100);
const start=()=>{
const userNumber =parseInt(document.getElementById("number").value);
// document.getElementById("result").innerHTML =randomNumber + " " + userNumber;
if(randomNumber === userNumber){
    document.getElementById("result").innerHTML ="Great !!, You Guess It Right";
    document.getElementById("result").classList.remove("bg-danger");
    document.getElementById("result").classList.add("bg-success");
}else if(randomNumber > userNumber){
    document.getElementById("result").innerHTML =  `Sorry the Number is Greater than ${userNumber}`;
    document.getElementById("result").classList.add("bg-danger");
}else if(randomNumber < userNumber){
    document.getElementById("result").innerHTML =  `Sorry the Number is Less than ${userNumber}`;
    document.getElementById("result").classList.add("bg-danger");
}

}
const Reset=()=>{
    window.location.reload();
}