import { cookies } from "next/headers";
import { setRequestLocale } from "next-intl/server";
import IntroExperience from "@/components/IntroExperience";
import Site from "@/components/Site";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const cookieStore = await cookies();
  const introSeen = cookieStore.get("binova-intro")?.value === "1";

  return (
    <main className="relative">
      <IntroExperience initialSeen={introSeen}>
        <Site />
      </IntroExperience>
    </main>
  );
}
