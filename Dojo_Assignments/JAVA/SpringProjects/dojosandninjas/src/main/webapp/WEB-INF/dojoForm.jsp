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
<title>Dojo</title>
</head>
<body>
<h1>New Dojo</h1>
<form:form action="/dojo/new" method="post" modelAttribute="newDojo">

	<div>
		<form:label path="dojo">Name: </form:label><br />
		<form:errors path="dojo" class="text-danger"/>
		<form:input style="width:250px;" path="dojo"/>
	</div>

	<div>
		<input type="submit" value="Create"/>
	</div>
	
	

</form:form>



</body>
</html>