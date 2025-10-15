export default function ProdukLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center justify-center gap-4">
      <div className="inline-block w-full">{children}</div>
    </section>
  );
}
