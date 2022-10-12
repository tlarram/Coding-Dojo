package com.timlarramore.productsandcategories.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.timlarramore.productsandcategories.models.Category;
import com.timlarramore.productsandcategories.models.Product;
import com.timlarramore.productsandcategories.repositories.CategoryRepo;

@Service
public class CategoryService {
	private final CategoryRepo categoryRepo;
	
	public CategoryService (CategoryRepo categoryRepo) {
		this.categoryRepo= categoryRepo;
	}
	public List<Category> allCategories(){
		return this.categoryRepo.findAll();
	}
	
	public Category addCategory(Category category) {
		return categoryRepo.save(category);
	}
	
	public Category updateCategory(Category category) {
		return categoryRepo.save(category);
	}
	
	public void deleteCategory(Category category) {
		categoryRepo.delete(category);
	}
	public Category findById(Long id) {
		Optional<Category> optionalCategory = categoryRepo.findById(id);
		if(optionalCategory.isPresent()) {
			return optionalCategory.get();
		}else {
			return null;
		}
	}
	public List<Category> getAssignedProducts(Product product){
		return categoryRepo.findAllByProducts(product);
	}
	
	public List<Category> getUnassignedProducts(Product product){
		return categoryRepo.findByProductsNotContains(product);
	}
}

