import { cn } from "@/lib/utils";
import Header from "@/components/organisms/Header";
// import Footer from "@/components/organisms/Footer";

type Props = {
  className?: string;
  children: React.ReactNode;
};

export default function SingleColumnLayout({ className, children }: Props) {
  return (
    <div className="md:mx-auto max-w-screen-sm ">
      <Header />
      <main
        className={cn(
          "relative w-full h-[calc(100vh-52px)] mx-auto my-0 ",
          className
        )}
      >
        {children}
      </main>
      {/* <Footer /> */}
    </div>
  );
}
