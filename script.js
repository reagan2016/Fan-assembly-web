// ========================
// Assembly Hub Script
// ========================

// Welcome message (only once)
window.addEventListener("load", () => {
  if (!localStorage.getItem("assemblyWelcomeShown")) {
    alert("✨ Welcome to Assembly Hub! Roblox + K-pop Fan Universe 💖");
    localStorage.setItem("assemblyWelcomeShown", "true");
  }

  createSparkles();
});

// ========================
// Floating Sparkles
// ========================

function createSparkles() {
  for (let i = 0; i < 15; i++) {
    const sparkle = document.createElement("div");

    sparkle.innerHTML = "✨";
    sparkle.style.position = "fixed";
    sparkle.style.left = Math.random() * window.innerWidth + "px";
    sparkle.style.top = Math.random() * window.innerHeight + "px";
    sparkle.style.fontSize = "18px";
    sparkle.style.pointerEvents = "none";
    sparkle.style.zIndex = "999";

    document.body.appendChild(sparkle);

    let position = parseFloat(sparkle.style.top);

    setInterval(() => {
      position -= 0.5;
      sparkle.style.top = position + "px";

      if (position < -50) {
        position = window.innerHeight;
        sparkle.style.left =
          Math.random() * window.innerWidth + "px";
      }
    }, 40);
  }
}

// ========================
// Floating Hearts
// ========================

setInterval(() => {
  const heart = document.createElement("div");

  heart.innerHTML = "💖";
  heart.style.position = "fixed";
  heart.style.left = Math.random() * window.innerWidth + "px";
  heart.style.bottom = "-30px";
  heart.style.fontSize = "24px";
  heart.style.pointerEvents = "none";
  heart.style.zIndex = "999";

  document.body.appendChild(heart);

  let pos = -30;

  const animation = setInterval(() => {
    pos += 2;
    heart.style.bottom = pos + "px";

    if (pos > window.innerHeight + 50) {
      clearInterval(animation);
      heart.remove();
    }
  }, 30);

}, 4000);

// ========================
// Cursor Trail
// ========================

document.addEventListener("mousemove", (e) => {
  const trail = document.createElement("div");

  trail.style.position = "fixed";
  trail.style.left = e.clientX + "px";
  trail.style.top = e.clientY + "px";
  trail.style.width = "8px";
  trail.style.height = "8px";
  trail.style.borderRadius = "50%";
  trail.style.background = "#ff4fd8";
  trail.style.pointerEvents = "none";
  trail.style.zIndex = "9999";

  document.body.appendChild(trail);

  setTimeout(() => {
    trail.remove();
  }, 500);
});
