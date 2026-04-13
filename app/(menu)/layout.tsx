import Banner from '../components/Banner';
import MenuFooter from '../components/MenuFooter';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="md:mx-auto md:max-w-4xl">
      <div className="mb-[100px]">
        <Banner className="h-[185px]" BannerTitleClass="top-[65%]" />
        {children}
      </div>
    </div>
  );
}
