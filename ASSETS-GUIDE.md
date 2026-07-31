# Asset file guide

The site code already expects your real photos, videos and PDF at the exact paths below. Rename your files on your computer to match these names exactly (same spelling, same capitalization, same extension), then upload them into these folders in GitHub. A full step-by-step for uploading is at the bottom of this file.

Note: a few filenames below include spaces or capital letters (e.g. "take a brief1.png", "TechTrain Mailer.png") — that's fine, GitHub handles spaces in filenames just fine, just make sure the name you upload matches exactly, including the spaces and capitalization.

## assets/images/ (all .png, except two noted below)
- hero-bg.png — Home page hero background (beach chair photo)
- career-hero-bg.png — Startup Career OS hero background (sky/city photo)
- via-preview.png — the Via app preview shown in the "Product & Brand" section on the Home page
- strategy-dashboard.png — the "indexa" dashboard mockup in the "Strategy & Systems" section
- via-what-if.png — Via page "the who" media grid, photo card 1
- via-clicked.png — Via page "the who" media grid, photo card 2
- we-met-via.png — Via page "the who" media grid, photo card 3
- via-note.png — Via page "the who" media grid, photo card 4
- via-login.png — Via page phone mockup in "the how" section
- via-blue-glow.svg — the soft blue glow graphic behind both Via page phone mockups (this one is .svg, not .png)
- take a brief1.png, take a brief2.png, take a brief3.png — More Work page, Microsoft "Brand & communications", Take a Brief lecture series
- dogs1_V.png, dogs2_V.png, dogs3_V.png — More Work page, Microsoft "Brand & communications", dogs at campus campaign
- offsider article.jpg — More Work page, Microsoft "Technical writing" (this one is .jpg, not .png)
- TechTrain Mailer.png, Managers Mailer.png, Aspire mailer.png — More Work page, Microsoft "Technical writing" mailers
- Website Mental Health Intro.png, physical1.png, physical2.png, physical3.png — More Work page, Microsoft "Physical Campaigns"
- mw-mashkiot-1.png, mw-mashkiot-2.png, mw-mashkiot-3.png — More Work page, Mashkiot section (Hebrew real-estate posts)
- mw-earlier-1.png, mw-earlier-2.png, mw-earlier-3.png, space-feed.png — More Work page, "Before we had AI" section (SpaceClub gym content)

Note: the three "Also on my desk" squares on the Home page (Brand & comms / Building a community's voice / Before we had AI) no longer use image files — they're now live text teasers you can edit directly in index.html.

## assets/videos/
- reel-1.mp4 through reel-7.mp4 — the 7 videos in the Home page vertical carousel ("Content & Self-Branding" section). Vertical/portrait (9:16) video works best. Keep file sizes reasonably small (a few MB each) so the page loads fast.
- via-annimated.mp4 — Via page hero phone mockup (plays automatically, muted and looping — visitors can click it to unmute)

## assets/documents/
- Maya-Yadin-CV.pdf — used by both the "Download CV as PDF" button on the Home page and the CV page

## Notes
- If a file is missing, that spot on the page will just show a blank/broken image icon (or a blank video box) until you upload it — nothing else will break.

---

## Step-by-step: how to upload your images and videos on GitHub

Do this once for each of the three folders (images, videos, documents). These steps work even if you're starting fresh in a new browser session.

**Step 1.** Go to your repo: https://github.com/MayaYadin/maya-portfolio-site

**Step 2.** Click "Add file" near the top right of the file list, then choose "Upload files."

**Step 3.** You'll land on an upload screen with a large dashed box that says "Drag files here to add them to your repository."

**Step 4.** Before dropping files, tell GitHub which folder they belong in. Above the dashed box there's a text field showing the repository name (e.g. "maya-portfolio-site/"). Click into it and type the folder path, for example assets/images/ for photos, assets/videos/ for videos, or assets/documents/ for the CV PDF. Make sure the path ends with a slash.

**Step 5.** Drag your renamed files from your computer's Finder window straight into the dashed box, or click "choose your files" to open a file picker instead.

**Step 6.** Wait for all files to finish uploading — you'll see them listed with thumbnails once done.

**Step 7.** Scroll down to the "Commit changes" section and leave "Commit directly to the main branch" selected.

**Step 8.** Click the green "Commit changes" button.

**Step 9.** Repeat steps 2 through 8 for the next folder (images, then videos, then documents), using the matching folder path each time.

**To replace a file later** (e.g. you swap in a better photo with the same name): repeat the same upload steps with a file of the exact same filename — GitHub detects it already exists at that path and overwrites it once you commit.
