function sendMail() {
    var params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
      phone: document.getElementById("phone").value,
    };
    const serviceID = "service_ahtzufh";
    const templateID = "template_l9sx8z7";
    emailjs
      .send(serviceID, templateID, params)
      .then((res) => {
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        document.getElementById("phone").value = "";
        console.log(res);
        alert("Your Message Send Successfull");
      })
      .catch((err) => console.log(err));
  }
  