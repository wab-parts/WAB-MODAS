export default function ProdutoPage({ params }: { params: { slug: string } }) {
  return (
    <main className="p-4">
      <h1 className="text-2xl font-semibold">Produto: {params.slug}</h1>
      {/* TODO: Detalhes do produto */}
    </main>
  );
}
