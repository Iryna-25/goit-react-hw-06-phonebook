import ContactForm from "./Components/ContactForm";
import ContactList from "./Components/ContactList";
import Filter from "./Components/Filter";
import Wrapper from "./wrapper.styled";
import { useSelector } from "react-redux";

const App = () => {
  const visibleContacts = useSelector((state) => state.contacts.items);
  return (
    <Wrapper>
      <ContactForm />

      {visibleContacts.length > 0 && (
        <div>
          <Filter />
          <ContactList />
        </div>
      )}
    </Wrapper>
  );
};

export default App;
