package com.timlarramore.productsandcategories.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.timlarramore.productsandcategories.models.Category;
import com.timlarramore.productsandcategories.models.Product;
import com.timlarramore.productsandcategories.services.CategoryService;
import com.timlarramore.productsandcategories.services.ProductService;



@Controller
public class HomeController {
	
	@Autowired
	private ProductService productService;
	
	@Autowired
	private CategoryService categoryService;

	@GetMapping("/")
	public String index(Model model) {
		
		List<Product> products = productService.allProducts();
		List<Category> categories = categoryService.allCategories();
		
		model.addAttribute("products", products);
		model.addAttribute("categories", categories);
		
		return "homePage.jsp";	
	}
	
	@GetMapping("/products/new")
	public String newProduct(@ModelAttribute("product") Product product) {
		return "newProduct.jsp";
	}
	
	@PostMapping("/products/new")
	public String addNewProduct(@Valid @ModelAttribute("product") Product product, BindingResult result, Model model) {
		if(result.hasErrors()) {
			return "newProduct.jsp";
		}else {
			productService.addProduct(product);
			return "redirect:/";
		}
	}
	
	@GetMapping("/products/{id}")
	public String showProduct(@PathVariable("id") Long id, Model model) {
		Product product = productService.findById(id);
		model.addAttribute("assignedCategories", categoryService.getAssignedProducts(product));
		model.addAttribute("unassignedCategories", categoryService.getUnassignedProducts(product));
		model.addAttribute("product", product);
		return "productPage.jsp";
	}
	
	@PostMapping("/products/{id}")
	public String editProduct(@PathVariable("id") Long id, @RequestParam(value="categoryId") Long catId,  Model model) {
		Product product = productService.findById(id);
		Category category = categoryService.findById(catId);
		product.getCategories().add(category);
		productService.updateProduct(product);
		model.addAttribute("assignedCategories", categoryService.getAssignedProducts(product));
		model.addAttribute("unassignedCategories", categoryService.getUnassignedProducts(product));
		return "redirect:/products/{id}";
	}
	
	@GetMapping("/category/new")
	public String newCategory(@ModelAttribute("category") Category category) {
		return "newCategory.jsp";
	}
	
	@PostMapping("/category/new")
	public String addNewCategory(@Valid @ModelAttribute("category") Category category, BindingResult result, Model model) {
		if(result.hasErrors()) {
			return "newCategory.jsp";
		}else {
			categoryService.addCategory(category);
			return "redirect:/";
		}
	}
	
	@GetMapping("/category/{id}")
	public String showCategory(@PathVariable("id") Long id, Model model) {
		Category category = categoryService.findById(id);
		model.addAttribute("assignedProducts", productService.getAssignedCategories(category));
		model.addAttribute("unassignedProducts", productService.getUnassignedCategories(category));
		model.addAttribute("category", categoryService.findById(id));
		return "categoryPage.jsp";
	}

	
	@PostMapping("/category/{id}")
	public String editCategory(@PathVariable("id") Long id, @RequestParam(value="productId") Long prodId, Model model) {
		Category category = categoryService.findById(id);
		Product product = productService.findById(prodId);
		category.getProducts().add(product);
		categoryService.updateCategory(category);
		model.addAttribute("assignedProducts", productService.getAssignedCategories(category));
		model.addAttribute("unassignedProducts", productService.getUnassignedCategories(category));
		return "redirect:/category/{id}";
	}

}

