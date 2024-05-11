import { LeafyGreen } from "lucide-react";
import { Button } from "@/components/ui/button"
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

const MarketingFooter = () => {
  return (
  <>
  <Separator className="bg-green-500 h-[0.5px]" />
  <footer className="p-3 flex flex-row justify-between items-center">
    <h1 className="flex space-x-3"><LeafyGreen className="text-green-500 h-8 w-8" /> <span className="text-2xl">Nutritrack</span></h1>
  </footer>
  <div className="pb-3"></div>
  </>
);
}
 
export default MarketingFooter;