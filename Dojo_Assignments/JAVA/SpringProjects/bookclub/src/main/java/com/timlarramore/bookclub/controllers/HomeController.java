package com.timlarramore.bookclub.controllers;

import java.util.List;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;

import com.timlarramore.bookclub.models.Book;
import com.timlarramore.bookclub.services.MainService;

@Controller
public class HomeController {
	
	@Autowired
	MainService mainServ;
	
	@GetMapping("/books")
    public String dashboard(HttpSession session,Model model) {
		if(session.getAttribute("userId")==null) {
			return "redirect:/logout";
		}
		List<Book> books= mainServ.allBooks();
		model.addAttribute("books", books);
    	return "dashboard.jsp";
    }
	
	@GetMapping("/books/new")
	public String viewForm (HttpSession session, Model model) {
		if(session.getAttribute("userId")==null) {
			return "redirect:/logout";
		}
		List<Book> books= mainServ.allBooks();
		model.addAttribute("books", books);
		model.addAttribute("book", new Book());
		return "bookForm.jsp";
	}
	@PostMapping("/books/new")
	public String processForm (@Valid @ModelAttribute("book")Book book, BindingResult result, Model model) {
		
		if(result.hasErrors()) {
			List<Book> books= mainServ.allBooks();
			model.addAttribute("books", books);
			return "bookForm.jsp";
		} else {
			mainServ.createBook(book);
			return "redirect:/books";
		}
		
	}
	@GetMapping("/books/{id}")
	public String getBookById(@PathVariable("id")Long id,Model model, HttpSession session) {
		if(session.getAttribute("userId")==null) {
			return "redirect:/logout";
		}
		Book book = mainServ.findBook(id);
		model.addAttribute("book", book);
		return "oneBook.jsp";
	}
	
	@GetMapping("/books/edit/{id}")
	public String showEditForm(@PathVariable("id")Long id, Model model, HttpSession session) {
		if(session.getAttribute("userId")==null) {
			return "redirect:/logout";
		}
		Book foundBook = mainServ.findBook(id);
		model.addAttribute("book", foundBook);
		return "editForm.jsp";
	}
		
	@PutMapping("/books/edit/{id}")
	public String processEditForm(@Valid @ModelAttribute("book") Book book,BindingResult result) {
		if (result.hasErrors()) {
			return "editForm.jsp";
		} else {
		mainServ.updateBook(book);
		return "redirect:/books";	
	}
	}
	@DeleteMapping("books/delete/{id}")
	public String processDelete(@PathVariable("id") Long id) {
		mainServ.deleteBook(id);
		return "redirect:/books";
	}
}
