// 410 Gone for the legacy GoDaddy-era blog paths (/f/*).
// The old tutoring-era site (Torrance, "Oney and Associates", student forms) is dead,
// but search indexes still quote it as if current (verified 2026-07-02 — live paths 404,
// index still serves the text). A 410 tells crawlers the removal is permanent, which
// evicts these ghosts faster than a 404. The current site never served this content.
export function onRequest() {
  return new Response(
    "Gone. This page belonged to an earlier era of brianoney.com and has been permanently removed. Current work: https://brianoney.com/",
    { status: 410, headers: { "Content-Type": "text/plain; charset=utf-8" } }
  );
}
