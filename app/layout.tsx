import "@/styles/globals.css";
import clsx from "clsx";
import { Metadata, Viewport } from "next";

import { Providers } from "./providers";

import { Navbar } from "@/components/navbar";
import { fontSans } from "@/config/fonts";
import { siteConfig } from "@/config/site";
import { Image } from "@heroui/image";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "text-foreground bg-background min-h-screen font-sans antialiased",
          fontSans.variable,
        )}
      >
        <Providers
          themeProps={{
            attribute: "class",
            defaultTheme: "light",
            forcedTheme: "light",
          }}
        >
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            <main className="mt-14 flex-grow md:pt-16">{children}</main>

            <footer className="bg-brand-900 flex w-full flex-row items-center justify-between px-[40px] py-[20px] lg:px-[90px]">
              {/* <Link
                isExternal
                className="flex items-center gap-1 text-current"
                href="https://heroui.com?utm_source=next-app-template"
                title="heroui.com homepage"
              >
                <span className="text-default-600">Powered by</span>
                <p className="text-primary">HeroUI</p>
              </Link> */}

              <p className="text-neutral-custom-600 text-[11px] font-bold lg:text-[18px]">
                Copyright © 2025 Qreative Tech
              </p>
              <Image
                src="/qreativeLogoV2.svg"
                alt="Qreative Logo"
                width={214}
                height={52}
              />
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
