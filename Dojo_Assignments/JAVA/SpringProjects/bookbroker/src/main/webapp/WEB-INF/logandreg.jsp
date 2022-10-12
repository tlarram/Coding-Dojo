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
<title>Expense Info</title>
</head>
<body>
<h1 class='text-center'>Book Club</h1>
<p class='text-center'>A place for friends to share thoughts on books</p>
<div class="d-flex justify-content-around">
	<div>
		<h1>Register</h1>
		<form:form action="/register" method="post" modelAttribute="newUser">
	<div>
		<div>
		<form:label path="name">Name: </form:label><br />
		<form:input style="width:250px;" path="name"/>
		<form:errors path="name" class="text-danger"/>
	</div>
	</div>
	<div>
		<form:label path="email">Email: </form:label><br />
		<form:input style="width:250px;" path="email"/>
		<form:errors path="email" class="text-danger"/>
	</div>
	
	
	<div>
		<form:label path="password">Password: </form:label><br />
		<form:input style="width:250px;"  path="password" type="password"/>
		<form:errors path="password" class="text-danger"/>
	</div>
	<div>
		<form:label path="confirm">Confirm Password: </form:label><br />
		<form:input style="width:250px;"  path="confirm" type="password"/>
		<form:errors path="confirm" class="text-danger"/>
	</div>
	<div>
		<input type="submit" value="Submit"/>
	</div>
	
	

</form:form>
	</div>
	<div>
		<h1>Log In</h1>
	<form:form action="/login" method="post" modelAttribute="newLogin">
	
	<div>
		<form:label path="email">Email: </form:label><br />
		<form:input style="width:250px;" path="email"/>
		<form:errors path="email" class="text-danger"/>
	</div>
	
	<div>
		<form:label path="password">Password: </form:label><br />
		<form:input style="width:250px;"  path="password" type="password"/>
		<form:errors path="password" class="text-danger"/>
	</div>
	<div>
		<input type="submit" value="Submit"/>
	</div>
	
	

</form:form>
	</div>
</div>
</body>
</html>