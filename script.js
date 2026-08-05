// ===== Maya Yadin Portfolio — shared script.js =====
// Used across index.html, more-work.html, via.html, career-os.html, cv.html

document.addEventListener('DOMContentLoaded', () => {
  initScrollReveal();
    initTabs();
      initCarousel();
        initNavToggle();
  initClickUnmute();
  initMediaSound();
initDeskCardTouch();
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
                                                                                                                                                                                                                                                  


/* ---------- Click-to-unmute for standalone videos (e.g. Via page phone mockup) ---------- */
function initClickUnmute() {
  const vids = document.querySelectorAll('video.click-unmute');
  vids.forEach(video => {
    video.addEventListener('click', () => {
      video.muted = !video.muted;
    });
  });
}


/* ---------- Content & Self-Branding: per-video mute button ---------- */
function initMediaSound() {
  const wraps = document.querySelectorAll('.media-item-wrap');
  if (!wraps.length) return;
  wraps.forEach(wrap => {
    const video = wrap.querySelector('video.media-item');
    const btn = wrap.querySelector('.video-sound-button');
    if (!video || !btn) return;
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const wasMuted = video.muted;
      document.querySelectorAll('.media-item-wrap video.media-item').forEach(v => { v.muted = true; });
      document.querySelectorAll('.video-sound-button').forEach(b => {
        b.innerHTML = '&#128263;';
        b.setAttribute('aria-label', 'Unmute');
      });
      if (wasMuted) {
        video.muted = false;
        btn.innerHTML = '&#128266;';
        btn.setAttribute('aria-label', 'Mute');
      }
    });
  });
}


/* ---------- Also on my desk: touch-friendly flip cards ---------- */
function initDeskCardTouch() {
const cards = document.querySelectorAll('.desk-card');
if (!cards.length) return;

const isTouch = window.matchMedia('(hover: none), (pointer: coarse)').matches;
if (!isTouch) return;

cards.forEach(card => {
card.addEventListener('click', (e) => {
if (!card.classList.contains('is-flipped')) {
e.preventDefault();
cards.forEach(c => { if (c !== card) c.classList.remove('is-flipped'); });
card.classList.add('is-flipped');
}
});
});

document.addEventListener('click', (e) => {
if (!e.target.closest('.desk-card')) {
cards.forEach(c => c.classList.remove('is-flipped'));
}
});
}
