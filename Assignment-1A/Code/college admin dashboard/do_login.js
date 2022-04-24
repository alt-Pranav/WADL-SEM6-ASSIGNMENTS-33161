let data = [{}]  
function getUser() {
    
    const id = $("#userid").val();
    const pswd = $("#pswd").val();

    //const id = document.getElementById("userid").innerHTML;
    //const pswd = document.getElementById("pswd").textContent;

    data.push({id : pswd});
    //alert("Successfully logged in from getUser");
    console.log(id);
    console.log(pswd)
    console.log("Pushed data = ", data);
    if(id != '' && pswd != ''){
        alert("Successfully logged in from getUser");
    }
}