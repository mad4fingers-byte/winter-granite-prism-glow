import { createFileRoute } from "@tanstack/react-router";
import { VelaDesk } from "@/components/vela-desk";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return <VelaDesk />;
}
