

const landscapeVideos = [
  { title: "Editing Demo", type: "GIG Fiverr", file: "videos/landscape/GIG.mp4" },
  { title: "Commercial", type: "Workshop", file: "videos/landscape/devthon.mp4" },
  { title: "YouTube", type: "Client", file: "videos/landscape/Client.mp4" },
  
];

const portraitVideos = [
  { title: "Workshop", type: "Shoot + Edit", file: "videos/portrait/uni workshop.mp4" },
  { title: "Business", type: "Social Content", file: "videos/portrait/Coho.mp4" },
  { title: "University", type: "Short-form", file: "videos/portrait/Digital World_9.mp4" },
  { title: "Youtube", type: "Social Content", file: "videos/portrait/Fit.mp4" }
];

function renderVideos(items, targetId) {
  const target = document.getElementById(targetId);
  items.forEach(item => {
    const card = document.createElement("article");
    card.className = "card";
    card.innerHTML = `
      <video src="${item.file}" muted playsinline preload="metadata"></video>
      <div class="card-info">
        <div><strong>${item.title}</strong><br><small>${item.type}</small></div>
        <div class="play">▶</div>
      </div>`;
    const preview = card.querySelector("video");
    card.addEventListener("mouseenter", () => preview.play().catch(()=>{}));
    card.addEventListener("mouseleave", () => { preview.pause(); preview.currentTime = 0; });
    card.addEventListener("click", () => openVideo(item.file));
    target.appendChild(card);
  });
}

const modal = document.getElementById("modal");
const modalVideo = document.getElementById("modalVideo");
function openVideo(src){ modalVideo.src=src; modal.classList.add("open"); modal.setAttribute("aria-hidden","false"); modalVideo.play().catch(()=>{}); }
function closeVideo(){ modalVideo.pause(); modalVideo.removeAttribute("src"); modalVideo.load(); modal.classList.remove("open"); modal.setAttribute("aria-hidden","true"); }
document.getElementById("closeModal").addEventListener("click", closeVideo);
modal.addEventListener("click", e => { if(e.target===modal) closeVideo(); });
document.addEventListener("keydown", e => { if(e.key==="Escape") closeVideo(); });

renderVideos(landscapeVideos, "landscapeGrid");
renderVideos(portraitVideos, "portraitGrid");
