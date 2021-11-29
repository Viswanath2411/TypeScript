let autoIncrementUserId = 1000;
let autoIncrementCourseId = 100;

class userDetails{
    userId: string;
    userName:string;
    userAge:number;
    userMobile:number;

    constructor(Name: string , Age:number , MobileNumber:number)
    {
        this.userName = Name;
        this.userAge = Age;
        this.userMobile = MobileNumber;
        this.userId = "M" + autoIncrementUserId.toString();
        autoIncrementUserId++;
    }
}

class courseDetails{
    courseId: string;
    courseName : string;
    reqDays: number;
    userId: string;

    constructor(CoName:string , Days:number , personId: string)
    {
        this.courseName = CoName;
        this.reqDays = Days;
        this.userId = personId;
        this.courseId = "C" + autoIncrementCourseId.toString();
        autoIncrementCourseId++;
    }
}

let userList: Array<userDetails> = [];
let courseList: Array<courseDetails> = [];

let obj1 = new userDetails("Viswa" , 22 , 9597220829);
userList.push(obj1);
let obj2 = new userDetails("Jai" , 26 , 9577563429);
userList.push(obj2);

let obj3 = new courseDetails("HTML" , 3 , "M1000")
courseList.push(obj3);
let obj4 = new courseDetails("HTML" , 4 , "M1001")
courseList.push(obj4);
let obj5 = new courseDetails("C-Sharp(C#)" , 7 , "M1000")
courseList.push(obj5);

function newUser()
{
    let homepage = document.getElementById("loginpage") as HTMLDivElement ;
    let signpage = document.getElementById("registerpage") as HTMLDivElement;

    homepage.style.display = "none";
    signpage.style.display = "block";
}

function addUser()
{
    let uname = (document.getElementById("username") as HTMLInputElement).value;
    let uage = parseInt((document.getElementById("userage") as HTMLInputElement).value);
    let umob = parseInt((document.getElementById("usermob") as HTMLInputElement).value);

    let mem = new userDetails(uname , uage , umob);
    userList.push(mem);

    if(uname.trim() == "" || uage == null || umob == null)
    {
        alert("Please enter the Fields!");
    }
    else{
        for(let i=0; i<userList.length ; i++)
        {
            if(uname == userList[i].userName)
            {
                alert("Register successfully! Your UserId is " +userList[i].userId);
            }
            

        }
        let homepage = document.getElementById("loginpage") as HTMLDivElement ;
        let signpage = document.getElementById("registerpage") as HTMLDivElement;

        homepage.style.display = "block";
        signpage.style.display = "none";
    }
}

function existingUser()
{
    let uid = (document.getElementById("userid") as HTMLInputElement).value;
    let count:number = 0;

    for(let i=0; i<userList.length ; i++)
    {
        if(uid == userList[i].userId)
        {
            alert("Entered Id is available! You are welcome.");
            let homepage = document.getElementById("loginpage") as HTMLDivElement ;
            let existpage = document.getElementById("existuserpage") as HTMLDivElement;

            homepage.style.display = "none";
            existpage.style.display = "block";
            document.getElementById("dispname").innerHTML = userList[i].userName ;
            document.getElementById("dispname").style.visibility = "visible";
            break;
        }
        else{
            count++;
        }
    }
    if (count == userList.length)
    {
        alert("Please enter valid User Id!");
    }
}

function availCourse()
{
    let existpage = document.getElementById("existuserpage") as HTMLDivElement;
    let entrollpage = document.getElementById("newentrollpage") as HTMLDivElement ;
    
    existpage.style.display = "none";
    entrollpage.style.display = "block";
}

function displayCourse()
{
    let existpage = document.getElementById("existuserpage") as HTMLDivElement;
    let displaypage = document.getElementById("coursehistorypage") as HTMLDivElement ;
    
    existpage.style.display = "none";
    displaypage.style.display = "block";

    let useid = (document.getElementById("userid") as HTMLInputElement).value;

    let cid = document.getElementById("histcourseid")
    
    let cname = document.getElementById("histcoursename")
    
    let cday = 0;
    let total = document.getElementById("histcoursedays");
    
    for (let i=0 ; i<userList.length ; i++)
    {
        if (useid == userList[i].userId)
        {
            document.getElementById("histuserid").innerHTML = userList[i].userId;
            document.getElementById("histuserid").style.visibility = "visible";
            document.getElementById("histuserid").style.color = "brown";
            document.getElementById("histusername").innerHTML = userList[i].userName;
            document.getElementById("histusername").style.visibility = "visible";
            document.getElementById("histusername").style.color = "brown";
            document.getElementById("histuserage").innerHTML = userList[i].userAge.toString();
            document.getElementById("histuserage").style.visibility = "visible";
            document.getElementById("histuserage").style.color = "brown";
            document.getElementById("histusermob").innerHTML = userList[i].userMobile.toString();
            document.getElementById("histusermob").style.visibility = "visible";
            document.getElementById("histusermob").style.color = "brown";
            for(let j=0 ; j<courseList.length ; j++)
            {
                
                if(userList[i].userId == courseList[j].userId)
                {
                    cid.innerHTML += courseList[j].courseId+"<br>";
                    cid.style.visibility = "visible";
                    cid.style.color = "brown";
                    cname.innerHTML += courseList[j].courseName+"<br>";
                    cname.style.visibility = "visible";
                    cname.style.color = "brown";
                    cday += courseList[j].reqDays;
                    
                }
                total.innerHTML = cday.toString();
                total.style.visibility = "visible";
                total.style.color = "brown";

            }
        }
    }
}

function addCourse()
{
    let cname = (document.getElementById("courses") as HTMLInputElement).value;
    let day = parseInt((document.getElementById("daysreq") as HTMLInputElement).value);
    let usid = (document.getElementById("userid") as HTMLInputElement).value

    let cor = new courseDetails(cname , day ,usid);
    courseList.push(cor);

    if(cname.trim() == "select" || day == null)
    {
        alert("Please enter the Fields!");
    }
    else{
        for(let i=0; i<courseList.length ; i++)
        {
            if(cname == courseList[i].courseName)
            {
                alert("Register successfully! Your UserId is " +courseList[i].courseId);
            }
            

        }
        let existpage = document.getElementById("existuserpage") as HTMLDivElement;
        let entrollpage = document.getElementById("newentrollpage") as HTMLDivElement ;
    
        existpage.style.display = "block";
        entrollpage.style.display = "none";
    }
}


