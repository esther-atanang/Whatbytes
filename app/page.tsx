"use client"
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()
  return (
    <main className="p-8 h-full min-h-[100vh]">
      <h1 className='capitalize text-gray-500 font-medium mb-6'>Home</h1>
      <div className="h-full flex flex-col gap-5 items-center justify-center mt-28">
      <p className="text-center text-4xl text-balance">
         Welcome to Whatbytes Skill Test for Interns
      </p>
          <Button onClick={()=>router.push("/dashboard")}>Visit Dashboard <ArrowRight/> </Button>
      </div>
    </main>
  );
}
