import { auth0 } from "@/lib/auth0";
import LoginButton from "@/components/LoginButton";
import LogoutButton from "@/components/LogoutButton";
import Profile from "@/components/Profile";
import LandingBefore from "@/components/LandingBefore";
import LandingAfter from "@/components/LandingAfter";

export default async function Home() {
  const session = await auth0.getSession();
  const user = session?.user;

  return (<>
 {!user && <LandingBefore/>}
 {user && <LandingAfter />}

</>
  );
}