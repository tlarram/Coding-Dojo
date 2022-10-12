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
<title>Lending Books Dashboard</title>
</head>
<body>
<div class="d-flex justify-content-between">
<h2>Welcome ${Name }, Welcome to</h2>
<p><a class="btn btn-danger" href="/logout">Log Out</a>
</div>
<h1>The Book Broker!</h1>
<div class="d-flex justify-content-between">
<h3>Available books to Borrow</h3> 
</div>
<table>

    <thead>
        <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Author Name</th>
            <th>Owner</th>
            <th>Actions</th>
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
		 <c:if test = "${book.user.id==user.id}">
			       <td><a href="/books/edit/${book.id}">edit</a> <a href="/books/delete/${book.id}">delete</a></td>
			    </c:if>
				<c:if test = "${book.user.id!=user.id}">
			       <td><a href="/bookmarket/${book.id}">borrow</a></td>
			    </c:if>
         </tr>
         </c:forEach>
    </tbody>
</table>
<p>Books I'm borrowing..</p>
<table>
	<thead>
		<tr>
			<td>ID</td>
			<td>Title</td>
			<td>Author Name</td>
			<td>Owner</td>
			<td>Actions</td>
		</tr>
	</thead>
    <tbody>
		<c:forEach var="book" items="${myBooks}">
			<tr>
				<td><c:out value="${book.id}"></c:out></td>
				<td><a href="/books/${book.id}"><c:out value="${book.title}"></c:out></a></td>
				<td><c:out value="${book.author}"></c:out></td>
				<td><c:out value="${book.user.name}"></c:out></td>
				<td><a href="/bookmarket/return/${book.id}">return</a></td>
			</tr>	
		</c:forEach>
    </tbody>
</table>
</body>
</html>