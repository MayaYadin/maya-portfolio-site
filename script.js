// ===== Maya Yadin Portfolio — shared script.js =====
// Used across index.html, more-work.html, via.html, career-os.html, cv.html

document.addEventListener('DOMContentLoaded', () => {
  initScrollReveal();
    initTabs();
      initCarousel();
        initNavToggle();
        });

        /* ---------- Scroll reveal animations ---------- */
        function initScrollReveal() {
          const revealEls = document.querySelectorAll('.reveal');
            if (!revealEls.length) return;

              if (!('IntersectionObserver' in window)) {
                  revealEls.forEach(el => el.classList.add('in-view'));
                      return;
                        }

                          const observer = new IntersectionObserver((entries) => {
                              entries.forEach(entry => {
                                    if (entry.isIntersecting) {
                                            entry.target.classList.add('in-view');
                                                    observer.unobserve(entry.target);
                                                          }
                                                              });
                                                                }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });

                                                                  revealEls.forEach(el => observer.observe(el));
                                                                  }

                                                                  /* ---------- Career OS tab system ---------- */
                                                                  function initTabs() {
                                                                    const tabNav = document.querySelector('.tab-nav');
                                                                      if (!tabNav) return;

                                                                        const buttons = tabNav.querySelectorAll('button[data-tab]');
                                                                          const panels = document.querySelectorAll('.tab-panel');

                                                                            buttons.forEach(btn => {
                                                                                btn.addEventListener('click', () => {
                                                                                      const target = btn.getAttribute('data-tab');

                                                                                            buttons.forEach(b => b.classList.remove('active'));
                                                                                                  btn.classList.add('active');

                                                                                                        panels.forEach(panel => {
                                                                                                                if (panel.getAttribute('data-panel') === target) {
                                                                                                                          panel.classList.add('active');
                                                                                                                                  } else {
                                                                                                                                            panel.classList.remove('active');
                                                                                                                                                    }
                                                                                                                                                          });
                                                                                                                                                              });
                                                                                                                                                                });
                                                                                                                                                                }
                                                                                                                                                                
                                                                                                                                                                /* ---------- Hero video carousel (endless vertical scroll) ---------- */
                                                                                                                                                                function initCarousel() {
                                                                                                                                                                  const track = document.querySelector('.carousel-track');
                                                                                                                                                                    if (!track) return;
                                                                                                                                                                    
                                                                                                                                                                      // Duplicate items once so the CSS keyframe scroll can loop seamlessly
                                                                                                                                                                        const originalItems = Array.from(track.children);
                                                                                                                                                                          originalItems.forEach(item => {
                                                                                                                                                                              track.appendChild(item.cloneNode(true));
                                                                                                                                                                                });
                                                                                                                                                                                
                                                                                                                                                                                  const videos = track.querySelectorAll('video');
                                                                                                                                                                                    videos.forEach(video => {
                                                                                                                                                                                        video.muted = true;
                                                                                                                                                                                            video.loop = true;
                                                                                                                                                                                                video.autoplay = true;
                                                                                                                                                                                                    video.playsInline = true;
                                                                                                                                                                                                        video.play().catch(() => {});
                                                                                                                                                                                                        
                                                                                                                                                                                                            video.addEventListener('click', () => {
                                                                                                                                                                                                                  // Mute every other video first so only one plays sound at a time
                                                                                                                                                                                                                        videos.forEach(v => { if (v !== video) v.muted = true; });
                                                                                                                                                                                                                              video.muted = !video.muted;
                                                                                                                                                                                                                                  });
                                                                                                                                                                                                                                    });
                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                    
                                                                                                                                                                                                                                    /* ---------- Mobile nav toggle ---------- */
                                                                                                                                                                                                                                    function initNavToggle() {
                                                                                                                                                                                                                                      const toggle = document.querySelector('.nav-toggle');
                                                                                                                                                                                                                                        const header = document.querySelector('.site-header');
                                                                                                                                                                                                                                          if (!toggle || !header) return;
                                                                                                                                                                                                                                          
                                                                                                                                                                                                                                            toggle.addEventListener('click', () => {
                                                                                                                                                                                                                                                header.classList.toggle('nav-open');
                                                                                                                                                                                                                                                  });
                                                                                                                                                                                                                                                  }
                                                                                                                                                                                                                                                  
