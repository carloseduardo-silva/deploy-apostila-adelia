import { type NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ tag: string }> }
): Promise<NextResponse> {
  const { tag } = await params;

  const API_URL = process.env.API_URL;
  const API_TOKEN = process.env.API_TOKEN;
  const timeRevalidate = 600;

  if (!tag.match(/^[A-Z0-9]+$/i)) {
    return NextResponse.json({ error: "Tag inválida" }, { status: 400 });
  }

  const res = await fetch(
    `${API_URL}/api/apostilas?filters[tag][$eq]=${tag}&populate=*`,
    {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
      },
      next: { revalidate: timeRevalidate },
    }
  );

  if (!res.ok) {
    return NextResponse.json(
      { error: "Erro ao buscar dados" },
      { status: res.status }
    );
  }

  const json = await res.json();
  const apostilaData = json.data?.[0]?.attributes || null;

  if (!apostilaData) {
    return NextResponse.json(
      { error: "Apostila não encontrada" },
      { status: 404 }
    );
  }

  return NextResponse.json(apostilaData);
}
