import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ClerkProvider } from "@clerk/clerk-react";
import { Home, Login, Dashboard, SignUp } from "./pages/pages";

const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!clerkPubKey) {
  throw new Error("Missing Publishable Key");
}

export default function App() {
  return (
    <ClerkProvider publishableKey={clerkPubKey}>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          {/* <Route path="/about" element={<About />} /> */}
          {/* <Route
            path="/dashboard"
            element={
              <>
                <SignedIn>
                  <AdminLogin />
                </SignedIn>
                <SignedOut>
                  <Home />
                </SignedOut>
              </>
            }
          /> */}

          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </BrowserRouter>
    </ClerkProvider>
  );
}
