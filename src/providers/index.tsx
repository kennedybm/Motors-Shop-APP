import { ReactNode } from "react";
import { ModalProvider } from "./Modal";
import { ApiProvider } from "./Api";
import { HeaderProvider } from "./HeaderProvider";

export interface IProviders {
  children: ReactNode;
}
const Providers = ({ children }: IProviders) => {
  return (
    <HeaderProvider>
      <ModalProvider>
        <ApiProvider>{children}</ApiProvider>
      </ModalProvider>
    </HeaderProvider>
  );
};
export default Providers;
