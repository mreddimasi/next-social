import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    // top-40 in tailwind is 96px, so calc(100vh-96px) is the height of the viewport minus 96px
    <div className="h-[calc(100vh-96px)] flex justify-center items-center">

      <SignIn />
    </div>
  );
}