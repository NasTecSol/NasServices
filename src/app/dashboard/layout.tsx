import Dashheader from "./header/dashheader";
import Dashnav from "./navbar/dashnav";

 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Dashheader />
      <div className="flex">
        <div>
          <Dashnav />
        </div>
        <div className="w-full">
          {children}
        </div>
      </div>
    </div>
  );
}