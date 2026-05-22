import { z } from "zod";

export const Program = z.object({
  slug: z.string(),
  title: z.string(),
  oneLine: z.string(),
  problem: z.string(),
  approach: z.string(),
  outcomes: z.array(z.string()),
  reach: z.object({
    metric: z.string(),
    value: z.number(),
    unit: z.string(),
  }),
  hero: z.string(),
  gallery: z.array(z.string()),
  status: z.enum(["ongoing", "completed", "planned"]),
});

export const Story = z.object({
  slug: z.string(),
  name: z.string(),
  place: z.string(),
  program: z.string(),
  pullQuote: z.string(),
  body: z.string(),
  portrait: z.string(),
  date: z.string(),
});

export const ImpactMetric = z.object({
  label: z.string(),
  value: z.number(),
  unit: z.string().optional(),
  since: z.string(),
  source: z.string().optional(),
});

export const TimelineEvent = z.object({
  date: z.string(),
  title: z.string(),
  description: z.string(),
  image: z.string().optional(),
  type: z.enum(["milestone", "program", "recognition", "partnership"]),
});

export const Partner = z.object({
  name: z.string(),
  logo: z.string(),
  type: z.enum(["funder", "partner", "government", "academic"]),
  url: z.string().optional(),
});

export type Program = z.infer<typeof Program>;
export type Story = z.infer<typeof Story>;
export type ImpactMetric = z.infer<typeof ImpactMetric>;
export type TimelineEvent = z.infer<typeof TimelineEvent>;
export type Partner = z.infer<typeof Partner>;
