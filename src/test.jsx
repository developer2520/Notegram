import { SignedIn, SignedOut, SignInButton, UserButton, SignUp } from "@clerk/clerk-react";

export default function App() {
  return (
    <header>
      <SignedIn>
        <SignInButton />
      </SignedIn>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
  )
}