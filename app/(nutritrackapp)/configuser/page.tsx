import { initProfile } from "@/lib/authLib";
import { redirect } from "next/navigation";

const Setup =  async () => {
  const currentUser = await initProfile();

  if (currentUser) {
    return redirect("/dashboard");
  }
  return (
    <div>
      <h1>There was a problem with user</h1>
    </div>
  );
}

export default Setup;