import { LandingPagePreviewProps } from "../data/models";

export default function DesktopPreview({ title, subtitle, ctaText, ctaLink }: LandingPagePreviewProps) {
  return (
    <div className="border rounded p-4 text-center">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="text-gray-600">{subtitle}</p>
      <a href={ctaLink} className="bg-blue-500 text-white px-4 py-2 rounded inline-block mt-2">
        {ctaText}
      </a>
    </div>
  )
}