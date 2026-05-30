import { Flex, Grid } from "@/src/components/ui";
import { ContactForm, InfoCardList } from "./_components/contact-sections";

const page = () => {
  return (
    <div className="relative flex flex-col gap-12 lg:gap-16 pb-20">
      <div aria-hidden="true" className="pointer-events-none absolute -left-24 top-8 h-80 w-80 rounded-full bg-brand-primary/10 blur-3xl" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 right-6 h-96 w-96 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] bg-brand-tertiary/15 blur-3xl"
      />

      <Flex as="section" direction="col" align="center" className="text-center gap-4 pt-6 lg:pt-10">
        <h1 className="type-h1 text-balance bg-linear-to-r from-brand-primary via-brand-secondary to-brand-primary bg-clip-text text-transparent">
          Let&apos;s Build Something Together.
        </h1>
        <p className="type-body-lg text-text-secondary max-w-2xl">
          Ready to make waves? Reach out and let&apos;s start crafting your next big idea. We&apos;re all ears and always buoyant.
        </p>
      </Flex>

      <Grid as="section" cols={1} mdCols={2} gap="xl" className="items-start">
        <InfoCardList />
        <ContactForm />
      </Grid>
    </div>
  );
};

export default page;
