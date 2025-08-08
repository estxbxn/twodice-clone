"use client";


export function Footer() {
  return (
    <footer className="mb-4 text-xs md:text-sm text-muted-foreground">
      <div className="border rounded-xl md:rounded-2xl p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-2 bg-card/60">
        <p>© {new Date().getFullYear()} twodice. All rights reserved.</p>
        <nav className="flex items-center gap-4">
          <a className="hover:text-foreground" href="#">Terms</a>
          <a className="hover:text-foreground" href="#">Privacy</a>
          <a className="hover:text-foreground" href="#">Support</a>
        </nav>
      </div>
    </footer>
  );
}
