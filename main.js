document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Ngăn chặn form gửi dữ liệu đi
  
    var name = document.getElementById("name").value;
    var dob = document.getElementById("dob").value;
    var studentId = document.getElementById("studentId").value;
    var classInfo = document.getElementById("class").value;
  
    // Kiểm tra thông tin đăng nhập
    if (name && dob && studentId && classInfo) {
      alert("Đăng nhập thành công");
      hideLogin();
    } else {
      alert("Vui lòng điền đầy đủ thông tin");
    }
  });
  
  function hideLogin() {
    var loginForm = document.querySelector(".container");
    var x = document.querySelector(".question");
    loginForm.style.display = "none";
    x.style.display = "block";
}
document.getElementById("quizForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Ngăn chặn form gửi dữ liệu đi
  
    var answer1 = document.querySelector('input[name="question1"]:checked');
    var answer2 = document.querySelector('input[name="question2"]:checked');
    var answer3 = document.querySelector('input[name="question3"]:checked');
    var answer4 = document.querySelector('input[name="question4"]:checked');
    var answer5 = document.querySelector('input[name="question5"]:checked');
    var answer6 = document.querySelector('input[name="question6"]:checked');
    var answer7 = document.querySelector('input[name="question7"]:checked');
    var answer8 = document.querySelector('input[name="question8"]:checked');
    var answer9 = document.querySelector('input[name="question9"]:checked');
    var answer10 = document.querySelector('input[name="question10"]:checked');
    
  
    // Kiểm tra câu trả lời
    if (answer1 && answer2&&answer3 && answer4&&answer5 && answer6&&answer7 && answer8&&answer9 && answer10) {
      var score = 0;
      if (answer1.value === "a") {
        score++;
      }
      if (answer2.value === "b") {
        score++;
      }
      if (answer3.value === "a") {
        score++;
      }
      if (answer4.value === "b") {
        score++;
      }
      if (answer5.value === "a") {
        score++;
      }
      if (answer6.value === "b") {
        score++;
      }
      if (answer7.value === "a") {
        score++;
      }
      if (answer8.value === "b") {
        score++;
      }
      if (answer9.value === "a") {
        score++;
      }
      if (answer10.value === "b") {
        score++;
      }
      if (answer11.value === "a") {
        score++;
      }
      if (answer12.value === "b") {
        score++;
      }
      if (answer13.value === "a") {
        score++;
      }
      if (answer14.value === "b") {
        score++;
      }
      if (answer15.value === "a") {
        score++;
      }
      if (answer16.value === "b") {
        score++;
      }
      if (answer17.value === "a") {
        score++;
      }
      if (answer18.value === "b") {
        score++;
      }
      if (answer19.value === "a") {
        score++;
      }
      if (answer20.value === "b") {
        score++;
      }
  
  
      alert("Số điểm của bạn: " + score);
    } else {
      alert("Vui lòng chọn đáp án cho tất cả các câu hỏi");
    }
});