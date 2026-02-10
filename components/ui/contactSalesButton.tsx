import Image from "next/image";
import whatsappgreen from "@/public/assets/icons/whatsappgreen.png";
import whatsappink from "@/public/assets/icons/whatsappink.png";
const VARIANTS = {
  green: {
    wrapper: "border-green-500 bg-green-50 text-green-600",
    iconBg: "bg-green-500",
    icon: whatsappgreen,
  },
  red: {
    wrapper: "border-pink-500 bg-pink-50 text-pink-500",
    iconBg: "bg-pink-500",
    icon: whatsappink,
  },
};

export default function ContactSalesButton({
  variant = "green",
}: {
  variant: keyof typeof VARIANTS;
}) {
  const styles = VARIANTS[variant];

  return (
    <button
      className={`flex items-center gap-3 px-4 py-2 rounded-xl border text-md font-medium cursor-pointer transition hover:-translate-y-0.5 ${styles.wrapper}`}
    >
      <span
        className={`w-6 h-6 flex items-center justify-center rounded-full ${styles.iconBg}`}
      >
        <Image src={styles.icon} alt="WhatsApp" width={18} height={18} />
      </span>
      Contact Sales
    </button>
  );
}
