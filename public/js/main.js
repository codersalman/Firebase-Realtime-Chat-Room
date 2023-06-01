let Uname = localStorage.getItem('user');
const msgScreen = document.getElementById("messages");
const msgForm = document.getElementById("messageForm");
const msgInput = document.getElementById("msg-input");
const msgBtn = document.getElementById("msg-btn");
const userName = document.getElementById("user-name");
const db = app.database();
const msgRef = db.ref("messages")
// console.log(msgRef)

// msgRef.on('child_added', updateMsgs);
userName.innerHTML = "Welcome, " + Uname + "!";

msgRef.on('child_added', function () {
    console.log('data')
});
msgForm.addEventListener('submit', sendMessage);

const updateMsgs = data => {

    db.ref('messages').on('child_added', function (snapshot) {

        // Get the data from the snapshot
        const message = snapshot.val();

        const {name, text} = message;
        console.log(JSON.stringify(message))

        console.log('hello' + name)
        //load messages
        const msg = `<li class="${name == Uname ? "msg my" : "msg"}"><span class = "msg-span">
                  <i class = "name">${name}: </i>${text}
                  </span>
                </li>`
        msgScreen.innerHTML += msg;
        document.getElementById("chat-window").scrollTop = document.getElementById("chat-window").scrollHeight;

        // Do something with the data
    });
    // const {name, text} = data.val();


    //auto scroll to bottom
}

function sendMessage(e) {
    e.preventDefault();
    const text = msgInput.value;

    if (!text.trim()) return alert('Please type your message.'); //no msg submitted
    const msg = {
        "name": Uname,
        "text": text
    };

    msgRef.push(msg);
    // console.log(results)
    msgInput.value = "";
}


document.addEventListener('DOMContentLoaded', updateMsgs);


// .