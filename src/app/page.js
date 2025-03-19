// Import components
import SignUp from "@/components/signup/page";
import Home from "@/components/main/page";

// Rename the default export to avoid conflicts
export default function MainPage() {
  return (
    <div>
      <SignUp />
      <Home />
    </div>
  );
}