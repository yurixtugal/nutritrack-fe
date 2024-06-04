import { LeafyGreen } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { auth } from "@clerk/nextjs/server";
import { UserButton } from "@clerk/nextjs";

const linksHeaders = [
  {
    name: "dashboard",
    link: "/dashboard",
  },
  { name: "meals", link: "/meals" },
];

const NutritrackHeader = () => {
  const { userId } = auth();
  
  return (
    <>
      <header className="p-3 flex flex-row justify-between items-center">
        <div className="flex items-center gap-4">
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
          {userId !== null && (
            <nav className="flex items-center gap-4 pt-[10px]">
              
              <Link
                href="/dashboard"
                className="hover:underline"
                prefetch={false}
              >
                Dashboard
              </Link>
              <Link href="/meals" className="hover:underline" prefetch={false}>
                List Meals
              </Link>
              <Link
                href="/addMeal/GeneralInformation"
                className="hover:underline"
                prefetch={false}
              >
                Add Meal
              </Link>
            </nav>
          )}
        </div>

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
                <UserButton showName={true} />
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

export default NutritrackHeader;
