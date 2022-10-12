package com.timlarramore.bookclub.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.timlarramore.bookclub.models.Book;
import com.timlarramore.bookclub.models.User;
import com.timlarramore.bookclub.repositories.BookRepository;

@Service
public class MainService {
	
	@Autowired
	private BookRepository bookRepo;
	
	//find all books
	public List<Book> allBooks(){
		return bookRepo.findAll();
	}
	//find 1 book
	public Book findBook(Long id) {
		Optional<Book> optionalBook= bookRepo.findById(id);
		if(optionalBook.isPresent()) {
			return optionalBook.get();
		} else {
			return null;
		}
	}
	// create books
	public Book createBook(Book book) {
		return bookRepo.save(book);
	}
	
	//update
	public Book updateBook(Book book) {
		return bookRepo.save(book);
	}
	
	//delete
	public void deleteBook (long id) {
		Optional<Book> optionalBook= bookRepo.findById(id);
		if(optionalBook.isPresent()) {
			bookRepo.deleteById(id);
		}
	}
	//unborrowed books
	public List<Book> unborrowedBooks(User user) {
		return bookRepo.findByBorrowerIdIsOrUserIdIs(null, user.getId());
	}
	public List<Book> borrowedBooks(User user) {
		return bookRepo.findByBorrowerIdIs(user.getId());
	}
	public List<Book> myBooks(User user) {
		return bookRepo.findByUserIdIs(user.getId());
	}
	public Book addBook(Book book) {
		return bookRepo.save(book);
	}
	public void removeBorrower(Book book) {
		book.setBorrower(null);
		bookRepo.save(book);
	}
	public void addBorrower(Book book,User user) {
		book.setBorrower(user);
		bookRepo.save(book);
	}
}
