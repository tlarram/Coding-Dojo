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
<title>Project Info</title>
</head>
<body>
<div class="d-flex justify-content-between">
<h1>Welcome ${Name }</h1>
<p><a class="btn btn-danger" href="/logout">Log Out</a>
</div>
<div class="d-flex justify-content-between">
<h3>Books from everyone's shelves</h3> <a href="books/new">+ Add a book to my shelf</a>
</div>
<table>

    <thead>
        <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Author Name</th>
            <th>Posted By</th>
        </tr>
    </thead>
    <tbody>
         <!-- loop over the dojo to show the ninjas as in the wireframe! -->
         <c:forEach var="book" items="${books}">
         <tr>
         <td><c:out value="${book.id }"></c:out></td>
         <td><a href="/books/${book.id }"><c:out value="${book.title }"></c:out></a></td>
		
		 <td><c:out value="${book.author}"></c:out></td>
		 <td><c:out value="${book.user.name}"></c:out></td>
         </tr>
         </c:forEach>
    </tbody>
</table>
</body>
</html>