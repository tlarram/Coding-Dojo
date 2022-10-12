<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />
<meta charset="ISO-8859-1">
<title>About Book</title>
</head>
<body>
<div class="d-flex justify-content-between"><h1><c:out value="${book.title }"></c:out></h1> <a href="/books">back to book shelf</a>
</div>
<c:choose>
<c:when test="${userId.equals(book.user.id) }">
<p> You read <c:out value="${book.title }"></c:out> by <c:out value="${book.author}"></c:out></p>
</c:when>
<c:otherwise> 
<p><c:out value="${book.user.name }"></c:out> read <c:out value="${book.title }"></c:out> by <c:out value="${book.author}"></c:out></p>
</c:otherwise>
</c:choose>
<c:choose>
<c:when test="${userId.equals(book.user.id) }">
<p>Here are your thoughts:
</c:when>
<c:otherwise> 
<p>Here are <c:out value="${book.user.name }"></c:out> thoughts:</p>
</c:otherwise>
</c:choose>
<p> <c:out value="${book.thoughts}">${book.thoughts}</c:out></p>
<c:choose>
		<c:when test="${userId.equals(book.user.id) }">
		<p><a href="/books/edit/${book.id }" class="btn btn-warning">Edit</a></p>
		<form action="/books/delete/${book.id }" method="POST">
		 <input type="hidden" name="_method" value="delete">
		 <button class="btn btn-danger" type="submit">Delete</button>
		 </form>
		</c:when>
		<c:otherwise> 
		</c:otherwise>
		
		</c:choose>
		

</body>
</html>