MINDULI VIDEO PORTFOLIO — QUICK GUIDE

1) ADD YOUR VIDEOS
   Landscape videos -> videos/landscape/
   Portrait/Reels   -> videos/portrait/

2) EDIT THE VIDEO LIST
   Open script.js in Notepad or VS Code.
   Change the sample filenames to the exact names of your videos.
   Example:
   { title: "Fashion Campaign", type: "Commercial", file: "videos/landscape/fashion.mp4" }

   Add or delete lines as needed. The website automatically creates the cards.

3) CHANGE YOUR EMAIL
   Open index.html and search for:
   YOUR_EMAIL@example.com
   Replace both occurrences with your email.

4) TEST
   Double-click index.html to preview the site.
   For best video behavior, use VS Code Live Server or publish the folder.

5) FREE PUBLISHING
   Upload these files to a GitHub repository and enable GitHub Pages.
   Keep the folders and filenames exactly as referenced in script.js.

Tip: MP4 (H.264) is the safest format for browser playback.
