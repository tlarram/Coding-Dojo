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
<title>New Ninja</title>
</head>
<body>

<div>
<div class="d-flex justify-content-between"><h1>New Ninja</h1> <a href="/languages">Dashboard</a>
</div>

<form:form action="/ninjas/new" method="post" modelAttribute="ninja">
 
	<div>
		<form:select path="dojo">
		<c:forEach var="eachDojo" items="${dojoList }">
			<form:option style="width:250px;" value="${eachDojo.id }">${eachDojo.dojo }</form:option>
			</c:forEach>
			</form:select>
	</div>

	<div>
		<form:label path="firstName">First Name: </form:label><br />
		<form:errors path="firstName" class="text-danger"/>
		<form:input style="width:250px;" path="firstName"/>
	</div>
	
	<div>
		<form:label path="lastName">Last Name: </form:label><br />
		<form:errors path="lastName" class="text-danger"/>
		<form:input style="width:250px;"  path="lastName"/>
	</div>
	<div>
		<form:label path="age">Age: </form:label><br />
		<form:errors path="age" class="text-danger"/>
		<form:input style="width:250px;" type="Integer" path="age"/>
	</div>
	<div>
		<input type="submit" value="Create"/>
	</div>
	
	

</form:form>
</div>	

</body>
</html>