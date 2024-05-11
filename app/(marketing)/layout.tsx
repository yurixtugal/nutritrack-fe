import MarketingFooter from "./marketing-footer";
import MarketingHeader from "./marketing-header";

type Props = {
  children: React.ReactNode;
};

const MarketingLayout = ({ children }: Props) => {
  return (
    <div className="min-h-screen flex flex-col">
      <MarketingHeader />
      <main className="flex-1 flex flex-col items-center justify-center">
      {children}
      </main>
      <MarketingFooter />
    </div>
  );
}

export default MarketingLayout;