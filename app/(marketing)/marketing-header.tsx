import { LeafyGreen } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { auth } from "@clerk/nextjs/server";
import { UserButton } from "@clerk/nextjs";

const MarketingHeader = () => {
  const { userId, getToken } = auth();

  console.log(userId, getToken);

  return (
    <>
      <header className="p-3 flex flex-row justify-between items-center">
        <h1 className="flex space-x-3">
          <LeafyGreen className="text-green-500 h-8 w-8" />{" "}
          <span className="text-2xl">Nutritrack</span>
        </h1>
        <nav className="">
          {userId === null && (
            <ul className="flex space-x-3">
              <li>
                <Button asChild variant="outline">
                  <Link href="/sign-in">Login</Link>
                </Button>
              </li>
              <li>
                <Button asChild variant="outline">
                  <Link href="/sign-up">Sign Up</Link>
                </Button>
              </li>
            </ul>
          )}

          {userId !== null && (
            <ul className=" space-x-3 inline-flex text-2xl">
              <li>
                <UserButton  showName={true} />
              </li>
            </ul>
          )}

        </nav>
      </header>
      <Separator className="bg-green-500 h-[0.5px]" />
      <div className="pb-3"></div>
    </>
  );
};

export default MarketingHeader;
