# Baskar & Kamali — Wedding Website

A bilingual (English/Tamil), responsive, static wedding website. It uses plain HTML, CSS and JavaScript, so there is no server, database, build step or paid service required.

## Preview
Open `index.html` in a browser. For the best preview on a phone, upload the folder to GitHub and enable GitHub Pages, or use Cloudflare Pages.

## Personalise before publishing
1. Replace the three story photo placeholders with your photos.
2. Replace the gallery placeholders with engagement photos.
3. Edit the story captions in `index.html`.
4. Add confirmed wedding time and full venue address.
5. Add reception details if there is a separate reception.
6. Add your instrumental MP3 at `assets/audio/your-romantic-instrumental.mp3`.
7. Check the Google Maps destination pin and travel links after the exact venue location is confirmed.

## Add photos
Put image files in `assets/images/`. In `index.html`, replace a placeholder `<div>` with:
`<img class="your-photo" src="assets/images/your-photo.jpg" alt="Baskar and Kamali">`
Then add CSS for `.your-photo` (for example: `width:100%;height:100%;object-fit:cover`).

## Publish free with GitHub Pages
1. Create a free GitHub account (if you don't already have one).
2. Create a new public repository, for example `baskar-kamali-wedding`.
3. Upload the contents of this folder (make sure `index.html` is at the repository root).
4. Open **Settings → Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/ (root)`, then Save.
6. GitHub will provide a public website address after deployment.

Cloudflare Pages is another free static-hosting option. No RSVP backend is needed.

## Notes
- Music does not autoplay. Visitors choose to play it, which works better with mobile browser restrictions.
- The travel buttons open Google Maps directions from Chennai, Bengaluru and Puducherry to the named venue search. Verify the exact venue pin before sharing.
- The reception and event timings are intentionally marked as pending until confirmed.
- 
