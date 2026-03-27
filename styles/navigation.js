// Navigation sidebar functionality

document.addEventListener("DOMContentLoaded", () => {
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
  } else if (!isMobile && sidebarState !== "false") {
    // Default to open on desktop if no state saved
    sidebar.classList.remove("collapsed");
    contentWrapper.classList.add("sidebar-open");
    localStorage.setItem("sidebarOpen", "true");
  }

  // Toggle sidebar
  menuToggle.addEventListener("click", () => {
    if (isMobile) {
      // Mobile: toggle open class and overlay
      sidebar.classList.toggle("open");
      sidebarOverlay.classList.toggle("active");

      const isOpen = sidebar.classList.contains("open");
      menuToggle.classList.toggle("active", isOpen);
    } else {
      // Desktop: toggle collapsed class
      sidebar.classList.toggle("collapsed");
      contentWrapper.classList.toggle("sidebar-open");

      const isOpen = !sidebar.classList.contains("collapsed");
      menuToggle.classList.toggle("active", isOpen);

      // Save state
      localStorage.setItem("sidebarOpen", isOpen);
    }
  });

  // Close sidebar when clicking overlay (mobile)
  sidebarOverlay.addEventListener("click", () => {
    sidebar.classList.remove("open");
    sidebarOverlay.classList.remove("active");
    menuToggle.classList.remove("active");
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
        } else if (savedState === "false") {
          sidebar.classList.add("collapsed");
          contentWrapper.classList.remove("sidebar-open");
        }
      }
    }, 250);
  });
});
