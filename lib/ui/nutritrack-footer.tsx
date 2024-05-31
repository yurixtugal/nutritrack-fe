import { LeafyGreen } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

const NutritrackFooter = () => {
  return (
  <>
  <Separator className="bg-green-500 h-[0.5px]" />
  <footer className="p-3 flex flex-row justify-between items-center">
  <Link
          href="/dashboard"
          className="flex items-center gap-2 font-semibold"
          prefetch={false}
        >
          <h1 className="flex space-x-3">
            <LeafyGreen className="text-green-500 h-8 w-8" />{" "}
            <span className="text-2xl">Nutritrack-app</span>
          </h1>
        </Link>
  </footer>
  <div className="pb-3"></div>
  </>
);
}
 
export default NutritrackFooter;