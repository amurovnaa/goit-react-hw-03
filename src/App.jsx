import { useState, useEffect } from "react";
import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";

function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem("contacts");
    return savedContacts
      ? JSON.parse(savedContacts)
      : [
          { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
          { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
          { id: "id-3", name: "Eden Clements", number: "645-17-79" },
          { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
        ];
  });
  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);
  const [filter, setFilter] = useState("");

  const handleFilterChange = (value) => {
    setFilter(value);
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().trim().includes(filter.toLowerCase())
  );
  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
        <SearchBox value={filter} onChange={handleFilterChange} />
        <ContactList contacts={filteredContacts} />
      </div>
    </>
  );
}

export default App;
