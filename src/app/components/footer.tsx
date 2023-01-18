"use client"
import { FaGithub, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa"

function footer() {
  function handleSocialLinks(type: string) {
    switch (type) {
      case "git":
        window.open("https://github.com/Umair2311", "_blank")
      case "facebook":
        window.open("https://www.facebook.com", "_blank")
      case "linkedin":
        window.open(
          "https://www.linkedin.com/feed/?trk=homepage-basic_google-one-tap-submit",
          "_blank"
        )
      default:
    }
  }
  return (
    <footer className="bg-gray-800 shrink-0 z-10">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex items-center justify-center sm:items-stretch sm:justify-start">
            &#169; 2023 by Umair Saeed
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <FaGithub
              onClick={() => handleSocialLinks("git")}
              className="text-2xl mx-2 cursor-pointer hover:text-blue-500"
            />
            <FaFacebook
              onClick={() => handleSocialLinks("facebook")}
              className="text-2xl mx-2 cursor-pointer hover:text-blue-500"
            />
            <FaLinkedin
              onClick={() => handleSocialLinks("linkedin")}
              className="text-2xl mx-2 cursor-pointer hover:text-blue-500"
            />
            <FaTwitter className="text-2xl mx-2 cursor-pointer hover:text-blue-500" />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default footer
