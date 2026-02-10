import appsheet from "@/public/assets/icons/appsheet.png";
import calendar from "@/public/assets/icons/calender.png";
import chat from "@/public/assets/icons/chat.png";
import docs from "@/public/assets/icons/docs.png";
import drive from "@/public/assets/icons/drive.png";
import forms from "@/public/assets/icons/forms.png";
import gemini from "@/public/assets/icons/gemini.png";
import gmail from "@/public/assets/icons/gmail.png";
import keep from "@/public/assets/icons/keep.png";
import logo from "@/public/assets/icons/logo.png";
import meet from "@/public/assets/icons/meet.png";
import nestNepal from "@/public/assets/icons/nest_nepal.png";
import notebooklm from "@/public/assets/icons/notebooklm.png";
import sheets from "@/public/assets/icons/sheets.png";
import sites from "@/public/assets/icons/sites.png";
import slides from "@/public/assets/icons/slides.png";
import tasks from "@/public/assets/icons/tasks.png";
import vids from "@/public/assets/icons/vids.png";
import whatsappGreen from "@/public/assets/icons/whatsappgreen.png";
import whatsappPink from "@/public/assets/icons/whatsappink.png";

export const icons = {
  appsheet: { src: appsheet, alt: "AppSheet" },
  calendar: { src: calendar, alt: "Calendar" },
  chat: { src: chat, alt: "Chat" },
  docs: { src: docs, alt: "Docs" },
  drive: { src: drive, alt: "Drive" },
  forms: { src: forms, alt: "Forms" },
  gemini: { src: gemini, alt: "Gemini" },
  gmail: { src: gmail, alt: "Gmail" },
  keep: { src: keep, alt: "Keep" },
  logo: { src: logo, alt: "Logo" },
  meet: { src: meet, alt: "Meet" },
  nestNepal: { src: nestNepal, alt: "Nest Nepal" },
  notebooklm: { src: notebooklm, alt: "NotebookLM" },
  sheets: { src: sheets, alt: "Sheets" },
  sites: { src: sites, alt: "Sites" },
  slides: { src: slides, alt: "Slides" },
  tasks: { src: tasks, alt: "Tasks" },
  vids: { src: vids, alt: "Vids" },
  whatsappGreen: { src: whatsappGreen, alt: "WhatsApp" },
  whatsappPink: { src: whatsappPink, alt: "WhatsApp" },
} as const;

// Google Workspace apps group
export const googleApps = [
  icons.gmail,
  icons.calendar,
  icons.drive,
  icons.docs,
  icons.meet,
] as const;

// All Google Workspace products
export const allGoogleProducts = [
  icons.gmail,
  icons.calendar,
  icons.drive,
  icons.docs,
  icons.sheets,
  icons.slides,
  icons.meet,
  icons.chat,
  icons.forms,
  icons.keep,
  icons.sites,
  icons.tasks,
  icons.appsheet,
  icons.vids,
  icons.gemini,
  icons.notebooklm,
] as const;

export type IconName = keyof typeof icons;
