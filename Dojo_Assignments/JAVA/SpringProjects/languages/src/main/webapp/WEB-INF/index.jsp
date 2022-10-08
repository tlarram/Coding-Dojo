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
<title>Expenses</title>
</head>
<body>

<h1>Languages</h1>
<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Creator</th>
            <th>Version</th>
            <th>Action</th>
            
        </tr>
    </thead>
    <tbody>
         <!-- loop over all the books to show the details as in the wireframe! -->
         <c:forEach var="language" items="${languages}">
         <tr>
         <td><a href="/languages/${language.id}"><c:out value="${language.name }"></c:out></a></td>
		 <td><c:out value="${language.creator}"></c:out></td>
		 <td><c:out value="${language.version}"></c:out></td>
		 <td><a href="/languages/edit/${language.id}">Edit</a><td>
		 <td>
		 <form action="/languages/delete/${language.id }" method="POST">
		 <input type="hidden" name="_method" value="delete">
		 <button class="btn btn-danger" type="submit">Delete</button>
		 </form>
		 
		 </td>
         </tr>
         </c:forEach>
    </tbody>
</table>
<div>
<h1>Add an Language:</h1>
<form:form action="/languages" method="post" modelAttribute="language">

	<div>
		<form:label path="name">Name: </form:label><br />
		<form:errors path="name" class="text-danger"/>
		<form:input style="width:250px;" path="name"/>
	</div>

	<div>
		<form:label path="creator">Creator: </form:label><br />
		<form:errors path="creator" class="text-danger"/>
		<form:input style="width:250px;" path="creator"/>
	</div>
	
	<div>
		<form:label path="version">Version: </form:label><br />
		<form:errors path="version" class="text-danger"/>
		<form:input style="width:250px;" type="double" path="version"/>
	</div>
	
	
	<div>
		<input type="submit" value="Submit"/>
	</div>
	
	

</form:form>
</div>


</body>
</html>