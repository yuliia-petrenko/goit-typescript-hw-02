import { ChangeEvent, FC, FormEvent, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import toast, { Toaster } from "react-hot-toast";
import css from "./SearchBar.module.css";

interface SearchBarProps {
  onSubmit: (query: string) => void;
}

const SearchBar: FC<SearchBarProps> = ({ onSubmit }) => {
  const [query, setQuery] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleFormSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!query.trim()) {
      toast("Please enter some text to get a result!");
      return;
    }
    onSubmit(query);
    setQuery("");
  };

  return (
    <header className={css.header}>
     <Toaster
          position="top-center"
          reverseOrder={false}
          gutter={8}
          containerClassName=""
          containerStyle={{}}
          toastOptions={{
            className: '',
            duration: 3000,
            style: {
              border: '1px solid #EF4040',
              background: '#EF4040',
              color: '#FAFAFB',
            },
          }}
        />
      <form className={css.searchForm} onSubmit={handleFormSubmit}>
        <input
          className={css.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
          onChange={handleChange}
        />
        <button className={css.searchBtn} type="submit">
          <IoIosSearch  size={'20px'} />
        </button>
        
      </form>
    </header>
  );
};

export default SearchBar;
