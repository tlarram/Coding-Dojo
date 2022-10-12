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
<title>Project Manager</title>
</head>
<body>
<h1 class='text-center'>Project Manager</h1>
<p class='text-center'>A place for teams to manage projects</p>
<div class="d-flex justify-content-around">
	<div>
		<h1>Register</h1>
		<form:form action="/register" method="post" modelAttribute="newUser">
	<div>
		<form:label path="firstName">First Name: </form:label><br />
		<form:input style="width:250px;" path="firstName"/>
		<form:errors path="firstName" class="text-danger"/>
	</div>
	<div>
		<form:label path="lastName">Last Name: </form:label><br />
		<form:input style="width:250px;" path="lastName"/>
		<form:errors path="lastName" class="text-danger"/>
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