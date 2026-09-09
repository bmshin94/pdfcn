import type { NextPageIntlayer } from "next-intlayer";

const Page: NextPageIntlayer = async ({ params }) => {
  const { locale } = await params;

  return (
    <main>
      <h1>{locale}</h1>
      <p>Get started by editing this page.</p>
    </main>
  );
};

export default Page;
