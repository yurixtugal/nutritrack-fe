import NutritrackFooter from "@/lib/ui/nutritrack-footer";
import NutritrackHeader from "@/lib/ui/nutritrack-header";

type Props = {
  children: React.ReactNode;
};

const MarketingLayout = ({ children }: Props) => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="hidden md:flex"></div> {/* This is a fix to let the header works with responsive md:flex
      TODO: Find a better way to fix this because in NutritrackHeader we are using md:flex and with this fix it will not work
      */}
      <NutritrackHeader />
      <main className="flex-1 flex flex-col p-3">
        {children}
      </main>
      <NutritrackFooter />
      
    </div>
  );
};

export default MarketingLayout;
