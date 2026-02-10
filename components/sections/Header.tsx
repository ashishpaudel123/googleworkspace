import Image from "next/image";
import logo from "@/public/assets/icons/logo.png";
import CountdownTimer from "@/components/ui/countdownTimer";
import ContactSalesButton from "@/components/ui/contactSalesButton";

export default function Header() {
  return (
    <header>
      <div className="flex items-center justify-between px-8 py-4 bg-background">
        <a className="block" href="#">
          <Image src={logo} alt="Logo" width={180} />
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
