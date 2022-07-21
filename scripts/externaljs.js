function demoExternalAlert()
{
    alert("External Alert.");
}
function demoExternalConfirm()
{
    if(confirm("Are You Sure ?"))
    {
        alert("YES");
    }
    else{
        alert("NO");
    }
}
function demoExternalprompt()
{
    var fname=prompt("Enter Your First Name Here...");
    var lname=prompt("Enter Your Last Name Here...");
    alert(fname+" "+lname);
}