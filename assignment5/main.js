var click = 0;
window.onload = clearFunction;
function postFunction()
{
    var write = document.getElementById("text1").value;
    if(click == 0)
    {
        var post = document.getElementById("topic1");
        post.textContent = write;
        click++;
        
    }
    else if(click == 1)
    {
       
        var post = document.getElementById("comment1");
        post.textContent = write;
        click++;
    }
    else if(click == 2)
    {
      
        var post = document.getElementById("comment2");
        post.textContent = write;
        click++;
    }
    else if(click > 2)
    {
       alert("ไม่สามารถใส่ข้อความได้");
    }   
}
function clearFunction()
        { 
            var post1 = document.getElementById("topic1");
            var post2 = document.getElementById("comment1");
            var post3 = document.getElementById("comment2");
            post1.textContent = ".";
            post2.textContent = ".";
            post3.textContent = ".";
            click = 0;
        }