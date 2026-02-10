import enterprises from "@/public/assets/images/enterprises.png";
import googleWorkspaceProducts from "@/public/assets/images/google_workspace_products.png";
import newBusiness from "@/public/assets/images/newbusiness.png";
import rainbowBg from "@/public/assets/images/rainbowbg.png";
import smallBusiness from "@/public/assets/images/smallbusiness.png";
import women from "@/public/assets/images/women.png";

export const images = {
  enterprises: { src: enterprises, alt: "Enterprises" },
  googleWorkspaceProducts: {
    src: googleWorkspaceProducts,
    alt: "Google Workspace Products",
  },
  newBusiness: { src: newBusiness, alt: "New Business" },
  rainbowBg: { src: rainbowBg, alt: "Rainbow Background" },
  smallBusiness: { src: smallBusiness, alt: "Small Business" },
  women: { src: women, alt: "Women" },
};

export const businessImages = [
  images.enterprises,
  images.newBusiness,
  images.smallBusiness,
];

export const allImages = Object.values(images);

export type ImageName = keyof typeof images;
