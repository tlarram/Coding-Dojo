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
<div class="d-flex justify-content-between"><h1>Change <c:out value="${name.babyName }"></c:out></h1> <a href="/projects">Home</a>
</div>

<form:form action="/names/new" method="post" modelAttribute="name">
 
	

	<div>
		<form:label path="babyName">New Name: </form:label><br />
		<form:input style="width:250px;" path="babyName"/>
		<form:errors path="babyName" class="text-danger"/>
	</div>
	
	<div>
		<form:label path="gender">Typical Gender: </form:label><br />
		<form:select style="width:250px;"  path="gender">
			<form:option value="neutral">Neutral</form:option>
			<form:option value="male">Male</form:option>
			<form:option value="female">Female</form:option>
		</form:select>
		<form:errors path="gender" class="text-danger"/>
	</div>
	<div>
		<form:label path="origin">Origin: </form:label><br />
		<form:input style="width:250px;" type="text" path="origin"/>
		<form:errors path="origin" class="text-danger"/>
	</div>
	<div>
		<form:label path="meaning">Meaning:</form:label><br />
		<form:textarea style="width:250px;" type="date" path="meaning"/>
		<form:errors path="meaning" class="text-danger"/>
	</div>
	<form:hidden path="user"  />
	<div>
	<a class="btn btn-warning" href="/home">Cancel</a>
		<input class="btn btn-primary" type="submit" value="Submit"/>
	</div>
	
	

</form:form>
</div>	

</body>
</html>
