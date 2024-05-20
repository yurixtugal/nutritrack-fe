import { UserButton } from "@clerk/nextjs";
import { getCurrentProfile } from "@/lib/authLib"; 


const DashBoard = () => {
  const userId = getCurrentProfile();
  return (
    <div>
      <h1>DashBoard app</h1>
    </div>
  )
}
 
export default DashBoard;