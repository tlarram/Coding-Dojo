package com.timlarramore.savetravels.services;

import java.util.List;

import javax.validation.Valid;

import org.springframework.stereotype.Service;

import com.timlarramore.savetravels.models.Expense;
import com.timlarramore.savetravels.repositories.ExpenseRepository;

@Service
public class ExpenseService {
	
	private final ExpenseRepository expenseRepository;
	
	public ExpenseService(ExpenseRepository expenseRepository) {
		this.expenseRepository= expenseRepository;
	}
	public List<Expense> allExpenses() {
		return expenseRepository.findAll();
	}
	public Expense createExpense(Expense expense) {
		return expenseRepository.save(expense);
	}
		


}
