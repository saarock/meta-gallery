import BackButtonComponent from "@/components/BackButtonComponent/BackButtonComponent";
import { Metadata } from "next";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Image with meta data",
  description: "See the meta-data of the images",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div>
        <BackButtonComponent />
        {children}
      </div>
      ;
    </>
  );
}
