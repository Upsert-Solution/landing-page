import Image from "next/image";
import { Flex } from "./ui";

const Changes = () => {
  return (
    <Flex as="section" className="flex-col items-center  justify-center mt-5 text-center">
      <Image src="/images/changes_on_the_way_illustration.svg" width={500} height={500} alt="Changes" />
      <h1 className="text-5xl bg-linear-to-r from-brand-primary to-brand-secondary text-transparent bg-clip-text">Big changes are on the way.</h1>
      <p>We&apos;re redesigning our landing page to give you a better experience. Check back soon — it&apos;ll be worth the wait.</p>
    </Flex>
  );
};

export default Changes;
