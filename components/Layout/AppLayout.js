// ***** start - imports from files *****
import Header from "./Header";
// ***** end - imports from files *****

const AppLayout = ({ children, cartData }) => {
  return (
    <main>
      <Header cartData={cartData} />
      {children}
    </main>
  );
};

export default AppLayout;