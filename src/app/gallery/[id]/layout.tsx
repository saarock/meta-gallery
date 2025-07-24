import BackButtonComponent from "@/components/BackButtonComponent/BackButtonComponent";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>
    <BackButtonComponent/>
    {children}
    </div>;
}
