import { PageProps } from "$fresh/server.ts";

export default function Layout({ Component, state }: PageProps) {
  return (
    <div>
        Bienvenido a la práctica 2 esto es el layout
      <Component />
    </div>
  );
}