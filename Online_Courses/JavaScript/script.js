var autoIncrementUserId = 1000;
var autoIncrementCourseId = 100;
var userDetails = /** @class */ (function () {
    function userDetails(Name, Age, MobileNumber) {
        this.userName = Name;
        this.userAge = Age;
        this.userMobile = MobileNumber;
        this.userId = "M" + autoIncrementUserId.toString();
        autoIncrementUserId++;
    }
    return userDetails;
}());
var courseDetails = /** @class */ (function () {
    function courseDetails(CoName, Days, personId) {
        this.courseName = CoName;
        this.reqDays = Days;
        this.userId = personId;
        this.courseId = "C" + autoIncrementCourseId.toString();
        autoIncrementCourseId++;
    }
    return courseDetails;
}());
var userList = [];
var courseList = [];
var obj1 = new userDetails("Viswa", 22, 9597220829);
userList.push(obj1);
var obj2 = new userDetails("Jai", 26, 9577563429);
userList.push(obj2);
var obj3 = new courseDetails("HTML", 3, "M1000");
courseList.push(obj3);
var obj4 = new courseDetails("HTML", 4, "M1001");
courseList.push(obj4);
var obj5 = new courseDetails("C-Sharp(C#)", 7, "M1000");
courseList.push(obj5);
function newUser() {
    var homepage = document.getElementById("loginpage");
    var signpage = document.getElementById("registerpage");
    homepage.style.display = "none";
    signpage.style.display = "block";
}
function addUser() {
    var uname = document.getElementById("username").value;
    var uage = parseInt(document.getElementById("userage").value);
    var umob = parseInt(document.getElementById("usermob").value);
    var mem = new userDetails(uname, uage, umob);
    userList.push(mem);
    if (uname.trim() == "" || uage == null || umob == null) {
        alert("Please enter the Fields!");
    }
    else {
        for (var i = 0; i < userList.length; i++) {
            if (uname == userList[i].userName) {
                alert("Register successfully! Your UserId is " + userList[i].userId);
            }
        }
        var homepage = document.getElementById("loginpage");
        var signpage = document.getElementById("registerpage");
        homepage.style.display = "block";
        signpage.style.display = "none";
    }
}
function existingUser() {
    var uid = document.getElementById("userid").value;
    var count = 0;
    for (var i = 0; i < userList.length; i++) {
        if (uid == userList[i].userId) {
            alert("Entered Id is available! You are welcome.");
            var homepage = document.getElementById("loginpage");
            var existpage = document.getElementById("existuserpage");
            homepage.style.display = "none";
            existpage.style.display = "block";
            document.getElementById("dispname").innerHTML = userList[i].userName;
            document.getElementById("dispname").style.visibility = "visible";
            break;
        }
        else {
            count++;
        }
    }
    if (count == userList.length) {
        alert("Please enter valid User Id!");
    }
}
function availCourse() {
    var existpage = document.getElementById("existuserpage");
    var entrollpage = document.getElementById("newentrollpage");
    existpage.style.display = "none";
    entrollpage.style.display = "block";
}
function displayCourse() {
    var existpage = document.getElementById("existuserpage");
    var displaypage = document.getElementById("coursehistorypage");
    existpage.style.display = "none";
    displaypage.style.display = "block";
    var useid = document.getElementById("userid").value;
    var cid = document.getElementById("histcourseid");
    var cname = document.getElementById("histcoursename");
    var cday = 0;
    var total = document.getElementById("histcoursedays");
    for (var i = 0; i < userList.length; i++) {
        if (useid == userList[i].userId) {
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
            for (var j = 0; j < courseList.length; j++) {
                if (userList[i].userId == courseList[j].userId) {
                    cid.innerHTML += courseList[j].courseId + "<br>";
                    cid.style.visibility = "visible";
                    cid.style.color = "brown";
                    cname.innerHTML += courseList[j].courseName + "<br>";
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
function addCourse() {
    var cname = document.getElementById("courses").value;
    var day = parseInt(document.getElementById("daysreq").value);
    var usid = document.getElementById("userid").value;
    var cor = new courseDetails(cname, day, usid);
    courseList.push(cor);
    if (cname.trim() == "select" || day == null) {
        alert("Please enter the Fields!");
    }
    else {
        for (var i = 0; i < courseList.length; i++) {
            if (cname == courseList[i].courseName) {
                alert("Register successfully! Your UserId is " + courseList[i].courseId);
            }
        }
        var existpage = document.getElementById("existuserpage");
        var entrollpage = document.getElementById("newentrollpage");
        existpage.style.display = "block";
        entrollpage.style.display = "none";
    }
}
