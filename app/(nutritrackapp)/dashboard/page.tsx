"use client"
import { Button } from "@/components/ui/button";
import { useAuth } from "@clerk/nextjs";
import Link from "next/link";

const DashBoard =  () => {
  const { isLoaded, userId, sessionId, getToken } = useAuth();

  return (
    <div className="flex flex-row justify-between">
      <div>
        <h1>Welcome to your dashboard</h1>
        <h2>Your user id is: {userId}</h2>
      </div>
      <Button asChild >
      <Link href="/addMeal/GeneralInformation"> Add Meal </Link>
      </Button>
    </div>
  );
};

export default DashBoard;
