// src/app/apostila/conteudo/[id]

import { notFound } from "next/navigation";
import MindMapView, { ClientViewProps } from "@/app/Views/MapaMentalView";

// Interface representando o que deve vir em params
interface RouteParams {
  id?: string;
}

// O Next com "force-dynamic" expõe params como Promise<RouteParams>
interface PageProps {
  params: Promise<RouteParams>;
  // Caso tenha searchParams: Promise<URLSearchParams>;
}
const API_URL = process.env.NEXT_PUBLIC_API_URL;

// Se quiser revalidate + dynamic = "force-dynamic"
export const revalidate = 300; // 5 minutos
export const dynamic = "force-dynamic";

export default async function ContentPage({ params }: PageProps) {
  // Fazendo await da Promise
  const { id } = await params;

  if (!id) {
    return (
      <div className="p-10 text-center">
        <h1>Nenhum ID fornecido.</h1>
      </div>
    );
  }

  let apostilaData: ClientViewProps["apostila"] | null = null;

  try {
    // fetch
    const res = await fetch(
      `https://apimaterial.sistemaeditoracapro.com.br/api/apostilas/${id}?populate=*&sort=id:asc`,
      {
        next: { revalidate: 300 },
      }
    );
    if (!res.ok) {
      notFound();
    }

    const json = await res.json();
    apostilaData = json.data?.attributes || null;
  } catch (error) {
    console.error("Erro ao buscar material:", error);
    notFound();
  }

  if (!apostilaData) {
    notFound();
  }

  return <MindMapView apostila={apostilaData} id={id} />;
}
