// Navigation sidebar functionality

function getNavigationTemplateUrl() {
  const script = document.querySelector('script[src*="styles/navigation.js"]');

  if (script instanceof HTMLScriptElement && script.src) {
    return new URL("navigation-template.html", script.src).toString();
  }

  const body = document.body;
  const basePath = body.getAttribute("data-nav-base") || "../";
  return new URL(`${basePath}styles/navigation-template.html`, window.location.href).toString();
}

// Load navigation component
async function loadNavigation() {
  const body = document.body;
  const basePath = body.getAttribute("data-nav-base") || "../";
  const templateUrl = getNavigationTemplateUrl();

  try {
    // Fetch the navigation template
    const response = await fetch(templateUrl);

    if (!response.ok) {
      throw new Error(`Navigation template request failed: ${response.status}`);
    }

    const html = await response.text();

    // Replace {base} placeholders with the base path
    const processedHtml = html.replace(/{base}/g, basePath);

    // Insert navigation at the beginning of body
    body.insertAdjacentHTML("afterbegin", processedHtml);
  } catch (error) {
    console.error("Failed to load navigation:", error, templateUrl);
  }
}

// Initialize navigation on page load
document.addEventListener("DOMContentLoaded", async () => {
  // Load the navigation component first
  await loadNavigation();

  // Then initialize navigation functionality
  const menuToggle = document.getElementById("menuToggle");
  const sidebar = document.getElementById("sidebar");
  const sidebarOverlay = document.getElementById("sidebarOverlay");
  const contentWrapper = document.getElementById("contentWrapper");

  // Load sidebar state from localStorage
  const sidebarState = localStorage.getItem("sidebarOpen");
  const isMobile = window.innerWidth <= 768;

  // Initialize sidebar state
  if (!isMobile && sidebarState === "true") {
    sidebar.classList.remove("collapsed");
    contentWrapper.classList.add("sidebar-open");
    menuToggle.classList.add("active"); // Show X when open
  } else if (!isMobile && sidebarState !== "false") {
    // Default to open on desktop if no state saved
    sidebar.classList.remove("collapsed");
    contentWrapper.classList.add("sidebar-open");
    menuToggle.classList.add("active"); // Show X when open
    localStorage.setItem("sidebarOpen", "true");
  }

  // Toggle sidebar
  menuToggle.addEventListener("click", () => {
    if (isMobile) {
      // Mobile: toggle open class and overlay
      sidebar.classList.toggle("open");
      sidebarOverlay.classList.toggle("active");

      // Button shows X when sidebar is open
      const isOpen = sidebar.classList.contains("open");
      menuToggle.classList.toggle("active", isOpen);
    } else {
      // Desktop: toggle collapsed class
      sidebar.classList.toggle("collapsed");
      contentWrapper.classList.toggle("sidebar-open");

      // Button shows X when sidebar is NOT collapsed (open)
      const isOpen = !sidebar.classList.contains("collapsed");
      menuToggle.classList.toggle("active", isOpen);
      localStorage.setItem("sidebarOpen", isOpen);
    }
  });

  // Close sidebar when clicking overlay (mobile)
  sidebarOverlay.addEventListener("click", () => {
    sidebar.classList.remove("open");
    sidebarOverlay.classList.remove("active");
    menuToggle.classList.remove("active"); // Show hamburger when closed
  });

  // Handle window resize
  let resizeTimer;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      const nowMobile = window.innerWidth <= 768;

      if (nowMobile) {
        // Switching to mobile
        sidebar.classList.remove("collapsed");
        sidebar.classList.remove("open");
        contentWrapper.classList.remove("sidebar-open");
        sidebarOverlay.classList.remove("active");
        menuToggle.classList.remove("active");
      } else {
        // Switching to desktop
        sidebar.classList.remove("open");
        sidebarOverlay.classList.remove("active");

        // Restore saved state
        const savedState = localStorage.getItem("sidebarOpen");
        if (savedState === "true") {
          sidebar.classList.remove("collapsed");
          contentWrapper.classList.add("sidebar-open");
          menuToggle.classList.add("active"); // Show X when open
        } else if (savedState === "false") {
          sidebar.classList.add("collapsed");
          contentWrapper.classList.remove("sidebar-open");
          menuToggle.classList.remove("active"); // Show hamburger when closed
        }
      }
    }, 250);
  });
});
