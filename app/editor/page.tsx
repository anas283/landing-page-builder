import { Metadata } from "next"
import EditorLayout from "./components/layout"

export const metadata: Metadata = {
  title: "Editor",
  description: "The web editor",
}

export default function EditorPage() {
  return (
    <EditorLayout />
  )
}