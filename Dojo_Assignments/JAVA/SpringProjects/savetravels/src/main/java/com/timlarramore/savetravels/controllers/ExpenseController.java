package com.timlarramore.savetravels.controllers;

import java.util.List;

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
import org.springframework.web.bind.annotation.RequestMapping;

import com.timlarramore.savetravels.models.Expense;
import com.timlarramore.savetravels.services.ExpenseService;

@Controller
public class ExpenseController {
	
	@Autowired
	ExpenseService expenseService;
	
	@RequestMapping("/expenses")
	public String index() {
		return "index.jsp";
	}
	@GetMapping("/expenses")
	public String newExpenseForm(@ModelAttribute("expense")Expense expense, Model model) {
		List<Expense> expenses = expenseService.allExpenses();
		model.addAttribute("expenses", expenses);
		return "index.jsp";
	}
	@PostMapping("/expenses")
	public String index(@Valid @ModelAttribute("expense") Expense expense, BindingResult result, Model model) {
		if(result.hasErrors()) {
			List<Expense> expenses = expenseService.allExpenses();
			model.addAttribute("expenses", expenses);
			return "index.jsp";
		}else {
			expenseService.createExpense(expense);
			return "redirect:/expenses";
		}
	}
	// ----------EDIT--------------
	// 1. Show Form
	@GetMapping("/expenses/edit/{id}")
	public String showEditForm(@PathVariable("id") Long id, Model model) {
	Expense foundExpense = expenseService.findExpense(id);
	model.addAttribute("expense", foundExpense);
	return "editForm.jsp";
	}
	// 2. process form
	@PutMapping("/expenses/edit/{id}")
	public String proccessEditForm(@Valid @ModelAttribute("expense")Expense expense, BindingResult result) {
		if(result.hasErrors()) {
			return "editForm.jsp";
		} else {
			expenseService.updateExpense(expense);
			return "redirect:/expenses";
		}
		
		
		
	}
	
	
	// ----------DELETE--------------
	@DeleteMapping("/expenses/delete/{id}")
	public String processDelete(@PathVariable("id") Long id) {
		expenseService.deleteExpense(id);
		return "redirect:/expenses";
	}
	// ----------Show 1 Expense--------------
	@GetMapping("/expenses/{id}")
	public String show(@PathVariable("id") Long id, Model model) {
		Expense expense = expenseService.findExpense(id);
		model.addAttribute("expense", expense);
		return "show.jsp";
	}
	
}