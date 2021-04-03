import { FC, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

type Props = {
  onSubmit: Function;
};

const SearchForm: FC<Props> = ({ onSubmit }) => {
  const classes = useStyles();
  const [word, setWord] = useState("");
  const card = document.getElementById("card");
  const onFormSubmit = (e: any) => {
    e.preventDefault();
    if (card) {
      card.classList.add("open");
    }
    onSubmit(word);
  };
  return (
    <>
      <Paper
        id="searchForm"
        onSubmit={onFormSubmit}
        component="form"
        className={classes.root}
      >
        <InputBase
          id="searchInput"
          type="text"
          name="search"
          value={word}
          onChange={(e) => {
            setWord(e.target.value);
          }}
          className={classes.input}
          placeholder="Search"
          inputProps={{ "aria-label": "search" }}
        />
        <IconButton
          type="submit"
          className={classes.iconButton}
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>
      </Paper>
    </>
  );
};

export default SearchForm;
