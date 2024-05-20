import NutritrackFooter from "@/lib/ui/nutritrack-footer";
import NutritrackHeader from "@/lib/ui/nutritrack-header";

type Props = {
  children: React.ReactNode;
};

const MarketingLayout = ({ children }: Props) => {
  return (
    <div className="min-h-screen flex flex-col">
      <NutritrackHeader />
      <main className="flex-1 flex flex-col p-3">
        {children}
      </main>
      <NutritrackFooter />
      
    </div>
  );
};

export default MarketingLayout;
