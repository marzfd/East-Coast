// Bot token
const telegram_bot_id = "5367721909:AAG9nVUv4iR0BuXZ9q4Gp5-E5ga-laH8i0U"

// Chat id
const chat_id = "83516365"

let username, email, message;

const ready = () => {
  $("#contact-form").submit(function(e) {
    e.preventDefault();
    username = $("#username").val();
    email = $("#email").val();
    message = $("#message").val();
    sendMessage();
  });
}

const sendMessage = () => {
  $.ajax({
    type: "POST",
    url: "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
    data: {
      chat_id: chat_id,
      text: "Name: " + username + "\nEmail: " + email + "\nMessage: " + message
    },
    success: function(data) {
      console.log(data);
      $("#contact-form").trigger("reset");
      $("#success").html(
        "<div class='alert alert-success'>Your message has been sent successfully.</div>"
      );
    },
    error: function(data) {
      console.log(data);
      $("#success").html(
        "<div class='alert alert-danger'>Sorry, an error occurred.</div>"
      );
    }
  });
}