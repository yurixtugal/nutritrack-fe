import { Loader2 } from "lucide-react";
import { ClerkLoaded, ClerkLoading, SignIn, SignUp } from "@clerk/nextjs";
import Image from "next/image";

export default function Page() {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      <div className="h-full lg:flex flex-col items-center justify-center px-4 ">
        <div className="text-center space-y-4">
          <h1 className="font-bold text-3xl text-[#2E2A47]">Welcome!</h1>
          <p className="text-base text-[#7E8CA0]">
            Create an account to get started with Nutritrack
          </p>
        </div>
        <div className="flex items-center justify-center mt-8">
          <ClerkLoaded>
          <SignUp path="/sign-up" fallbackRedirectUrl="/configuser" />
          </ClerkLoaded>
          <ClerkLoading>
            <Loader2 className="animate-spin text-muted-foreground" />
          </ClerkLoading>
        </div>
      </div>
      <div className="h-full hidden lg:flex items-center justify-center bg-gradient-to-r from-green-200 to-green-400">
        <Image src="/logo_nutritrack.png" width={500} height={500} alt="Nutritrack Logo" />
      </div>
    </div>
  );
}
