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

<div>
<div class="d-flex justify-content-between"><h1>Edit a language:</h1> <a href="/languages">Dashboard</a>
</div>

<form:form action="/languages/edit/${language.id}" method="post" modelAttribute="language">
  <input type="hidden" name="_method" value="put">
	<div>
		<form:label path="name">Name: </form:label><br />
		<form:errors path="name" class="text-danger"/>
		<form:input style="width:250px;" path="name"/>
	</div>

	<div>
		<form:label path="creator">Vendor: </form:label><br />
		<form:errors path="creator" class="text-danger"/>
		<form:input style="width:250px;" path="creator"/>
	</div>
	
	<div>
		<form:label path="version">Amount: </form:label><br />
		<form:errors path="version" class="text-danger"/>
		<form:input style="width:250px;" type="double" path="version"/>
	</div>
	<div>
		<input type="submit" value="Edit"/>
	</div>
	
	

</form:form>
</div>	

</body>
</html>