import { Outlet } from "@tanstack/react-router";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { FloatingActions } from "./FloatingActions";

export function SiteLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1"><Outlet /></main>
      <Footer />
      <FloatingActions />
    </div>
  );
}