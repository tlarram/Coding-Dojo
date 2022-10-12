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
<title>Edit Project</title>
</head>
<body>

<div>
<div class="d-flex justify-content-between"><h1>Edit a Project</h1> <a href="/projects">Home</a>
</div>

<form:form action="/projects/edit/${project.id }" method="post" modelAttribute="project">
 <input type="hidden" name="_method" value="put">
	

	<div>
		<form:label path="title">Title: </form:label><br />
		<form:input style="width:250px;" path="title"/>
		<form:errors path="title" class="text-danger"/>
	</div>
	
	<div>
		<form:label path="description">Description: </form:label><br />
		<form:textarea style="width:250px;"  path="description"/>
		<form:errors path="description" class="text-danger"/>
	</div>
	<div>
		<form:label path="dueDate">Date: </form:label><br />
		<form:input style="width:250px;" type="date" path="dueDate"/>
		<form:errors path="dueDate" class="text-danger"/>
	</div>
	<form:hidden path="lead" value="${userId}" />
	<div>
		<input type="submit" value="Edit"/>
	</div>
	
	

</form:form>
</div>	

</body>
</html>
