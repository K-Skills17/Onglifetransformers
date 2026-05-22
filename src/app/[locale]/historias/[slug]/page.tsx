import { notFound } from "next/navigation";
import { stories } from "@/content/stories";
import { StoryDetail } from "@/components/sections/story-detail";

export function generateStaticParams() {
  return stories.map((s) => ({ slug: s.slug }));
}

export default async function StoryPage({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const { slug } = await params;
  const story = stories.find((s) => s.slug === slug);

  if (!story) notFound();

  return (
    <main className="pt-24">
      <StoryDetail story={story} />
    </main>
  );
}
