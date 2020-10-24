/* eslint-disable no-lone-blocks */
import React, { Component } from "react";
import BookItem from "./BookItem";
import Buttons from "./Buttons";
import SearchBook from "./Search";
import classes from "./Affairs.module.css";

///// Game of thrones API
export type responseType = {
  publisher: string;
  name: string;
  id: number;
};

export type bookStateType = {
  bookList: Array<responseType>;
  filter: string;
  search: string;
};
export type BookFilterType = string;

const getBooks = async (url: string) => {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Wow! something gonna wrong");
  }
  const booksInfo = await res.json();
  let books = booksInfo.map((el: responseType, i: number) => ({
    name: el.name,
    publisher: el.publisher,
    id: i,
  }));
  return books;
};

export default class AlternativeAffairs extends Component {
  state: bookStateType = {
    bookList: [],
    filter: "all",
    search: "",
  };

  componentDidMount() {
    getBooks("https://anapioficeandfire.com/api/books/").then((books) =>
      this.setState({
        bookList: books,
      })
    );
  }

  getIndex(arr: Array<any>, i: number) {
    return arr.findIndex((el: responseType) => el.id === i);
  }

  onDeleted = (bookId: number) => {
    const list = this.state.bookList;
    let index = this.getIndex(list, bookId);
    this.setState({
      bookList: [...list.slice(0, index), ...list.slice(index + 1)],
    });
  };

  onFiltered = (arr: Array<any>, filter: string) => {
    switch (filter) {
      case "All":
        {
          return arr;
        }
        break;
      case "Bantam Books":
        {
          return arr.filter(
            (el: responseType) => el.publisher === "Bantam Books"
          );
        }
        break;
      case "Dabel Brothers":
        {
          return arr.filter(
            (el: responseType) => el.publisher === "Dabel Brothers Publishing"
          );
        }
        break;
      case "Marvel":
        {
          return arr.filter((el: responseType) => el.publisher === "Marvel");
        }
        break;

      case "Tor Publishing":
        {
          return arr.filter(
            (el: responseType) =>
              el.publisher === "Tor Fantasy" || el.publisher === "Tor Books"
          );
        }
        break;
      default:
        return arr;
    }
  };

  onChangeFilter = (filter: string) => {
    this.setState({
      filter,
    });
  };

  onSearch = (arr: Array<any>, search: string) => {
    if (!search) {
      return arr;
    } else {
      return arr.filter((el: responseType) => {
        return el.name.toLowerCase().indexOf(search.toLowerCase()) > 1;
      });
    }
  };

  onSearchChange = (search: string) => {
    this.setState({
      search,
    });
  };

  renderBookList(arr: Array<responseType>) {
    return arr.map((el: responseType, i: number) => {
      return (
        <BookItem
          key={el.name + i}
          name={el.name}
          publisher={el.publisher}
          id={i}
          bookId={el.id}
          onDeleted={this.onDeleted}
        />
      );
    });
  }
  render() {
    const { bookList, filter, search } = this.state;
    const searchedBook = this.onSearch(bookList, search);
    const filteredBooks = this.onFiltered(searchedBook, filter);

    let isDataLoaded = bookList
      ? this.renderBookList(filteredBooks)
      : "...loaded";

    return (
      <>
        <SearchBook onSearchChange={this.onSearchChange} />
        <ul className={classes.affairList}>{isDataLoaded}</ul>
        <div className={classes.wrapper}>
          <p>Sort by publisher</p>
          <div className={classes.sorted}>
            <Buttons filter={filter} onClick={this.onChangeFilter} />
          </div>
        </div>
      </>
    );
  }
}
