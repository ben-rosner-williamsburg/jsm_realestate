import { ChakraProvider } from "@chakra-ui/react";
import "./globals.css"; // Ensure your CSS file path is correct

// Metadata (optional, for the App Router)
export const metadata = {
  title: "Real Estate",
  description: "Find your dream home",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ChakraProvider>
          <div style={{ maxWidth: "1280px", margin: "auto" }}>
            <header>Navbar</header>
            <main>{children}</main>
            <footer>Footer</footer>
          </div>
        </ChakraProvider>
      </body>
    </html>
  );
}
