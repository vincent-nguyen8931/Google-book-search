
import React, { useEffect, useState } from "react";

import API from "../utils/API";
import { Input, TextArea, FormBtn } from "../components/Form";





function searchBooks() {
    // Setting our component's initial state
    const [books, setBooks] = useState([])
    const [formObject, setFormObject] = useState({})

    // Load all books and store them with setBooks
    useEffect(() => {
        loadBooks()
    }, [])

    // Loads all books and sets them to books
    function loadBooks() {
        API.getBooks()
            .then(res =>
                setBooks(res.data)
            )
            .catch(err => console.log(err));
    };


    return (
        <Container fluid>
            <Row>
                <Col size="md-6">
                    <Jumbotron>
                        <h1>(React) Google Books Search</h1>
                    </Jumbotron>
                    {/* <form>
                        <Input
                            onChange={() => { }}
                            name="title"
                            placeholder="Title (required)"
                        />
                        <Input
                            onChange={() => { }}
                            name="author"
                            placeholder="Author (required)"
                        />
                        <TextArea
                            onChange={() => { }}
                            name="synopsis"
                            placeholder="Synopsis (Optional)"
                        />
                        <FormBtn
                            disabled={!(formObject.author && formObject.title)}
                            onClick={() => { }}
                        >
                            Submit Book
                </FormBtn>
                    </form>
                </Col>
                <Col size="md-6 sm-12">
                    <Jumbotron>
                        <h1>Books On My List</h1>
                    </Jumbotron>
                    {books.length ? (
                        <List>
                            {books.map(book => {
                                return (
                                    <ListItem key={book._id}>
                                        <a href={"/books/" + book._id}>
                                            <strong>
                                                {book.title} by {book.author}
                                            </strong>
                                        </a>
                                        <DeleteBtn onClick={() => { }} />
                                    </ListItem>
                                );
                            })}
                        </List>
                    ) : (
                            <h3>No Results to Display</h3>
                        )} */}
                </Col>
            </Row>
        </Container>
    );
}


export default searchBooks;