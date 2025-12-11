import "../styles/globals.css";
import theme from "@/config/theme";

export default function FrontLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ background: theme.colors.background }}>
      {children}
    </div>
  );
}
