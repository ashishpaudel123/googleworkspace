import Image from "next/image";
import discountBg from "@/public/assets/images/discount.png";

type DiscountTicketProps = {
  topLabel: string;
  bottomLabel: string;
  value: string;
  isPrice?: boolean;
  className?: string;
};

export default function DiscountTicket({
  topLabel,
  bottomLabel,
  value,
  isPrice = false,
  className,
}: DiscountTicketProps) {
  return (
    <div className={`relative inline-block ${className}`}>
      <Image
        src={discountBg}
        alt="Discount ticket"
        width={260}
        height={180}
        priority
      />

      <div className="absolute inset-0 flex items-center justify-center gap-4 px-6 text-white">
        <div className="text-sm font-semibold leading-tight text-center">
          {topLabel}
          <br />
          {bottomLabel}
        </div>

        <div className="h-10 w-px bg-white/50" />

        <div className="flex flex-col items-end">
          <span className="text-4xl font-bold">
            {isPrice && <span className="mr-1 text-sm">Rs.</span>}
            {value}
          </span>
        </div>
      </div>
    </div>
  );
}
