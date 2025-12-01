document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menuBtn");
  const navList = document.getElementById("navList");
  const projectGrid = document.getElementById("projectGrid");
  const filterContainer = document.getElementById("projectFilters");

  // Mobile nav toggle
  if (menuBtn) {
    menuBtn.addEventListener("click", () => {
      navList.classList.toggle("show");
    });
  }

  // Load projects from JSON
  fetch("data/projects.json")
    .then((res) => res.json())
    .then((data) => {
      const projects = data.projects || [];

      renderFilters(projects);
      renderProjects(projects, "all");

      function getAllTags(items) {
        const set = new Set();
        items.forEach((p) => (p.tags || []).forEach((t) => set.add(t)));
        return Array.from(set);
      }

      function renderFilters(items) {
        const tags = getAllTags(items);
        filterContainer.innerHTML = "";

        const allBtn = createPill("All", "all", true);
        filterContainer.appendChild(allBtn);

        tags.forEach((tag) => {
          filterContainer.appendChild(createPill(capitalize(tag), tag, false));
        });
      }

      function createPill(label, value, active) {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "pill" + (active ? " active" : "");
        btn.dataset.filter = value;
        btn.textContent = label;

        btn.addEventListener("click", () => {
          document
            .querySelectorAll(".pill")
            .forEach((p) => p.classList.remove("active"));
          btn.classList.add("active");
          renderProjects(projects, value);
        });

        return btn;
      }

      function renderProjects(items, filter) {
        projectGrid.innerHTML = "";
        const filtered =
          filter === "all"
            ? items
            : items.filter((p) => (p.tags || []).includes(filter));

        filtered.forEach((p) => {
          const card = document.createElement("article");
          card.className = "project";

          const title = document.createElement("h3");
          title.textContent = p.title || "Project";

          const blurb = document.createElement("p");
          blurb.textContent =
            p.blurb ||
            "Short description of the project, outcome, and your role.";

          const tagsRow = document.createElement("div");
          tagsRow.className = "tags";
          (p.tags || []).forEach((tag) => {
            const span = document.createElement("span");
            span.className = "tag";
            span.textContent = tag;
            tagsRow.appendChild(span);
          });

          const linksRow = document.createElement("div");
          (p.links || []).forEach((lnk) => {
            const a = document.createElement("a");
            a.href = lnk.href || "#";
            a.textContent = lnk.label || "View";
            a.className = "btn ghost";
            a.style.marginTop = "8px";
            linksRow.appendChild(a);
          });

          card.appendChild(title);
          card.appendChild(blurb);
          card.appendChild(tagsRow);
          if ((p.links || []).length) {
            card.appendChild(linksRow);
          }

          projectGrid.appendChild(card);
        });
      }

      function capitalize(str) {
        if (!str) return "";
        return str.charAt(0).toUpperCase() + str.slice(1);
      }
    })
    .catch((err) => {
      console.error("Failed to load projects.json", err);
      projectGrid.innerHTML =
        "<p>Unable to load projects right now. Please try again later.</p>";
    });
});
