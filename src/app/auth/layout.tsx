import Header from "./header/header";


 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    
      <div className="w-full">
          <Header />
          {children}
      </div>
     
  );
}