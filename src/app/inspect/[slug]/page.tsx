export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug;

  return (
    <div className="container">
      <div className="w-full border border-red-600 text-white">tes</div>
    </div>
  );
}
