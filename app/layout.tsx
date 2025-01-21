import "./globals.css";

export const metadata = {
  title: "Hábitos Diários",
  description: "Sistema de hábitos para a mente, financeiro e alma.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 via-purple-900 to-black">
        <main className="w-full flex-1 flex items-center justify-center p-4">
          {children}
        </main>
        <footer className="w-full py-6 text-center text-purple-300">
          © 2025 - Feito com ❤️ por Gustavo
        </footer>
      </body>
    </html>
  );
}
