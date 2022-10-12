package com.timlarramore.productsandcategories.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.timlarramore.productsandcategories.models.Category;
import com.timlarramore.productsandcategories.models.Product;

public interface CategoryRepo extends CrudRepository <Category, Long> {
	List<Category> findAll();
	Category findByIdIs(Long id);
	List<Category> findAllByProducts(Product product);
	List<Category> findByProductsNotContains(Product product);
 
}
