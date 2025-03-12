"use client"

import { Button } from "@/components/ui/button"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Monitor, Smartphone } from "lucide-react"
import DesktopPreview from "./desktop-preview"
import MobilePreview from "./mobile-preview"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function EditorLayout() {
  const [title, setTitle] = useState("Your Awesome Product");
  const [subtitle, setSubtitle] = useState("Create a high-converting landing page in minutes.");
  const [ctaText, setCtaText] = useState("Get Started");
  const [ctaLink, setCtaLink] = useState("#");

  const generateHTML = () => {
    return `<!DOCTYPE html>
      <html lang='en'>
      <head>
      <meta charset='UTF-8'>
      <meta name='viewport' content='width=device-width, initial-scale=1.0'>
      <title>${title}</title>
      <style>
        body { font-family: Arial, sans-serif; text-align: center; padding: 50px; }
        h1 { color: #333; }
        p { color: #666; }
        a { background-color: #007bff; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; }
      </style>
      </head>
      <body>
        <h1>${title}</h1>
        <p>${subtitle}</p>
        <a href='${ctaLink}'>${ctaText}</a>
      </body>
      </html>`;
  };

  const downloadHTML = () => {
    const element = document.createElement("a");
    const file = new Blob([generateHTML()], { type: "text/html" });
    element.href = URL.createObjectURL(file);
    element.download = "landing_page.html";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="px-4">     
      <div className="hidden h-full flex-col md:flex">
        <div className="container flex flex-col items-start justify-between space-y-2 py-4 sm:flex-row sm:items-center sm:space-y-0 md:h-16">
          <h2 className="text-lg font-semibold">Playground</h2>
          <div className="ml-auto flex w-full space-x-2 sm:justify-end">
            <Button variant="secondary">View code</Button>
            <Button variant="secondary" onClick={downloadHTML}>Download code</Button>
            <Button>Save</Button>
          </div>
        </div>
        <Separator />
        <Tabs defaultValue="desktop" className="flex-1">
          <div className="container h-full py-6">
            <div className="grid h-full items-stretch gap-6 md:grid-cols-[1fr_300px]">
              <div className="hidden flex-col space-y-4 sm:flex md:order-2">
                <div className="grid gap-2">
                  <HoverCard openDelay={200}>
                    <HoverCardTrigger asChild>
                      <span className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        Mode
                      </span>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-[320px] text-sm" side="left">
                      Choose the interface that best suits your task.
                    </HoverCardContent>
                  </HoverCard>
                  <TabsList className="grid grid-cols-2">
                    <TabsTrigger value="desktop">
                      <span className="sr-only">Desktop</span>
                      <Monitor />
                    </TabsTrigger>
                    <TabsTrigger value="mobile">
                      <span className="sr-only">Mobile</span>
                      <Smartphone />
                    </TabsTrigger>
                  </TabsList>
                  <div className="flex flex-col gap-3 my-3">
                    <div className="flex flex-col gap-2">
                      <Label>Page Title</Label>
                      <Input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="border p-2 w-full mb-2"
                        placeholder="Page Title"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <Label>Subtitle</Label>
                      <Textarea
                        value={subtitle}
                        onChange={(e) => setSubtitle(e.target.value)}
                        className="border p-2 w-full mb-2"
                        placeholder="Subtitle"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <Label>CTA Button Text</Label>
                      <Input
                        type="text"
                        value={ctaText}
                        onChange={(e) => setCtaText(e.target.value)}
                        className="border p-2 w-full mb-2"
                        placeholder="CTA Button Text"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <Label>CTA Link</Label>
                      <Input
                        type="text"
                        value={ctaLink}
                        onChange={(e) => setCtaLink(e.target.value)}
                        className="border p-2 w-full mb-4"
                        placeholder="CTA Link"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:order-1">
                <TabsContent value="desktop" className="mt-0 border-0 p-0">
                  <DesktopPreview title={title} subtitle={subtitle} ctaText={ctaText} ctaLink={ctaLink} />
                </TabsContent>
                <TabsContent value="mobile" className="mt-0 border-0 p-0">
                  <MobilePreview />
                </TabsContent>
              </div>
            </div>
          </div>
        </Tabs>
      </div>
    </div>
  )
}