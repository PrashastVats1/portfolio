// ═══════════════════════════════════════════════════════════════
//  📝 ADDING A NEW BLOG POST — 3 steps:
//
//  1. Create: src/blog/posts/your-post-slug.js
//     Copy the structure from any existing post file.
//
//  2. Import it below and add it to the `posts` array (newest first).
//
//  3. git add . && git commit -m "Add post: Your Title" && git push
//     Done — it appears on /blog automatically.
// ═══════════════════════════════════════════════════════════════

import promptEngineering    from "./prompt-engineering-is-system-design";
import cookiesAndSoftware   from "./what-baking-cookies-taught-me-about-software-engineering";

// Newest first
const posts = [
  cookiesAndSoftware,
  promptEngineering,
];

export default posts;
