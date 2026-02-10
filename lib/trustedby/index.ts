import can from "@/public/assets/trustedby/can.png";
import dhi from "@/public/assets/trustedby/dhi.png";
import imsgroup from "@/public/assets/trustedby/imsgroup.png";
import keystone from "@/public/assets/trustedby/keystone.png";
import musicnepal from "@/public/assets/trustedby/musicnepal.png";
import nagrik from "@/public/assets/trustedby/nagrik.png";
import nepalgov from "@/public/assets/trustedby/nepalgov.png";
import sitaair from "@/public/assets/trustedby/sitaair.png";

export const trustedByLogos = {
  nepalgov: { src: nepalgov, alt: "Government of Nepal - Ministry of Health" },
  can: { src: can, alt: "CAN" },
  sitaair: { src: sitaair, alt: "Sita Air" },
  musicnepal: { src: musicnepal, alt: "Music Nepal" },
  nagrik: { src: nagrik, alt: "Nagarik" },
  imsgroup: { src: imsgroup, alt: "IMS Group" },
  dhi: { src: dhi, alt: "DHI" },
  keystone: { src: keystone, alt: "Keystone" },
} as const;

export const trustedByList = [
  trustedByLogos.nepalgov,
  trustedByLogos.can,
  trustedByLogos.sitaair,
  trustedByLogos.musicnepal,
  trustedByLogos.nagrik,
  trustedByLogos.imsgroup,
  trustedByLogos.dhi,
  trustedByLogos.keystone,
];

export type TrustedByLogoName = keyof typeof trustedByLogos;
