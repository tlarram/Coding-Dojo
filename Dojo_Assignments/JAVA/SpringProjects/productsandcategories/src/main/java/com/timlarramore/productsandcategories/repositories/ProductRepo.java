package com.timlarramore.productsandcategories.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.timlarramore.productsandcategories.models.Category;
import com.timlarramore.productsandcategories.models.Product;

public interface ProductRepo extends CrudRepository<Product, Long>{
	List<Product> findAll();
	Product findByIdIs(Long id);
	List<Product> findAllByCategories(Category category);
	List<Product> findByCategoriesNotContains(Category category);

}
