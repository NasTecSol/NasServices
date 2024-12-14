import EmployeeSteper from "./components/employeesteper";
import { FormProvider } from "./context/formcontext";

export default function CreateEmployee() {
  return (
    <div
      className="ml-[10px] mr-[10px] mt-[10px] mb-[10px]  rounded-[24px] h-[645px] "
      style={{ border: "0.3px solid #B6B6B6" }}
    >
      <FormProvider>
        <EmployeeSteper />
      </FormProvider>
    </div>
  );
}
