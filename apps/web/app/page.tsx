"use client";

import {
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  LoginForm,
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@repo/ui";


export default function Home() {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh" }}>
      <main>
        <LoginForm />

        <Button variant="ghost">Open alert</Button>
        <div className="flex flex-wrap items-center gap-2 md:flex-row">
          <Button variant={"outline"}>Button</Button>
        </div>
      </main>
      
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <div className="mb-8">
          <Button asChild size="lg">
            <a href="/portfolio">View Portfolio</a>
          </Button>
        </div>
        
        {/* Avatar Examples */}
        <div className="flex items-center gap-4 mb-6">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage src="https://github.com/vercel.png" alt="@vercel" />
            <AvatarFallback>VC</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
        </div>
        
        <Card className="w-96">
          <CardHeader>
            <CardTitle>Test Card Component</CardTitle>
            <CardDescription>
              This is a test of the shadcn/ui Card component with Tailwind CSS
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              This card was created using shadcn/ui CLI and is styled with
              Tailwind CSS!
            </p>
          </CardContent>
        </Card>
    </div>
  );
}
