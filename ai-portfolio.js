function generateAI(){

let input = document.getElementById("userPrompt");
let text = input.value.trim();

if(text === "") return;

let chat = document.getElementById("chat-messages");

/* User message */

let userMsg = document.createElement("div");
userMsg.className="message user";
userMsg.innerText=text;

chat.appendChild(userMsg);

input.value="";

/* Bot reply */

setTimeout(()=>{

let botMsg=document.createElement("div");
botMsg.className="message bot";
botMsg.innerText="Creating your portfolio...";

chat.appendChild(botMsg);

createPortfolio(text);

},800)

}

/* Generate Portfolio */

function createPortfolio(prompt){

let output=document.getElementById("portfolioOutput");

output.style.display="block";

output.innerHTML=`

<h2>My Portfolio</h2>

<p><b>Description:</b> ${prompt}</p>

<h3>About Me</h3>
<p>I am a passionate developer who loves creating websites.</p>

<h3>Skills</h3>
<ul>
<li>HTML</li>
<li>CSS</li>
<li>JavaScript</li>
</ul>

<h3>Projects</h3>
<ul>
<li>Portfolio Website</li>
<li>AI Portfolio Builder</li>
<li>Web Applications</li>
</ul>

<h3>Contact</h3>
<p>Email: example@email.com</p>

`;

}