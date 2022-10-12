<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ page isErrorPage="true" %>
<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />
<meta charset="ISO-8859-1">
<title>Home Page</title>
</head>
<body>
<h1>Home Page</h1>
<p><a href="/products/new">New Product</a></p>
<p><a href="/category/new">New Category</a></p>
<hr>
<table>
	<thead>
		<tr>
			<td>Products</td>
			<td>Categories</td>
		</tr>
	</thead>
    <tbody>
		<tr>
			<td>
				<ul>
					<c:forEach var="product" items="${products}">
						<li><a href="/products/${product.id}"><c:out value="${product.name}"></c:out></a></li>
					</c:forEach>
				</ul>
			</td>
			<td>
				<ul>
					<c:forEach var="category" items="${categories}">
						<li><a href="/category/${category.id}"><c:out value="${category.name}"></c:out></a></li>
					</c:forEach>
				</ul>
			</td>
		</tr>
    </tbody>
</table>

</body>
</html>