import SignUp from "@/components/SignUp"
import ThreeDBackground from "@/components/ThreeDBackground"

export default function SignUpPage({ params }: { params: { type: string } }) {
  return (
    <>
      <ThreeDBackground />
      <SignUp type={params.type as "model" | "client"} />
    </>
  )
}

