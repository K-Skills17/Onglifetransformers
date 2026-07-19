import { notFound } from "next/navigation";
import { programs } from "@/content/programs";
import { routing } from "@/i18n/routing";
import { ProgramDetail } from "@/components/sections/program-detail";

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    programs.map((p) => ({ locale, slug: p.slug }))
  );
}

export default async function ProgramPage({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const { slug } = await params;
  const program = programs.find((p) => p.slug === slug);

  if (!program) notFound();

  return (
    <main className="pt-24">
      <ProgramDetail program={program} />
    </main>
  );
}
