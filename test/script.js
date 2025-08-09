const sidebar = document.getElementById("sidebar");
const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeSidebar");
const chatArea = document.querySelector(".chat-area");
const chatForm = document.getElementById("chatForm");
const messages = document.getElementById("messages");

menuBtn.addEventListener("click", () => {
  if (window.innerWidth < 768) {
    // Mobile → slide in/out
    sidebar.classList.toggle("active");
  } else {
    // Desktop → full ↔ mini sidebar
    if (sidebar.classList.contains("mini")) {
      sidebar.classList.remove("mini");
      chatArea.classList.remove("mini");
    } else {
      sidebar.classList.add("mini");
      chatArea.classList.add("mini");
    }
  }
});

closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("active");
});

chatForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const input = chatForm.querySelector("input");
  const text = input.value.trim();
  if (!text) return;

  const userMsg = document.createElement("div");
  userMsg.classList.add("message", "user");
  userMsg.textContent = text;
  messages.appendChild(userMsg);

  setTimeout(() => {
    const botMsg = document.createElement("div");
    botMsg.classList.add("message", "bot");
    botMsg.textContent = "This is a bot reply for: " + text;
    messages.appendChild(botMsg);
    messages.scrollTop = messages.scrollHeight;
  }, 500);

  input.value = "";
  messages.scrollTop = messages.scrollHeight;
});
