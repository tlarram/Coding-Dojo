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
<title>New Book</title>
</head>
<body>

<div>
<div class="d-flex justify-content-between"><h1>Add a Book to Your Shelf</h1> <a href="/books">back to the shelves</a>
</div>

<form:form action="/books/edit/${book.id }" method="post" modelAttribute="book">
 <input type="hidden" name="_method" value="put">
	

	<div>
		<form:label path="title">Title: </form:label><br />
		<form:input style="width:250px;" path="title"/>
		<form:errors path="title" class="text-danger"/>
	</div>
	
	<div>
		<form:label path="author">Author: </form:label><br />
		<form:input style="width:250px;"  path="author"/>
		<form:errors path="author" class="text-danger"/>
	</div>
	<div>
		<form:label path="thoughts">My Thoughts: </form:label><br />
		<form:textarea style="width:250px;" type="text" path="thoughts"/>
		<form:errors path="thoughts" class="text-danger"/>
	</div>
	<form:hidden path="user" value="${userId}" />
	<div>
		<input type="submit" value="Edit"/>
	</div>
</form:form>
</div>	

</body>
</html>