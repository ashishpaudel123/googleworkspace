import Image from "next/image";
import { icons } from "@/lib/icons";
import CountdownTimer from "@/components/ui/countdownTimer";
import ContactSalesButton from "@/components/ui/contactSalesButton";

export default function Header() {
  return (
    <header>
      <div className="flex items-center justify-between px-8 py-4">
        <a className="block" href="#">
          <Image src={icons.logo.src} alt={icons.logo.alt} width={180} />
        </a>
        <div className="hidden md:block">
          <CountdownTimer />
        </div>
        <ContactSalesButton variant="green" />
      </div>
      <div className="text-center mt-4 md:hidden">
        <CountdownTimer />
      </div>
    </header>
  );
}
